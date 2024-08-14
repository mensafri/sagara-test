"use client";

import * as React from "react";
import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Settings } from "lucide-react";
import AddStudentDialog from "../AddStudentDialog";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

export function DataTable<TData, TValue>({
	columns,
	data,
}: Readonly<DataTableProps<TData, TValue>>) {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [pagination, setPagination] = React.useState({
		pageIndex: 0, //initial page index
		pageSize: 6, //default page size
	});
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[],
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onPaginationChange: setPagination,
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		state: {
			sorting,
			pagination,
			columnFilters,
			columnVisibility,
		},
	});

	const totalPages = table.getPageCount();
	const currentPage = table.getState().pagination.pageIndex + 1;
	const maxPagesToShow = 5;

	const getPageNumbers = () => {
		const pageNumbers = [];
		let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
		let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

		if (endPage - startPage + 1 < maxPagesToShow) {
			startPage = Math.max(endPage - maxPagesToShow + 1, 1);
		}

		for (let i = startPage; i <= endPage; i++) {
			pageNumbers.push(i);
		}

		return pageNumbers;
	};

	const pageNumbers = getPageNumbers();

	return (
		<div>
			<p className="text-2xl font-bold">Data Student</p>
			<div className="flex items-center justify-between py-4">
				<AddStudentDialog />
				<div className="flex flex-row gap-2">
					<Input
						placeholder="Search"
						value={
							(table.getColumn("fullName")?.getFilterValue() as string) ?? ""
						}
						onChange={(event) =>
							table.getColumn("fullName")?.setFilterValue(event.target.value)
						}
						className="max-w-sm"
					/>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="outline"
								className="ml-auto">
								<Settings />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							{table
								.getAllColumns()
								.filter((column) => column.getCanHide())
								.map((column) => {
									return (
										<DropdownMenuCheckboxItem
											key={column.id}
											className="capitalize"
											checked={column.getIsVisible()}
											onCheckedChange={(value) =>
												column.toggleVisibility(!!value)
											}>
											{column.id}
										</DropdownMenuCheckboxItem>
									);
								})}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
			<div className="rounded-md border bg-white">
				<Table>
					<TableHeader className="bg-[#EAECF0]">
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext(),
												  )}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody className="bg-white">
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
				<div className="flex items-center justify-between space-x-2 p-4 border">
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}>
						Previous
					</Button>
					<div className="flex flex-row gap-4 justify-center items-center">
						{currentPage > 1 && totalPages > maxPagesToShow && (
							<>
								{currentPage > 2 && (
									<p className="text-sm font-bold text-[#637381]">1</p>
								)}
								{currentPage > 3 && (
									<p className="text-sm font-bold text-[#637381]">...</p>
								)}
							</>
						)}
						{pageNumbers.map((pageNumber) => (
							<p
								key={pageNumber}
								className={`text-sm font-bold ${
									pageNumber === currentPage
										? "text-primaryRed"
										: "text-[#637381]"
								}`}>
								{pageNumber}
							</p>
						))}
						{currentPage < totalPages && totalPages > maxPagesToShow && (
							<>
								{currentPage < totalPages - 2 && (
									<p className="text-sm font-bold text-[#637381]">...</p>
								)}
								{currentPage < totalPages - 1 && (
									<p className="text-sm font-bold text-[#637381]">
										{totalPages}
									</p>
								)}
							</>
						)}
					</div>
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
}

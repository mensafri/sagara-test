"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowUpDown, Trash } from "lucide-react";
import Image from "next/image";
import EditStudentDialog from "../EditStudentDialog";
import { useStudentContext } from "../StudentContext";
import DeleteStudentButton from "../DeleteStudentButton";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Student = {
	id: string;
	fullName: string;
	email: string;
	phoneNumber: string;
	instance: string;
	password: string;
	createdAt: Date;
};

export const columns: ColumnDef<Student>[] = [
	{
		id: "image",
		header: "Profil",
		cell: ({ row }) => {
			return (
				<div className="h-10 w-10 relative rounded-full">
					<Image
						src="https://picsum.photos/seed/student1/200/200"
						alt={row.getValue<string>("fullName")}
						fill
						className="object-cover rounded-full"
					/>
				</div>
			);
		},
	},
	{
		accessorKey: "fullName",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Full Name
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "email",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Email Address
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "phoneNumber",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Phone Number
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "instance",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Instance
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "createdAt",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Created At
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const date = new Date(row.getValue<string>("createdAt"));
			return date.toLocaleDateString("en-US", {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
			});
		},
	},
	{
		id: "actions",
		header: ({ column }) => {
			return <div className="text-center">Actions</div>;
		},
		cell: ({ row }) => {
			const { id } = row.original;
			return (
				<div className="flex flex-row gap-2 justify-center items-center">
					<DeleteStudentButton id={id} />
					<EditStudentDialog id={id} />
				</div>
			);
		},
	},
];

"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AdminNavbar = () => {
	const pathname = usePathname();

	const isActive = (path: string) => {
		return pathname === path
			? "bg-[#8B0000] text-white"
			: "text-gray-300 hover:bg-gray-800";
	};

	return (
		<div className="w-full h-16 bg-white shadow-sm py-3 px-6 relative">
			<div className="flex justify-between items-center w-full">
				{/* Mobile Navigation Links */}
				<div className="flex items-center space-x-4 md:hidden">
					<Link
						href="/admin"
						className={`py-2 px-4 rounded ${isActive("/admin")}`}>
						Dashboard
					</Link>
					<Link
						href="/admin/student"
						className={`py-2 px-4 rounded ${isActive("/admin/student")}`}>
						Students
					</Link>
				</div>

				{/* User Info and Popover */}
				<div
					className="flex justify-end items-center w-full md:w-auto 
                absolute top-2 right-4">
					<Popover>
						<PopoverTrigger>
							<div className="flex items-center gap-3">
								<div className="text-right hidden sm:block">
									<h3 className="font-semibold text-gray-800">Thomas Anree</h3>
									<p className="text-sm text-gray-500">Admin</p>
								</div>
								<Avatar>
									<AvatarImage src="https://picsum.photos/seed/student10/200/200" />
									<AvatarFallback>TA</AvatarFallback>
								</Avatar>
								<ChevronDown className="text-gray-500 w-5 h-5 hidden sm:block" />
							</div>
						</PopoverTrigger>
						<PopoverContent
							className="absolute right-0 top-full mt-2 w-48"
							align="end">
							Bisa diisi dengan info user
						</PopoverContent>
					</Popover>
				</div>
			</div>
		</div>
	);
};

export default AdminNavbar;

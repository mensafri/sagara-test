"use client";

import Image from "next/image";
import Link from "next/link";
import { GraduationCap, LayoutDashboard } from "lucide-react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
	const pathname = usePathname();

	const isActive = (path: string) => {
		return pathname === path
			? "bg-[#8B0000] text-white"
			: "text-gray-300 hover:bg-gray-800";
	};

	return (
		<div className="bg-[#1C1C1C] flex flex-col min-h-screen w-64 text-white hidden md:flex">
			<div className="p-4">
				<Image
					src="/icons/Logo2.png"
					alt="Sagara Tech"
					width={178}
					height={64}
				/>
			</div>
			<div className="mt-8 px-4">
				<p className="text-sm text-gray-400 mb-4">MENU</p>
				<nav>
					<Link
						href="/admin"
						className={`flex items-center py-2 px-4 rounded ${isActive(
							"/admin",
						)}`}>
						<LayoutDashboard
							className="mr-3"
							size={20}
						/>
						Dashboard
					</Link>
					<Link
						href="/admin/student"
						className={`flex items-center py-2 px-4 rounded mt-2 ${isActive(
							"/admin/student",
						)}`}>
						<GraduationCap
							className="mr-3"
							size={20}
						/>
						Students
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;

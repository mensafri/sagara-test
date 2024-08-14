import AdminNavbar from "@/components/AdminNavbar";
import Sidebar from "@/components/Sidebar";

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="min-h-screen bg-[#F4F4F4] flex flex-row w-screen">
			<Sidebar />
			<div className="w-full flex flex-col">
				<AdminNavbar />
				{children}
			</div>
		</div>
	);
}

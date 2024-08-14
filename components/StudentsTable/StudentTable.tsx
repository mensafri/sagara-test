"use client";

import { columns } from "@/components/StudentsTable/columns";
import { DataTable } from "@/components/StudentsTable/data-table";
import { useStudentContext } from "../StudentContext";

const StudentTable = () => {
	const { students } = useStudentContext();
	return (
		<DataTable
			columns={columns}
			data={students}
		/>
	);
};

export default StudentTable;

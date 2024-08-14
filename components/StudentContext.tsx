"use client";
import { dummyStudents } from "@/lib/constants";
import React, {
	createContext,
	useState,
	ReactNode,
	useContext,
	useMemo,
} from "react";
import { Student } from "./StudentsTable/columns";

interface StudentContextType {
	students: Student[];
	addStudent: (student: Student) => void;
	editStudent: (id: string, updatedStudent: Partial<Student>) => void;
	deleteStudent: (id: string) => void;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [students, setStudents] = useState<Student[]>(dummyStudents);

	const addStudent = (student: Student) => {
		setStudents((prevStudents) => [...prevStudents, student]);
	};
	const editStudent = (id: string, updatedStudent: Partial<Student>) => {
		setStudents((prevStudents) =>
			prevStudents.map((student) =>
				student.id === id ? { ...student, ...updatedStudent } : student,
			),
		);
	};

	const deleteStudent = (id: string) => {
		setStudents((prevStudents) =>
			prevStudents.filter((student) => student.id !== id),
		);
	};

	const contextValue = useMemo(
		() => ({
			students,
			addStudent,
			editStudent,
			deleteStudent,
		}),
		[students],
	);

	return (
		<StudentContext.Provider value={contextValue}>
			{children}
		</StudentContext.Provider>
	);
};

export const useStudentContext = () => {
	const context = useContext(StudentContext);
	if (context === undefined) {
		throw new Error("useStudentContext must be used within a StudentProvider");
	}
	return context;
};

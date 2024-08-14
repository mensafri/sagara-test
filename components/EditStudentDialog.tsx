"use client";
import { Pencil, Upload } from "lucide-react";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema } from "@/lib/constants";
import { z } from "zod";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import InputField from "./InputField";
import { useStudentContext } from "./StudentContext";
import { Student } from "./StudentsTable/columns";

const EditStudentDialog = ({ id }: { id: string }) => {
	const { editStudent, students } = useStudentContext();
	const [isLoading, setIsLoading] = useState(false);
	const [selectedStudent, setSelectedStudent] = useState<Student | undefined>(
		undefined,
	);

	// Update selectedStudent when students or id changes
	useEffect(() => {
		const student = students.find((student) => student.id === id);
		setSelectedStudent(student);
	}, [students, id]);

	const formStudent = useForm<z.infer<typeof studentSchema>>({
		resolver: zodResolver(studentSchema),
		values: {
			id: selectedStudent?.id ?? "",
			fullName: selectedStudent?.fullName ?? "",
			email: selectedStudent?.email ?? "",
			phoneNumber: selectedStudent?.phoneNumber ?? "",
			instance: selectedStudent?.instance ?? "",
			password: selectedStudent?.password ?? "",
			createdAt: selectedStudent?.createdAt ?? new Date(),
			reTypePassword: selectedStudent?.password ?? "",
		},
	});

	useEffect(() => {
		if (selectedStudent) {
			formStudent.reset({
				id: selectedStudent.id,
				fullName: selectedStudent.fullName,
				email: selectedStudent.email,
				phoneNumber: selectedStudent.phoneNumber,
				instance: selectedStudent.instance,
				password: selectedStudent.password,
				createdAt: selectedStudent.createdAt,
				reTypePassword: selectedStudent.password,
			});
		}
	}, [selectedStudent, formStudent]);

	const onSubmitStudent = (data: z.infer<typeof studentSchema>) => {
		setIsLoading(true);
		const { reTypePassword, ...dataWithoutReTypePassword } = data;

		editStudent(id, dataWithoutReTypePassword);

		setIsLoading(false);
		formStudent.reset();
		document.getElementById("dialog-close")?.click();
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost">
					<Pencil
						color="#F8AF4E"
						size={24}
					/>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit Student</DialogTitle>
				</DialogHeader>
				<Form {...formStudent}>
					<form
						onSubmit={formStudent.handleSubmit(onSubmitStudent)}
						className="flex flex-col gap-4">
						<div className="flex flex-row gap-6">
							<InputField
								control={formStudent.control}
								name="fullName"
								label="Full Name"
								placeholder="John Doe"
							/>
							<InputField
								control={formStudent.control}
								name="email"
								label="Email"
								placeholder="hS3j3@example.com"
							/>
						</div>
						<div className="flex flex-row gap-6">
							<InputField
								control={formStudent.control}
								name="phoneNumber"
								label="Phone"
								placeholder="08123456789"
							/>
							<FormField
								control={formStudent.control}
								name="instance"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Instance</FormLabel>
										<FormControl>
											<Select
												{...field}
												onValueChange={field.onChange}>
												<SelectTrigger className="w-full">
													<SelectValue
														className="w-full"
														placeholder={
															selectedStudent?.instance ?? "Select Instance"
														}
													/>
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="Telkom University">
														Telkom University
													</SelectItem>
													<SelectItem value="Unimus">Unimus</SelectItem>
													<SelectItem value="Unesa">Unesa</SelectItem>
													<SelectItem value="ITS">ITS</SelectItem>
													<SelectItem value="ITB">ITB</SelectItem>
												</SelectContent>
											</Select>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="flex flex-row gap-6">
							<InputField
								control={formStudent.control}
								name="password"
								label="Password"
								placeholder="Password"
								type="password"
							/>
							<InputField
								control={formStudent.control}
								name="reTypePassword"
								label="Re-Type Password"
								placeholder="Re-Type Password"
								type="password"
							/>
						</div>
						<div className="h-56 w-full flex justify-center items-center relative overflow-hidden bg-white rounded-lg border-2 border-dashed">
							<div className="flex flex-col justify-center items-center text-gray-500">
								<Upload size={24} />
								<p className="text-center">Click to upload or drag and drop</p>
								<p className="text-center">SVG, PNG, JPG or GIF</p>
								<p className="text-center">(max, 800 X 800px)</p>
							</div>
						</div>
						<Button
							type="submit"
							className="bg-primaryRed w-full"
							disabled={isLoading}>
							{isLoading ? "Loading..." : "Simpan"}
						</Button>
						<DialogClose
							id="dialog-close"
							asChild>
							<Button
								id="dialog-close"
								variant="outline"
								className="w-full justify-center">
								Batal
							</Button>
						</DialogClose>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export default EditStudentDialog;

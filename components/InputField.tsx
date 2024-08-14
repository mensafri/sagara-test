import { Control, useController } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input, InputProps } from "./ui/input";
import { z } from "zod";
import { studentSchema } from "@/lib/constants";
import { ComponentProps } from "react";

const convertDateToString = (date?: Date): string => {
	return date ? date.toISOString().split("T")[0] : "";
};

type StudentField = keyof z.infer<typeof studentSchema>;

type InputFieldProps = ComponentProps<"input"> & {
	control: Control<z.infer<typeof studentSchema>, any>;
	name: StudentField;
	label: string;
	placeholder: string;
};

const InputField = ({
	control,
	name,
	label,
	placeholder,
	...props
}: InputFieldProps) => {
	const { field } = useController({
		control,
		name,
	});

	const value =
		name === "createdAt"
			? convertDateToString(field.value as Date)
			: (field.value as string);

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input
							{...props}
							{...field}
							placeholder={placeholder}
							value={value}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default InputField;

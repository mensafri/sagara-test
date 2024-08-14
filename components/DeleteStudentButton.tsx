import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { useStudentContext } from "./StudentContext";

const DeleteStudentButton = ({ id }: { id: string }) => {
	const { deleteStudent } = useStudentContext();
	return (
		<Button
			variant="ghost"
			onClick={() => deleteStudent(id)}>
			<Trash
				size={24}
				color="#C30010"
			/>
		</Button>
	);
};

export default DeleteStudentButton;

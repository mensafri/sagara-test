import { DatePickerWithRange } from "@/components/DatePickerWithRange";
import StudentChart from "@/components/StudentChart";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
} from "@/components/ui/select";
import Image from "next/image";

const AdminPage = () => {
	return (
		<div className="p-4 w-full flex flex-col gap-8">
			<div className="flex flex-col sm:flex-row justify-between gap-4">
				<DatePickerWithRange />
				<Select>
					<SelectTrigger className="text-gray-500 sm:w-24 w-full">
						<p>Daily</p>
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="daily">Daily</SelectItem>
						<SelectItem value="daily">Daily</SelectItem>
						<SelectItem value="daily">Daily</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
				{/* Kartu Pertama */}
				<div className="px-4 py-6 bg-white rounded-lg shadow-md flex items-start justify-between w-full md:w-1/3">
					<div className="flex flex-col gap-3">
						<h2 className="text-lg font-medium text-gray-700">
							Total Students
						</h2>
						<p className="text-3xl font-bold text-gray-900">513</p>
						<p className="text-sm text-green-600">
							<span className="font-medium">8.5%</span> Up from yesterday
						</p>
					</div>
					<div>
						<Image
							src="/icons/icon12.png"
							alt="Icon"
							width={40}
							height={40}
							className="rounded-md"
						/>
					</div>
				</div>

				{/* Kartu Kedua */}
				<div className="px-4 py-6 bg-white rounded-lg shadow-md flex items-start justify-between w-full md:w-1/3">
					<div className="flex flex-col gap-3">
						<h2 className="text-lg font-medium text-gray-700">
							Total Certified Students
						</h2>
						<p className="text-3xl font-bold text-gray-900">489</p>
						<p className="text-sm text-green-600">
							<span className="font-medium">8.5%</span> Up from yesterday
						</p>
					</div>
					<div>
						<Image
							src="/icons/icon13.png"
							alt="Icon"
							width={40}
							height={40}
							className="rounded-md"
						/>
					</div>
				</div>

				{/* Kartu Ketiga */}
				<div className="px-4 py-6 bg-white rounded-lg shadow-md flex items-start justify-between w-full md:w-1/3">
					<div className="flex flex-col gap-3">
						<h2 className="text-lg font-medium text-gray-700">
							Average Certification Score
						</h2>
						<p className="text-3xl font-bold text-gray-900">84.62</p>
						<p className="text-sm text-green-600">
							<span className="font-medium">8.5%</span> Up from yesterday
						</p>
					</div>
					<div>
						<Image
							src="/icons/icon14.png"
							alt="Icon"
							width={40}
							height={40}
							className="rounded-md"
						/>
					</div>
				</div>
			</div>
			<StudentChart />
		</div>
	);
};

export default AdminPage;

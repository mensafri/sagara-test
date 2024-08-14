"use client";

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ name: "Back End", students: 289 },
	{ name: "Front End", students: 190 },
	{ name: "Quality Assurance", students: 300 },
	{ name: "UI/UX", students: 120 },
];

const StudentChart = () => {
	return (
		<div className="p-4 bg-white rounded-lg shadow-md w-full">
			<h2 className="text-lg font-medium text-gray-700 mb-4">Student</h2>
			<ResponsiveContainer
				width="100%"
				height={300}>
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Bar
						dataKey="students"
						fill="#8B0000"
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default StudentChart;

import Jumbotron from "@/components/Jumbotron";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Step {
	icon: string;
	title: string;
	description: string;
}

const steps: Step[] = [
	{
		icon: "/icons/icon4.png",
		title: "#1 Register Account",
		description:
			"Begin your journey by creating an account on Sagara IT Certification platform. Simply fill out the registration form to get started.",
	},
	{
		icon: "/icons/icon5.png",
		title: "#2 Select the Type",
		description:
			"Choose from a variety of IT certification options tailored to your career goals and interests. Select the certification that aligns with your expertise.",
	},
	{
		icon: "/icons/icon6.png",
		title: "#3 Register and Pay",
		description:
			"Enroll in your chosen certification program by completing the registration process and making payment securely through our platform.",
	},
	{
		icon: "/icons/icon7.png",
		title: "#4 Take Test",
		description:
			"Prepare for your certification exam and schedule a convenient time to take the test online.",
	},
	{
		icon: "/icons/icon8.png",
		title: "#5 Get the certificate",
		description:
			"Upon successful completion of the exam, receive your certification digitally, instantly validating your skills and expertise in the chosen IT field.",
	},
];

export default function Home() {
	return (
		<div className="w-full">
			{/* Jumbotron */}
			<div className="w-full bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
				<div className="py-20 px-4 md:px-0 text-white text-start md:ml-42 ml-24 gap-6 flex flex-col">
					<p className="text-4xl md:text-6xl font-bold mb-4 w-full md:w-[42rem]">
						Live Your Best Life Using Your Strengths
					</p>
					<p className="text-base md:text-lg mb-8 w-full md:w-[26rem]">
						Meet some of the people who have completed the Sagara Technology and
						use their results to maximize their potential at work and everywhere
						else.
					</p>
					<div>
						<Button className="bg-primaryRed px-8 md:px-14 py-4 md:py-7 text-base md:text-lg rounded-sm">
							Get Certification
						</Button>
					</div>
				</div>
			</div>
			{/* About */}
			<div className="w-full flex flex-col md:flex-row py-12 px-4 md:px-0">
				<div className="w-full md:w-1/4 flex flex-col items-center justify-center mb-8 md:mb-0">
					<div className="w-20 h-1 bg-[#353535] mb-2"></div>
					<p className="text-2xl font-bold text-[#353535]">ABOUT US</p>
				</div>
				<div className="flex flex-col w-full md:w-2/3">
					<p className="text-sm font-bold text-primaryRed mb-2">
						SAGARA IT CERTIFICATION
					</p>
					<p className="text-2xl md:text-3xl font-bold leading-tight">
						<span className="text-primaryRed">Join thousands </span>
						<span className="bg-gradient-to-r from-black to-primaryRed bg-clip-text text-transparent">
							of professionals who have elevated their skills and carved out
							success in the technology industry. Start your journey to
							excellence with us today!
						</span>
					</p>
					<p className="text-base md:text-lg text-[#9E9E9E] mt-4">
						Boost your career prospects in the digital era with
						industry-recognized information technology certifications from
						Sagara IT Certification.
					</p>
				</div>
			</div>
			{/* why sagara */}
			<div className="w-full flex flex-col md:flex-row justify-between items-center py-16 px-4 md:px-0 mx-auto max-w-6xl">
				<div className="w-full md:w-1/2 md:pr-16 mb-8 md:mb-0">
					<p className="text-2xl md:text-3xl font-bold text-primaryRed mb-8">
						WHY SAGARA IT CERTIFICATION?
					</p>
					<div className="flex flex-col gap-8">
						{/* Item 1 */}
						<div className="flex items-start gap-4">
							<Image
								src="/icons/icon1.png"
								alt="Global Credibility Boost"
								width={48}
								height={48}
							/>
							<div>
								<p className="text-lg font-bold text-primaryRed">
									Global Credibility Boost
								</p>
								<p className="text-[#353535]">
									Our certifications are globally recognized, enhancing your
									credibility, and opening doors to new opportunities.
								</p>
							</div>
						</div>
						{/* Item 2 */}
						<div className="flex items-start gap-4">
							<Image
								src="/icons/icon2.png"
								alt="Empowering Careers"
								width={48}
								height={48}
							/>
							<div>
								<p className="text-lg font-bold text-primaryRed">
									Empowering Careers
								</p>
								<p className="text-[#353535]">
									Equipped to advance your career, secure promotions, and pursue
									new job opportunities in the ever-evolving tech industry.
								</p>
							</div>
						</div>
						{/* Item 3 */}
						<div className="flex items-start gap-4">
							<Image
								src="/icons/icon3.png"
								alt="Expertise Validation"
								width={48}
								height={48}
							/>
							<div>
								<p className="text-lg font-bold text-primaryRed">
									Expertise Validation
								</p>
								<p className="text-[#353535]">
									Showcase your expertise and validate your skills with globally
									recognized certifications that employers trust.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/2">
					<Image
						src="/images/Group 25.png"
						alt="Why Sagara"
						width={570}
						height={500}
						className="w-full h-auto"
					/>
				</div>
			</div>
			{/* How Sagara */}
			<div className="w-full flex flex-col justify-center gap-12 items-center px-4 md:px-0">
				<div className="flex flex-col items-center justify-center text-center">
					<div className="w-20 h-1 bg-primaryRed mb-2"></div>
					<p className="text-3xl md:text-4xl font-light text-primaryRed">
						How Sagara
					</p>
					<p className="text-3xl md:text-4xl font-bold text-primaryRed">
						IT-Certification Works
					</p>
				</div>
				<div className="w-full flex flex-col md:flex-row justify-between items-center py-16 mx-auto max-w-6xl">
					<div className="w-full md:w-1/2 mb-8 md:mb-0">
						<Image
							src="/images/Group2.png"
							alt="How Sagara"
							width={523}
							height={560}
							className="w-full h-auto"
						/>
					</div>
					<div className="w-full md:w-1/2">
						<Image
							src="/images/Group3.png"
							alt="How Sagara"
							width={555}
							height={524}
							className="w-full h-auto"
						/>
					</div>
				</div>
			</div>
			{/* Empower */}
			<div className="w-full flex flex-col justify-center gap-12 items-center px-4 md:px-0">
				<div className="flex flex-col items-center justify-center text-center">
					<div className="w-20 h-1 bg-primaryRed mb-2"></div>
					<p className="text-3xl md:text-4xl font-light text-primaryRed">
						Empower Yourself with
					</p>
					<p className="text-3xl md:text-4xl font-bold text-primaryRed">
						Our Certification
					</p>
				</div>
				<div className="w-full flex flex-col md:flex-row justify-center gap-4 md:gap-12 items-center">
					<Button className="w-full md:w-80 h-16 bg-primaryRed text-white mb-4 md:mb-0">
						FRONT END DEVELOPER
					</Button>
					<Button className="w-full md:w-80 h-16 bg-white text-black border-black border hover:text-white mb-4 md:mb-0">
						BACK END DEVELOPER
					</Button>
					<Button className="w-full md:w-80 h-16 bg-white text-black border-black border hover:text-white mb-4 md:mb-0">
						QUALITY ASSURANCE
					</Button>
					<Button className="w-full md:w-80 h-16 bg-white text-black border-black border hover:text-white">
						UI/UX DESIGN
					</Button>
				</div>
				<div className="w-full flex flex-col md:flex-row justify-between items-center py-16 mx-auto max-w-6xl">
					<div className="w-full md:w-1/2 mb-8 md:mb-0">
						<Image
							src="/images/Group4.png"
							alt="How Sagara"
							width={523}
							height={560}
							className="w-full h-auto"
						/>
					</div>
					<div className="w-full md:w-1/2 flex flex-col gap-4">
						<p className="text-2xl md:text-3xl font-bold text-primaryRed">
							Front End Certification
						</p>

						<div className="flex flex-col gap-4">
							<div className="flex items-center gap-4">
								<div className="w-8 h-8 flex items-center justify-center">
									<Image
										src="/icons/icon9.png"
										alt="Icon"
										width={42}
										height={42}
									/>
								</div>
								<p>
									This program equips you with the essential skills and
									knowledge to create visually appealing websites or
									applications.
								</p>
							</div>

							<div className="flex items-center gap-4">
								<div className="w-8 h-8 flex items-center justify-center">
									<Image
										src="/icons/icon10.png"
										alt="Icon"
										width={42}
										height={42}
									/>
								</div>
								<p>
									Evaluates your proficiency in frontend programming languages
									and other relevant frontend technologies.
								</p>
							</div>

							<div className="flex items-center gap-4">
								<div className="w-8 h-8 flex items-center justify-center">
									<Image
										src="/icons/icon11.png"
										alt="Icon"
										width={42}
										height={42}
									/>
								</div>
								<p>
									Gain recognition as a qualified frontend developer, enhance
									your career prospects, and open doors to exciting job
									opportunities.
								</p>
							</div>
						</div>

						<Button className="bg-primaryRed text-white mt-4 py-2 px-4 rounded w-full md:w-auto">
							Get Detail
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

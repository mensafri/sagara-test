import Image from "next/image";
import {
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
	Phone,
	Mail,
	MapPin,
} from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-[#1E1E1E] text-white py-12">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Column 1: Logo and Description */}
					<div className="flex flex-col space-y-4">
						<Image
							src="/icons/Logo2.png"
							alt="Sagara Tech"
							width={150}
							height={50}
						/>
						<p className="text-sm">
							Plan, build, grow digital products. Continuously delivering
							impact.
						</p>
						<div className="flex space-x-4">
							<Facebook size={20} />
							<Twitter size={20} />
							<Linkedin size={20} />
							<Instagram size={20} />
						</div>
					</div>

					{/* Column 2: Pages */}
					<div>
						<h3 className="font-bold text-lg mb-4">Pages</h3>
						<ul className="space-y-2">
							<li>IT Certification</li>
							<li>Careers</li>
							<li>FAQ</li>
							<li>Terms & Condition</li>
						</ul>
					</div>

					{/* Column 3: Careers */}
					<div>
						<h3 className="font-bold text-lg mb-4">Careers</h3>
						<ul className="space-y-2">
							<li>Front End Developer</li>
							<li>Back End Developer</li>
							<li>Quality Assurance</li>
							<li>UI/UX Design</li>
						</ul>
					</div>

					{/* Column 4: Contact */}
					<div>
						<h3 className="font-bold text-lg mb-4">Contact</h3>
						<ul className="space-y-2">
							<li className="flex items-center">
								<Phone
									size={16}
									className="mr-2"
								/>
								+62 856-4097-7356
							</li>
							<li className="flex items-center">
								<Mail
									size={16}
									className="mr-2"
								/>
								consult@sagara.asia
							</li>
							<li className="flex items-center">
								<MapPin
									size={16}
									className="mr-2"
								/>
								South Jakarta and Bandung, Indonesia.
							</li>
						</ul>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-8 pt-8 border-t border-gray-700 text-center">
					<p className="text-sm">Copyright © 2024 PT. Sagara Asia Teknologi</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

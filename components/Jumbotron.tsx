import { Button } from "./ui/button";

const Jumbotron = () => {
	return (
		<div className="w-full bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
			<div className="py-20 text-white text-start ml-28 gap-6 flex flex-col">
				<p className="text-6xl font-bold mb-4 w-[42rem]">
					Live Your Best Life Using Your Strengths
				</p>
				<p className="text-lg mb-8 w-[26rem]">
					Meet some of the people who have completed the Sagara Technology and
					use their results to maximize their potential at work and everywhere
					else.
				</p>
				<div>
					<Button className="bg-primaryRed px-14 py-7 text-lg rounded-sm">
						Get Certification
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Jumbotron;

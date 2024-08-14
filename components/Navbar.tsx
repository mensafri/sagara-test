"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";

const components: { title: string; description: string }[] = [
	{
		title: "Alert Dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Alert Dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Alert Dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Alert Dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	// ... rest of components
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="w-full flex flex-col md:flex-row justify-between py-4 px-8 sticky top-0 left-0 right-0 z-50 bg-white shadow-md">
			<div className="flex justify-between items-center w-full md:w-auto">
				<Image
					alt="Logo Sagara"
					src={"/icons/Logo.png"}
					width={126.25}
					height={40}
				/>
				{/* Hamburger Menu Icon */}
				<button
					className="text-[#9E9E9E] md:hidden"
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? "Close" : "Menu"}
				</button>
			</div>
			<div
				className={`${
					isOpen ? "block" : "hidden"
				} mt-4 md:mt-0 md:flex md:flex-row gap-8 w-full md:w-auto`}>
				<NavigationMenu>
					<NavigationMenuList className="flex flex-col md:flex-row items-center">
						<NavigationMenuItem className="font-medium text-[#9E9E9E]">
							IT CERTIFICATION
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="font-medium text-[#9E9E9E]">
								CAREERS
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
									{components.map((component) => (
										<ListItem
											key={component.title}
											title={component.title}>
											{component.description}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem className="font-medium text-[#9E9E9E]">
							FAQ
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
			<Button asChild>
				<Link
					className="hidden md:block bg-primaryRed text-white px-8 py-2 rounded-sm"
					href="/admin">
					SIGN IN
				</Link>
			</Button>
		</div>
	);
};

export default Navbar;

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

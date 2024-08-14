import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function adjustDate(date: Date, days: number) {
	const newDate = new Date(date);
	newDate.setDate(newDate.getDate() + days);
	return newDate;
}
export function generateRandomNumber(min = 20, max = 1000) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

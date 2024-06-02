"use client";

import { useEffect, useState } from "react";

export const useTimeCount = () => {
	const calculateTimeLeft = () => {
		const now = new Date();
		const countdownDate = new Date("2024-09-06T00:00:00");
		const difference = +countdownDate - +now;

		if (difference > 0) {
			return {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		} else {
			return { days: 0, hours: 0, minutes: 0, seconds: 0 };
		}
	};

	const [time, setTime] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTime(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	}, [time]);

	return time;
};

"use client";

import { useTimeCount } from "@/hooks/useTimeCount";

const Timer = () => {
	const time = useTimeCount();

	const timeElements = [
		{ title: "Days", value: time.days },
		{ title: "Hours", value: time.hours },
		{ title: "Minutes", value: time.minutes },
		{ title: "Seconds", value: time.seconds },
	];

	return (
		<div className="bg-white/5 w-full backdrop-blur-md h-full md:h-[50vh] flex flex-col items-center bg-gradient-to-r from-red-500/10 to-blue-500/10  group-hover:bg-black/80 duration-1000">
			<header className="md:text-nowrap font-bold p-8 w-full text-center text-5xl md:text-6xl">
				TIME TO OUR JOURNEY
			</header>
			<div className="flex flex-col md:flex-row w-full h-full ">
				{timeElements.map((timeElement) => (
					<div
						key={timeElement.title}
						className="flex flex-col items-center w-full text-2xl md:text-3xl font-bold h-full justify-between p-8"
					>
						<p className="">{timeElement.title}</p>
						<p className="text-8xl md:text-[121px] lg:text-[169px]">
							{timeElement.value}
						</p>
						<span />
					</div>
				))}
			</div>
		</div>
	);
};

export default Timer;

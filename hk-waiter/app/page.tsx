import Timer from "@/components/Timer";
import Image from "next/image";

export default function Home() {
	return (
		<main className="min-h-screen w-full flex items-center text-white group hover:overflow-hidden">
			<div className="fixed inset-0">
				<Image
					src="/bg.jpg"
					alt="alt"
					width={1920}
					height={1080}
					className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000 size-full group-hover:scale-110 -z-20"
				/>
			</div>

			<Timer />
		</main>
	);
}

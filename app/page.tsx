import Link from "@/node_modules/next/link";
import Image from "next/image";
// Image credits: https://pngtree.com/so/developper

export default function HomePage() {
  return (
    <div className="h-full flex flex-col xl:flex-row items-center gap-6">
      {/* HERO IMG */}
      <div className="h-1/2 relative w-full flex justify-center lg:w-1/2">
        {/* ALways give parent relative property if you are specifying fill attribute on the Image property */}
        <Image
          src={"/hero.png"}
          alt="hero image"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
      {/* HERO IMG */}

      {/* BIO */}
      <div className="h-1/2 lg:w-1/2 mt-4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-6">
        <span className="font-bold text-4xl ">
          Full Stack Developer, Turning Ideas Into Reality
        </span>
        <p className="mt-3">
          Crafting digital wonders from front-end finesse to back-end
          brilliance! 🚀 Full Stack Developer by day, code magician by night.
          Turning coffee into code and dreams into reality, one line at a time.
          Let's build something amazing together! 💻✨ #FullStackDev
        </p>
        {/* CALL TO ACTION */}
        <div className="">
          <Link href={"/portfolio"}>
          <button className="ring-1 ring-black p-2 rounded bg-black text-white">
            View My Work
          </button>
          </Link>
          <Link href={"/contact"}>
          <button className="ring-1 ring-black p-2 rounded ml-5">
            Contact
          </button>
          </Link>
        </div>
      </div>
      {/* BIO */}
    </div>
  );
}

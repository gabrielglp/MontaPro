import Image from "next/image"
import Link from "next/link"

import LogoIcon from "../../../public/logo-tools.png"

export default function NavBar() {
    return (
        <header className="h-20 bg-custom-black">
            <div className="max-w-[1800px] h-20 mx-auto px-8 flex justify-around items-center">
                <Link className="flex items-center pr-12 md:pr-16" href={"/"}>
                   <Image className="pr-2 w-10 md:w-14" src={LogoIcon} alt=""/>
                   <span className="text-white text-sm md:text-3xl font-bold">Montta<span className="text-yellow-700">Pro</span></span>
                </Link>

                <nav className="opacity-100 flex items-center">
                    <Link href={"/sobre"}>
                        <span className="text-white text-xs md:text-base pr-4 inline-block relative hover:text-yellow-700 transition-colors duration-700 font-semibold">Sobre</span>
                    </Link>

                    <Link href={"/product"}>
                        <span className="text-white text-xs md:text-base inline-block relative hover:text-yellow-700 transition-colors duration-700 font-semibold">Projetos</span>
                    </Link>

                    <Link href={"/montadores"}>
                        <span className="text-white text-xs md:text-base pl-4 inline-block relative hover:text-yellow-700 transition-colors duration-700 font-semibold">Montadores</span>
                    </Link>
                </nav>

            </div>
        </header>
    )
}

export { NavBar }
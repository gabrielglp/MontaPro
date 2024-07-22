import Head from "next/head"

import NavBar from "@/components/NavBar";

import Search from "../../public/procurar2.png"
import Image from "next/image";
import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` ${inter.className}`}
    >
      <>
        <Head>
            <title>Home - MontaPro</title>
        </Head>

        <main className="bg-img-yellow-tools1080 sm:bg-img-yellow-tools1366 xl:bg-img-yellow-tools absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat">
            <NavBar/>
            <div className="min-h-[90vh] flex justify-center items-center flex-col bg-grey-900">
                <div className="mt-8 w-full md:w-[600px] flex items-center justify-center flex-col py-8 px-8">
                    <div className="flex mb-6">
                        <Link href="/" className="bg-green-700 p-4 px-2 md:px-6 mr-4 rounded-2xl">
                            <p className="text-xs md:text-sm font-semibold">Seja um Montador</p>
                        </Link>

                        <Link href="/montadores" className="bg-custom-black-100 p-4 px-2 md:px-6 mr-4 rounded-2xl">
                            <p className="text-white-200 text-xs md:text-sm font-semibold">Todos os Montadores</p>
                        </Link>

                    </div>
                        <div className="flex">
                            <input className=" p-1 px-6 w-80 md:w-96 bg-custom-gray flex rounded-3xl mr-4" placeholder="Digite o seu Munícipio"/>
                            <button className="rounded-3xl">
                                <Image className="w-14"  src={Search} alt=""/>
                            </button>
                        </div>
                </div>
            </div>
        </main>
        </>
    </main>
  );
}

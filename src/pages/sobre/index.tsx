import NavBar from "@/components/NavBar";
import Head from "next/head"

import Image from "next/image";
import Link from "next/link";

import LogoIcon from "../../../public/logo-tools.png";

export default function Sobre() {
    return (
        <>
            <Head>
                <title>Sobre - MontaPro</title>
            </Head>

            <main className="">
                <NavBar/>
                <section className="flex flex-col mt-10">
                    <div className="flex justify-center">
                        <div className="bg-black flex justify-center flex-col w-[35rem] rounded-2xl p-10">
                            <div>
                                <p className="text-base text-white">
                                    Na<span className="text-white text-base font-bold"> Montta<span className="text-yellow-700">Pro</span></span>
                                    , estamos dedicados a simplificar a sua vida quando se trata de montagem de móveis. Nosso objetivo é conectar você aos melhores montadores de móveis em diversas cidades, oferecendo um serviço eficiente e personalizado.                         
                                </p>
                                <p className="text-base mt-3 text-white">Entendemos que montar móveis pode ser uma tarefa desafiadora e demorada. Por isso, reunimos uma rede de profissionais qualificados que estão prontos para ajudar. Seja para montar um novo conjunto de sala, instalar prateleiras na cozinha ou até mesmo para desmontar e remontar seus móveis durante uma mudança, nós estamos aqui para facilitar esse processo.                               
                                </p>

                            </div>

                            <div className="flex justify-center items-center mt-16">
                                <p className="flex items-center">
                                    <Image className="w-6 mr-1" src={LogoIcon} alt=""/>
                                    <span className="text-white text-base font-bold">Montta<span className="text-yellow-700">Pro</span></span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-7 gap-4">
                        <div className="bg-white flex justify-center flex-col w-[25rem] rounded-2xl p-10">
                            <div className="flex justify-center flex-col items-center">
                                <h2 className="text-xl font-semibold">
                                    Profissionais Qualificados                    
                                </h2>
                                <p className="text-base mt-3">
                                    Selecionamos cuidadosamente montadores de móveis com experiência comprovada e habilidades técnicas para garantir um serviço de qualidade.                                 
                                </p>
                            </div>

                            <div className="flex justify-center items-center mt-16">
                                <p className="flex items-center">
                                    <Image className="w-8" src={LogoIcon} alt=""/>
                                    <span className="text-black text-base font-bold">Montta<span className="text-yellow-700">Pro</span></span>
                                </p>
                            </div>
                        </div>
                        
                        <div className="bg-white flex justify-center flex-col w-[25rem] rounded-2xl p-10">
                            <div className="flex justify-center flex-col items-center">
                                <h2 className="text-xl font-semibold">
                                    Facilidade de Agendamento                     
                                </h2>
                                <p className="text-base mt-3">
                                    Nosso sistema intuitivo permite que você agende o serviço de montagem de acordo com sua conveniência, em apenas alguns cliques.                               
                                </p>

                            </div>

                            <div className="flex justify-center items-center mt-16">
                                <p className="flex items-center">
                                    <Image className="w-8" src={LogoIcon} alt=""/>
                                    <span className="text-black text-base font-bold">Montta<span className="text-yellow-700">Pro</span></span>
                                </p>
                            </div>
                        </div>
                        
                        <div className="bg-white flex justify-center flex-col w-[25rem] rounded-2xl p-10">
                            <div className="flex justify-center flex-col items-center">
                                <p className="text-xl font-semibold">
                                    Transparência e Confiança                      
                                </p>
                                <p className="text-base mt-3">
                                    Prezamos pela transparência em cada etapa do processo. Você sabe exatamente o que esperar, desde o orçamento até a conclusão do serviço.                     
                                </p>

                            </div>

                            <div className="flex justify-center items-center mt-16">
                                <p className="flex items-center">
                                    <Image className="w-8" src={LogoIcon} alt=""/>
                                    <span className="text-black text-base font-bold">Montta<span className="text-yellow-700">Pro</span></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export { Sobre };
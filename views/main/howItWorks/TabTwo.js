import Image from "next/image"
import { HiCurrencyDollar, HiOutlineHomeModern } from "react-icons/hi2"

export const TabTwoInfo = () => {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="w-full h-fit flex gap-8 p-6">
                    <div className="h-full my-auto flex items-center">
                        <HiOutlineHomeModern className="text-secondary" size={50}/>
                    </div>
                    <div className="flex flex-col gap-8 w-4/6">
                        <h3 className="text-slate-800 text-2xl">Elige las propiedades</h3>
                        <p className="font-thin">nvierte informado. Conoce toda la información de las propiedades, desde la ubicación hasta proyecciones y elige en las que quieras invertir.</p>
                    </div>
                </div>
                <div className="w-full h-fit flex gap-8 p-6">
                    <div className="h-full my-auto flex items-center">
                        <HiCurrencyDollar className="text-secondary" size={50}/>
                    </div>
                    <div className="flex flex-col gap-8 w-4/6">
                        <h3 className="text-slate-800 text-2xl">Compra tus tokens</h3>
                        <p className="font-thin">Compra fácilmente los tokens que quieras en un par de minutos y quedarán reflejados en tu cuenta en instantes. Proceso simple y eficiente.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export const TabTwo = () => {
    return (
        <>
            <div className="w-full hidden lg:block">
                <h2 className="w-full text-center text-3xl mb-20">Revisa los inmuebles y compra sus tokens</h2>
                <div className="grid grid-cols-2 w-5/6 mx-auto">
                    <div className="w-full flex flex-col items-end justify-center">
                        <div className="w-fit mr-16">
                            <div className="relative h-[15rem] w-[22rem] rounded-t-md overflow-hidden">
                                <Image fill src="https://wallstate.nyc3.cdn.digitaloceanspaces.com/Reity/IMG_9443%284%29%20%281%29.jpeg"/>    
                                <div className="absolute z-20 ml-2 mb-2 bottom-0 rounded-full overflow-hidden text-sm p-4 text-main bg-white/90">$100.000 inversión mínima</div>
                            </div>
                            <div className="w-full flex justify-between bg-white p-6 shadow-lg">
                                <div className="flex flex-col text-main">
                                    <h4 className="font-bold text-xl">Albora</h4>
                                    <p>Santiago, Chile</p>
                                </div>
                                <div className="flex flex-col text-secondary">
                                    <h4 className="font-bold text-xl">11.29% TIR</h4>
                                    <p>3.7% Cap Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TabTwoInfo/>
                </div>
            </div>
        </>
    )
}
import Image from "next/image"
import { HiArrowsRightLeft, HiOutlineArrowRightCircle, HiOutlineBanknotes } from "react-icons/hi2"

export const TabFourInfo = () => {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="w-full h-fit flex gap-8 p-6">
                    <div className="h-full my-auto flex items-center">
                        <HiArrowsRightLeft className="text-secondary" size={50}/>
                    </div>
                    <div className="flex flex-col gap-8 w-4/6">
                        <h3 className="text-slate-800 text-2xl">Revisa tus movimientos</h3>
                        <p className="font-thin">Siempre vas a poder ver tus diferentes movimientos en el tiempo. Haz un seguimiento constante a tus inversiones y tus ganancias por arriendo.</p>
                    </div>
                </div>
                <div className="w-full h-fit flex gap-8 p-6">
                    <div className="h-full my-auto flex items-center">
                        <HiOutlineBanknotes className="text-secondary" size={50}/>
                    </div>
                    <div className="flex flex-col gap-8 w-4/6">
                        <h3 className="text-slate-800 text-2xl">Vende cuando quieras</h3>
                        <p className="font-thin">¿Necesitas liquidez? Puedes vender tus tokens directamente a Reity y te transferiremos tus fondos directo a tu cuenta bancaria.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export const TabFour = () => {
    return (
        <>
            <div className="w-full hidden lg:block">
                <h2 className="w-full text-center text-3xl mb-20">Compra con confianza</h2>
                <div className="grid grid-cols-2 w-5/6 mx-auto">
                    <div className="w-full flex flex-col items-end justify-center pr-12">
                        <div className="bg-main/70 text-white py-4 px-6 w-96 flex items-center justify-between rounded-lg">
                            <HiOutlineArrowRightCircle size={50}/>
                            <div className="flex flex-col">
                                <p>Compra de token</p>
                                <p className="text-sm">12/10/2022</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="w-full text-end">$100.000</p>
                                <p className="text-xs bg-sky-300/80 px-4 rounded-full">Pendiente</p>
                            </div>
                        </div>
                        <div className="bg-orange-400 -mr-2 -mt-3 text-white py-4 px-6 w-96 flex items-center justify-between rounded-lg">
                            <HiOutlineArrowRightCircle size={50}/>
                            <div className="flex flex-col">
                                <p>Ingreso por arriendo</p>
                                <p className="text-sm">13/10/2022</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="w-full text-end">$1.500</p>
                                <p className="text-xs bg-[#A8CCCC] px-4 rounded-full">Recibido</p>
                            </div>
                        </div>
                    </div>
                    <TabFourInfo/>
                </div>
            </div>
        </>
    )
}
import Image from "next/image"
import { HiOutlineBuildingOffice2, HiOutlineCheckBadge } from "react-icons/hi2"

export const TabThreeInfo = () => {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="w-full h-fit flex gap-8 p-6">
                    <div className="h-full my-auto flex items-center">
                        <HiOutlineBuildingOffice2 className="text-secondary" size={50}/>
                    </div>
                    <div className="flex flex-col gap-8 w-4/6">
                        <h3 className="text-slate-800 text-2xl">Activos reales</h3>
                        <p className="font-thin">Invierte en activos respaldados por un bien físico. Invierte tranquilo y busca refugio en activos tangibles.</p>
                    </div>
                </div>
                <div className="w-full h-fit flex gap-8 p-6">
                    <div className="h-full my-auto flex items-center">
                        <HiOutlineCheckBadge className="text-secondary" size={50}/>
                    </div>
                    <div className="flex flex-col gap-8 w-4/6">
                        <h3 className="text-slate-800 text-2xl">Con garantías</h3>
                        <p className="font-thin">Tus tokens son garantizados por una aseguradora para que puedas invertir con confianza. Invierte tranquilo y con un respaldo.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export const TabThree = () => {
    return (
        <>
            <div className="w-full hidden lg:block">
                <h2 className="w-full text-center text-3xl mb-20">Compra con confianza</h2>
                <div className="grid grid-cols-2 w-5/6 mx-auto">
                    <div className="w-full flex flex-col items-end justify-center">
                        <div className="flex flex-col w-fit mr-16 p-8 shadow-lg">
                            <div className="relative border h-[15rem] w-[22rem] rounded-md overflow-hidden">
                                <Image fill objectFit="contain" src="https://www.reity.cl/_next/image?url=https%3A%2F%2Fwww.aspor.cl%2Fwp-content%2Fuploads%2F2019%2F04%2Flogo-aseguradora-porvenir.png&w=256&q=75"/>
                            </div>
                            <p className="text-center text-lg mt-4">Invierte con garantías</p>
                            <div className="h-1 bg-main w-full"></div>
                        </div>
                    </div>
                    <TabThreeInfo/>
                </div>
            </div>
        </>
    )
}
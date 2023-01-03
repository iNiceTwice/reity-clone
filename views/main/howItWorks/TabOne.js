import { HiOutlineShieldCheck, HiOutlineUserPlus } from "react-icons/hi2";
import Image from "next/image"

export const TabOneInfo = () => {
    return(
        <>
            <div className="flex flex-col gap-4">
                <div className="w-full h-fit flex gap-8 p-6">
                    <div className="h-full my-auto flex items-center">
                        <HiOutlineUserPlus className="text-secondary" size={50}/>
                    </div>
                    <div className="flex flex-col gap-8 w-4/6">
                        <h3 className="text-slate-800 text-2xl">Crea tu cuenta</h3>
                        <p className="font-thin">Crea tu cuenta en menos de dos minutos y ten acceso a un marketplace para invertir en tokens de propiedades.</p>
                    </div>
                </div>
                <div className="w-full h-fit flex gap-8 p-6">
                    <div className="h-full my-auto flex items-center">
                        <HiOutlineShieldCheck className="text-secondary" size={50}/>
                    </div>
                    <div className="flex flex-col gap-8 w-4/6">
                        <h3 className="text-slate-800 text-2xl">Verifica tu cuenta</h3>
                        <p className="font-thin">Para evitar fraude e intentos de lavado de dinero, verificamos tu cuenta y tus datos a través de un proceso automático.</p>
                    </div>
                </div>
            </div>        
        </>
    )
}

export const TabOne = () => {
    return ( 
        <>
            <div className="w-full hidden lg:block">
                <h2 className="w-full text-center text-3xl mb-8">Crea una cuenta verificada fácil y rápido</h2>
                <div className="grid grid-cols-2 w-5/6 mx-auto">
                    <div className="flex relative w-full justify-end right-10">
                        <div className="absolute -bottom-1 xl:-bottom-10 right-10 z-10 bg-white flex flex-col gap-4 h-fit w-[400px] shadow-lg p-6 lg:p-10">
                            <div className="flex gap-6">
                                <div className="h-4 w-2/6 bg-secondary rounded-sm"></div>
                                <div className="h-4 w-4/6 bg-zinc-200 rounded-sm"></div>
                            </div>
                            <div className="h-16 w-full bg-zinc-200 rounded-sm"></div>
                            <div className="h-4 w-full bg-zinc-200 rounded-sm"></div>
                            <div className="h-4 w-full bg-zinc-200 rounded-sm"></div>
                        </div>
                        <div className="absolute z-20 bg-white shadow-lg h-fit w-60 p-6 lg:p-10 flex flex-col gap-4 items-center justify-center">
                            <Image className="rounded-full" height={100} width={100} src="https://www.reity.cl/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1570295999919-56ceb5ecca61%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1180%26q%3D80&w=1920&q=75"/>
                            <div className="h-4 w-full bg-zinc-200 rounded-sm"></div>
                            <div className="h-4 w-full bg-zinc-200 rounded-sm"></div>
                        </div>
                    </div>
                    <TabOneInfo/>
                </div>
            </div>
        </>
     );
}
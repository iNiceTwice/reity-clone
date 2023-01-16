import Image from "next/image";

const ReachGoals = () => {
    return ( 
        <>
            <section className="w-full bg-slate-100 py-52 mt-10">
                <div className="w-full flex justify-center items-center">
                    <div className="w-full lg:w-1/2 absolute lg:relative flex justify-center items-center">
                        <div className="relative z-10 h-[23rem] w-[25rem]">
                            <Image fill className="opacity-10 lg:opacity-100" src="https://www.reity.cl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLupa.dbca50dc.png&w=1080&q=75"/>
                        </div>
                    </div>
                    <div className="relative z-20 flex items-center justify-center lg:justify-start w-full lg:w-1/2">
                        <div className="flex flex-col gap-8 w-10/12 font-montserrat text-slate-800/90">
                            <h3 className="text-3xl lg:text-5xl font-semibold">Cumple tus metas</h3>
                            <p className="text-lg font-light">Con Reity invierte en tokens asociados a departamentos y cumple tus objetivos de rentabilidad. Podrás acceder a los beneficios del mercado inmobiliario, protegerte de la inflación, mejora tu jubilación o simplemente poner a trabajar tu dinero.</p>
                            <p className="text-lg font-thin">Con Reity tendrás acceso a todos los beneficios del mercado inmobiliario en una inversión respaldada y garantizada.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default ReachGoals;
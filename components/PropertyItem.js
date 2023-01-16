import Image from "next/image"
import Link from "next/link"

const PropertyItem = ({ data }) => {
    return ( 
        <>
            <div className="rounded-lg overflow-hidden" key={ data._id }>
                <div className="relative w-full h-[26rem] lg:h-[20vw]">
                    <div className="absolute w-full h-full hover:bg-white/40 z-20 flex">
                        {
                            !data.available &&
                            <div className="self-start p-4 text-sm bg-orange-500 w-fit rounded-full text-white m-4">Próximamente</div>
                        }
                    </div>
                    <div className="absolute w-full h-full hover:bg-white/40 z-20 flex">
                        <div className="self-end p-4 text-sm bg-white/90 w-fit rounded-full text-main m-4">${ new Intl.NumberFormat('de-DE').format(data.tokens.price) } inversión mínima</div>
                    </div>
                    <Image alt={ data.name } fill objectPosition="center" src={ data.img[0] }/>
                </div>
                <div className="bg-white px-4 py-8">
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-xl text-main font-bold">{ data.name }</h2>
                            <p className="text-main">{ data.location.short }</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-orange-500">{ data.tir }% TIR</h3>
                            <div className="flex font-thin gap-2 items-center">
                                <p className="text-sm line-through text-slate-800/70">3.7%</p>
                                <p className="text-orange-500/80">{ data.capRate }% Cap Rate</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-2">
                        <p className="w-fit text-xs text-slate-800/80 font-medium bg-main/30 py-1 px-2 rounded-md">Reity Boost 🔥</p>
                    </div>
                    <div className="mt-8">
                        <div className="h-2 w-full bg-main/30 rounded-lg">
                            <div className={`w-[${Math.trunc((data?.tokens?.selled/data?.tokens?.total*100))}%] h-full bg-main rounded-lg`}></div>
                        </div>
                        <div className="flex w-full justify-between mt-2">
                            <p className="text-orange-500/80 text-sm">{ (data.tokens.selled/data.tokens.total*100).toFixed(2) }%</p>
                            <p className="text-orange-500/80 text-sm">{ data.tokens.total - data.tokens.selled } tokens restantes</p>
                        </div>
                    </div>
                </div> 
            </div>
        </>
     );
}
 
export default PropertyItem;
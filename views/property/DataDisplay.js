import { HiOutlineHome, HiOutlineUsers, HiOutlineCube } from "react-icons/hi2"
import Button from "../../components/Button";
import { toast } from "react-toastify"

const DataDisplay = ({ data }) => {
    
    const notify = () => toast.info("Feature coming soon",{ position:"bottom-right" });
    
    const handleClick = () => {
        notify()
    }

    return (
        <div className="h-full bg-white text-main rounded-lg px-6 py-8 flex flex-col">
            <h3 className="text-2xl font-bold">{ data.name }</h3>
            <p className="text-sm">{ data.location.short }</p>
            <div className="flex my-6 gap-[5rem]">
                <div className="flex flex-col justify-center items-center">
                    <HiOutlineHome size={20}/>
                    <p className="text-sm mt-2 font-thin">{ data.info.rooms }D</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <HiOutlineUsers size={20}/>
                    <p className="text-sm mt-2 font-thin">{ data.info.bathrooms }B</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <HiOutlineCube size={20}/>
                    <p className="text-sm mt-2 font-thin">{ data.info.m2 }m2</p>
                </div>
            </div>
            <p className="font-thin mt-4">{ data.description.short }</p>
            <div className="flex mt-6 gap-[6rem]">
                <h4 className="font-thin text-xl">TIR Proyectada:</h4>
                <h4 className="text-orange-500 text-xl">{ data.tir }%</h4>
            </div>
            <div className="flex mt-4 gap-[8rem]">
                <h4 className="font-thin text-xl">Cap Rate:</h4>
                <div className="flex lg:flex-row flex-col gap-2 items-baseline">
                    <div className="flex gap-2 items-baseline justify-center">
                        <p className="text-slate-800/80 text-sm line-through">{ data.capRate }</p>
                        <h4 className="text-orange-500 text-xl">{ data.capRate + data.boost }%</h4>
                    </div>
                    {
                        data.boost > 0 ?
                        <p className="w-fit text-xs text-slate-800/80 font-medium bg-main/30 py-1 px-2 rounded-md">Reity Boost 🔥</p>
                        :
                        null
                    }
                </div>
            </div>
            <div className="mt-16">
                <div className="h-2 w-full bg-main/30 rounded-lg">
                    <div 
                        style={{width:`${Math.trunc((data.tokens.selled/data.tokens.total*100))}%`}} 
                        className="h-full bg-main rounded-lg">
                    </div>
                </div>
                <div className="flex w-full justify-between mt-2">
                    <p className="text-orange-500/80 text-sm">{ (data.tokens.selled/data.tokens.total*100).toFixed(2) }%</p>
                    <p className="text-orange-500/80 text-sm">{ data.tokens.total - data.tokens.selled } tokens restantes</p>
                </div>
            </div>
            <div className="h-full flex flex-col-reverse">
                <Button onClick={ handleClick } className="w-full mt-4 self-end">Comprar</Button>
            </div>
        </div>
    )
}

export default DataDisplay
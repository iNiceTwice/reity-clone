import { useState } from "react";
import { TabOne } from "./TabOne";
import { TabTwo } from "./TabTwo";
import { TabThree } from "./TabThree";
import { TabFour } from "./TabFour";

const DesktopContent = () => {

    const [ selectedTab, setSelectedTab ] = useState(1)

    const handleClick = ( tab ) => {
        setSelectedTab(tab)
    }

    return (
        <>
            <div className="w-4/6 lg:block hidden">
                <div className="flex w-full justify-center">
                    <button 
                        id="1"
                        onClick={ () => handleClick(1) }
                        className={`py-2 outline-none transition-colors px-8 border-b-2 ${selectedTab === 1 ? "border-b-main" : "border-b-slate-300"}`}
                    >
                        Crea una cuenta
                    </button>
                    <button 
                        id="2"
                        onClick={ () => handleClick(2) }
                        className={`py-2 outline-none transition-colors px-8 border-b-2 ${selectedTab === 2 ? "border-b-main" : "border-b-slate-300"}`}
                    >
                        Revisa los inmuebles
                    </button>
                    <button 
                        id="3"
                        onClick={ () => handleClick(3) }
                        className={`py-2 outline-none transition-colors px-8 border-b-2 ${selectedTab === 3 ? "border-b-main" : "border-b-slate-300"}`}
                    >
                        Adquiere con certeza
                    </button>
                    <button 
                        id="4"
                        onClick={ () => handleClick(4) }
                        className={`py-2 outline-none transition-colors px-8 border-b-2 ${selectedTab === 4 ? "border-b-main" : "border-b-slate-300"}`}
                    >
                        Consulta tus transacciones
                    </button>
                </div>
            </div>
            <div className="mt-16">
                { selectedTab === 1 ? <TabOne />  : null}
                { selectedTab === 2 ? <TabTwo />  : null}
                { selectedTab === 3 ? <TabThree />  : null}
                { selectedTab === 4 ? <TabFour />  : null}
            </div>
        </>
    )
}
 
export default DesktopContent;
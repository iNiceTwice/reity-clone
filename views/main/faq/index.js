import { useState } from "react"
import SectionTitle from "../../../components/SectionTitle"
import Image from "next/image"
import TabBusiness from "./TabBusiness"
import TabLegal from "./TabLegal";
import TabTecnology from "./TabTecnology";

const FAQ = () => {

    const [ selectedTab, setSelectedTab ] = useState("business")

    const handleClick = ( tab ) => {
        setSelectedTab(tab)
    }

    return ( 
         <>
            <section className="py-20 flex flex-col justify-center items-center w-full">
                <SectionTitle title="FAQ"/>
                <div className="w-4/6">
                    <div className="flex w-full justify-center">
                        <button 
                            id="1"
                            onClick={ () => handleClick("business") }
                            className={`py-2 outline-none transition-colors px-8 border-b-2 ${selectedTab === "business" ? "border-b-main" : "border-b-slate-300"}`}
                        >
                            Negocio
                        </button>
                        <button 
                            id="2"
                            onClick={ () => handleClick("legal") }
                            className={`py-2 outline-none transition-colors px-8 border-b-2 ${selectedTab === "legal" ? "border-b-main" : "border-b-slate-300"}`}
                        >
                            Legal
                        </button>
                        <button 
                            id="3"
                            onClick={ () => handleClick("tecnology") }
                            className={`py-2 outline-none transition-colors px-8 border-b-2 ${selectedTab === "tecnology" ? "border-b-main" : "border-b-slate-300"}`}
                        >
                        Tecnología
                        </button>
                    </div>
                </div>
                <div className="mt-20 w-full">
                    <div className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 w-5/6 mx-auto">
                            <div className="w-full hidden lg:flex justify-center items-center">
                                <div className="relative h-[25rem] w-[25rem]">
                                    <Image fill src="https://www.reity.cl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFAQ.04bdf581.png&w=828&q=75"/>
                                </div>
                            </div>
                            { selectedTab === "business" ? <TabBusiness/>  : null}
                            { selectedTab === "legal" ? <TabLegal/>  : null}
                            { selectedTab === "tecnology" ? <TabTecnology/>  : null}
                        </div>
                    </div>    
                </div>
            </section>
        </>
     );
};
 
export default FAQ;
import { useState } from "react"
import Layout from "../../layout"
import axios from "axios"
import ImagesDisplay from "../../views/property/ImagesDisplay"
import DataDisplay from "../../views/property/DataDisplay"
import DescriptionTab from "../../views/property/DescriptionTab"
import FinancesTab from "../../views/property/FinancesTab"
import DocumentsTab from "../../views/property/DocumentsTab"

const host = process.env.NEXT_PUBLIC_HOST

const Property = ({ data }) => {

    const [tab, setTab] = useState("description");

    const handleClick = (selectedTab) => {
        setTab(selectedTab)
    }

    return ( 
        <Layout>
            <div className="py-32 px-4 bg-slate-100/70">
                <div className="grid items-center lg:grid-cols-2 grid-cols-1 gap-4">
                    <ImagesDisplay images={ data.img }/>
                    <DataDisplay data={ data }/>
                </div>
                <div className="bg-white rounded-lg mt-4 p-4">
                    <div className="flex gap-6">
                        <button 
                            className={`${ tab === "description" ? "border-secondary text-secondary border-b-2" : "border-transparent text-secondary/80"} py-3 border-b-2 font-medium text-sm hover:border-b-2 hover:border-secondary/80`}
                            onClick={ () => handleClick("description") }
                        >
                                Descripción
                        </button>
                        <button 
                            className={`${ tab === "finances" ? "border-secondary text-secondary border-b-2" : "border-transparent text-secondary/80"} py-3 border-b-2 font-medium text-sm hover:border-b-2 hover:border-secondary/80`}
                            onClick={ () => handleClick("finances") }
                        >
                                Finanzas
                        </button>
                        <button 
                            className={`${ tab === "documents" ? "border-secondary text-secondary border-b-2" : "border-transparent text-secondary/80"} py-3 border-b-2 focus: font-medium text-sm hover:border-b-2 hover:border-secondary/80`}
                            onClick={ () => handleClick("documents") }
                        >
                                Documentos
                        </button>
                    </div>
                    { tab === "description" && <DescriptionTab data={data}/> }
                    { tab === "finances" && <FinancesTab data={data}/> }
                    { tab === "documents" && <DocumentsTab data={data}/> }
                </div>
            </div>
        </Layout>
     );         
}


export const getStaticPaths = async () => {
    try {
        const propertyData = await axios.get(`${host}/properties`)
        const paths = propertyData.data.map(({_id}) => ({ params : { id: `${_id}`}}))
        return {
            paths,
            fallback:false
        }
    } catch (error) {
        console.log(error)
    }
}

export const getStaticProps = async ({ params }) => {
    try {
        const propertyData = await axios.get(`${host}/property/${params.id}`)
        return {
            props:{
                data: propertyData.data
            }
        }
    } catch (error) {
        console.log(error)
    }

}

export default Property;
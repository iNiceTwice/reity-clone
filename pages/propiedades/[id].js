import { useState } from "react"
import Layout from "../../layout"
import ImagesDisplay from "../../views/property/ImagesDisplay"
import DataDisplay from "../../views/property/DataDisplay"
import DescriptionTab from "../../views/property/DescriptionTab"
import FinancesTab from "../../views/property/FinancesTab"
import DocumentsTab from "../../views/property/DocumentsTab"
import connectDB from "../../utils/dbConnection"
import PROPERTIES from "../../models/properties"

const Property = ({ data }) => {

    const [tab, setTab] = useState("description");
    const parsedData = JSON.parse(data)

    const handleClick = (selectedTab) => {
        setTab(selectedTab)
    }

    return ( 
        <Layout>
            <div className="py-32 px-4 bg-slate-100/70">
                <div className="grid items-center lg:grid-cols-2 grid-cols-1 gap-4">
                    <ImagesDisplay images={ parsedData.img }/>
                    <DataDisplay data={ parsedData }/>
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
                    { tab === "description" && <DescriptionTab data={parsedData}/> }
                    { tab === "finances" && <FinancesTab data={parsedData}/> }
                    { tab === "documents" && <DocumentsTab data={parsedData}/> }
                </div>
            </div>
        </Layout>
     );         
}


export const getStaticPaths = async () => {
    await connectDB()

    const properties = await PROPERTIES.find()
    const paths = properties.map(({_id}) => ({ params : { id: `${_id}`}}))
    return {
        paths,
        fallback:false
    }

}

export const getStaticProps = async ({ params }) => {

    const property = await PROPERTIES.findById(params.id)

    return {
        props:{
            data: JSON.stringify(property)
        }
    }
}

export default Property;
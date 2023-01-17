import Layout from "../layout"
import axios from "axios"
import PropertyItem from "../components/PropertyItem"
import Circles from "../components/Circles"

const Marketplace = ({ properties }) => {
    return (
        <Layout>
            <section className="py-32 px-6 bg-slate-100/70">
                <div className="relative w-full bg-main overflow-hidden py-12 px-8 rounded-lg text-white">
                    <div className="w-full lg:w-[400px]">
                        <h3 className="text-3xl font-semibold mb-4">Invierte en propiedades desde $100.000 CLP</h3>
                        <p className="font-thin">Compra tokens de propiedades y gana por el arriendo y plusvalía</p>
                    </div>
                    <div className="absolute -top-28 left-52">
                        <Circles/>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                    <div className="rounded-lg text-main text-center w-full px-4 py-10 bg-white">
                        <h3 className="font-semibold text-lg mb-2">TIR</h3>
                        <p className="text-sm">La tasa interna de retorno (TIR) es la rentabilidad anual que ofrece una inversión. Cuanto mayor sea la TIR mejor será la inversión en general.</p>
                    </div>
                    <div className="rounded-lg text-main text-center w-full px-4 py-10 bg-white">
                        <h3 className="font-semibold text-lg mb-2">Cap Rate</h3>
                        <p className="text-sm">El cap rate corresponde al rendimiento asociado a una propiedad por arriendo de forma neta. Entre más alto, más rentable es una propiedad para arrendar.</p>
                    </div>
                    <div className="rounded-lg text-main text-center w-full px-4 py-10 bg-white">
                        <h3 className="font-semibold text-lg mb-2">Reity Boost 🔥</h3>
                        <p className="text-sm">Una bonificación que entrega Reity al Cap Rate de ciertos tokens en un período de 12 meses.</p>
                    </div>
                </div>
                <div className="py-8 rounded-lg bg-white w-full flex mt-4">
                    
                </div>
                <div className="mt-4 gap-4 grid grid-cols-1 lg:grid-cols-3">
                    {
                        properties?.map((property, index) => (
                            <PropertyItem key={property._id} data={property}/>
                        ))
                    }
                </div>
            </section>
        </Layout> 
     );
}

export const getStaticProps = async () => {

    const data = await axios.get("http://localhost:3000/api/properties")

    return {
        props:{
            properties:data.data
        }
    }
}

export default Marketplace;
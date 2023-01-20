import MapView from "../../components/MapView";
import Charts from "./Charts";

const DescriptionTab = ({ data }) => {
    return ( 
        <>
            <div className="mt-8">
                <p className="text-xs text-main/80">Resumen inversión</p>
                <div className="flex mt-6 gap-4">
                    <div className="text-main px-2 lg:px-28 py-4 border-main border rounded-lg flex flex-col items-center">
                        <p className="text-sm text-center">Total inversión</p>
                        <p className="mt-4 text-center text-sm lg:text-xl font-medium">${ data.price.slice(0,2) } MM CLP</p>
                    </div>
                    <div className="text-main px-2 lg:px-28 py-4 border-main border rounded-lg flex flex-col items-center">
                        <p className="text-sm text-center">Precio token</p>
                        <p className="mt-4 text-center text-sm lg:text-xl font-medium">${ new Intl.NumberFormat('de-DE').format(data.tokens.price) } CLP</p>
                    </div>
                    <div className="text-main px-2 lg:px-28 py-4 border-main border rounded-lg flex flex-col items-center">
                        <p className="text-sm text-center">Total tokens</p>
                        <p className="mt-4 text-center text-sm lg:text-xl font-medium">${ data.tokens.total } CLP</p>
                    </div>
                </div>
                <p className="text-xs text-main/80 mt-6 -mb-2">Descripción</p>
                {
                    data.description.full.map((paragraph) => (
                        <p className="my-4 font-thin">{ paragraph }</p>
                    ))
                }
                <p className="text-xs text-main/80 mt-6">Proyecciones</p>
                <p className="mt-2 font-thin">Estimaciones del valor de la inversión en el tiempo según supuestos delimitados en flujos estimados de propiedad (Carpeta Documentos)</p>
                <div className="mt-8">
                    <Charts rentalGains={data.capRate} boost={data.boost} tokenPrice={ data.tokens.price }/>
                </div>
                <p className="text-main font-thin text-sm mt-8">Ubicación</p>
                <div className="mt-6 h-[30rem] w-full">
                    <MapView lng={data.location.lng} lat={data.location.lat} id={data._id}/>
                </div>
            </div>
        </>
     );
}
 
export default DescriptionTab;
const DescriptionTab = ({ data }) => {
    return ( 
        <>
            <div className="mt-8">
                <p className="text-xs text-main/80">Resumen inversión</p>
                <div className="flex mt-6 gap-4">
                    <div className="text-main px-28 py-4 border-main border rounded-lg flex flex-col items-center">
                        <p className="text-sm">Total inversión</p>
                        <p className="mt-4 text-xl font-medium">${ data.price.slice(0,2) } MM CLP</p>
                    </div>
                    <div className="text-main px-28 py-4 border-main border rounded-lg flex flex-col items-center">
                        <p className="text-sm">Precio token</p>
                        <p className="mt-4 text-xl font-medium">${ new Intl.NumberFormat('de-DE').format(data.tokens.price) } CLP</p>
                    </div>
                    <div className="text-main px-28 py-4 border-main border rounded-lg flex flex-col items-center">
                        <p className="text-sm">Total tokens</p>
                        <p className="mt-4 text-xl font-medium">${ data.tokens.total }</p>
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
            </div>
        </>
     );
}
 
export default DescriptionTab;
const Divider = () => (
    <div className="w-full h-[1px] bg-main/70 my-4"></div>
)

const FinancesTab = ({ data }) => {
    return ( 
        <>
            <div className="mt-8 p-4">
                <h2 className="text-lg font-medium text-slate-800/90">Información financiera</h2>
                <p className="text-sm text-main mt-1">Detalles de costos inversión inicial.</p>
                <Divider/>
                <div className="flex">
                    <h3 className="font-medium text-main">Valor propiedad</h3>
                    <p></p>
                </div>
            </div>
        </>
    );
}
 
export default FinancesTab;
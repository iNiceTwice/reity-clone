const Divider = () => (
    <div className="w-full h-[1px] bg-main/70 my-6"></div>
)

const FinancesTab = ({ data }) => {
    return ( 
        <>
            <div className="mt-8 p-4">
                <h2 className="text-lg font-medium text-slate-800/90">Información financiera</h2>
                <p className="text-sm text-main mt-1">Detalles de costos inversión inicial.</p>
                <Divider/>
                <div className="flex w-full lg:w-1/3 justify-between">
                    <h3 className="text-sm font-medium text-main">Valor propiedad</h3>
                    <p>${ data.price } CLP</p>
                </div>
                <Divider/>
                <div className="flex w-full lg:w-1/3 justify-between">
                    <h3 className="text-sm font-medium text-main">Inversión total</h3>
                    <p>${ data.price } CLP</p>
                </div>
                <div className="mt-10 w-full lg:w-1/3 justify-between items-center">
                    <h2 className="text-sm font-medium text-slate-800/90">Flujos de caja</h2>
                    <p className="text-sm text-main mt-1">Flujos detallados de la propiedad.</p>
                </div>
                <Divider/>
                <div className="flex w-full lg:w-1/3 justify-between">
                    <h3 className="text-sm font-medium text-main">Ingreso por arriendo anual</h3>
                    <p>$4.080.000 CLP</p>
                </div>
                <Divider/>
                <div className="flex w-full lg:w-1/3 justify-between">
                    <h3 className="text-sm font-medium text-main">Vacancia estimada (3%)</h3>
                    <p>-${ parseInt(data.annualRent) * 0.03 } CLP</p>
                </div>
                <Divider/>
                <div className="flex w-full lg:w-1/3 justify-between">
                    <h3 className="text-sm font-medium text-main">Seguros</h3>
                    <p>-$220.000 CLP</p>
                </div>
                <Divider/>
                <div className="flex w-full lg:w-1/3 justify-between">
                    <h3 className="text-sm font-medium text-main">Contribuciones</h3>
                    <p>-$160.000 CLP</p>
                </div>
                <Divider/>
                <div className="flex w-full lg:w-1/3 justify-between">
                    <h3 className="text-sm font-medium text-main">Impuestos al activo (0.275%)</h3>
                    <p>-${ parseInt(data.price) * 0.00275 } CLP</p>
                </div>
                <Divider/>
                <div className="flex w-full lg:w-1/3 justify-between">
                    <h3 className="text-sm font-medium text-main">Costos de mantención estimados (2% ingresos)</h3>
                    <p>-${ parseInt(data.annualRent) * 0.02 } CLP</p>
                </div>
                <Divider/>
                <div className="flex w-full lg:w-1/3 justify-between">
                    <h3 className="text-sm font-medium text-main">Fee administración Reity (2% ingresos)</h3>
                    <p>-${ parseInt(data.annualRent) * 0.02 } CLP</p>
                </div>
                <Divider/>
                <div className="flex w-full lg:w-1/3 justify-between">
                    <h3 className="text-sm font-medium text-main">Property management (6% ingresos)</h3>
                    <p>-${ parseInt(data.annualRent) * 0.06 } CLP</p>
                </div>
                <Divider/>
                <div className="flex w-full lg:w-1/3 justify-between">
                    <h3 className="text-sm font-medium text-main">Gastos contabilidad</h3>
                    <p>-$28.000 CLP</p>
                </div>
                <Divider/>
                <div className="flex w-full lg:w-1/3 justify-between">
                    <h3 className="text-xl font-medium text-main">Resultado neto anual estimado</h3>
                    <p className="text-xl text-slate-800/90 font-medium">$2.926.496 CLP</p>
                </div>
            </div>
        </>
    );
}
 
export default FinancesTab;
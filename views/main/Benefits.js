import { HiOutlineBuildingOffice2, HiArrowsRightLeft, HiOutlineLockClosed} from "react-icons/hi2"

const Benefits = () => {
    return ( 
        <>
            <section className="relative z-30 bg-slate-100 py-28 w-full flex justify-center items-center">
                <div className="w-full lg:w-5/6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-4 text-center  items-center p-12 md:p-6">
                        <div className="p-3 bg-main rounded-md w-fit shadow-lg">
                            <HiOutlineBuildingOffice2 size={25} className="text-white" />
                        </div>
                        <h2 className="font-semibold text-lg text-slate-800">Gana por arriendo y la plusvalía</h2>
                        <p className="text-slate-600">Invierte desde $100.000 y gana por el arriendo. Luego, la propiedad se vende después de 5 años y ganas por la plusvalía del inmueble.</p>
                    </div>
                    <div className="flex flex-col gap-4 text-center items-center p-12 md:p-6">
                        <div className="p-3 bg-main rounded-md w-fit shadow-lg">
                            <HiOutlineLockClosed size={25} className="text-white" />
                        </div>
                        <h2 className="font-semibold text-lg text-slate-800">Garantizado y respaldado</h2>
                        <p className="text-slate-600">Tus tokens están respaldados por contratos que garantizan la inversión. Además, hay una póliza de seguros que respalda el fiel cumplimiento para entregarte más seguridad.</p>
                    </div>
                    <div className="flex flex-col gap-4 text-center items-center p-12 md:p-6">
                        <div className="p-3 bg-main rounded-md w-fit shadow-lg">
                            <HiArrowsRightLeft size={25} className="text-white" />
                        </div>
                        <h2 className="font-semibold text-lg text-slate-800">Increíblemente líquido</h2>
                        <p className="text-slate-600">¿Necesitas tu plata de vuelta? Vende tus tokens directo a Reity y, próximamente, a otros usuarios de Reity.</p>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Benefits;
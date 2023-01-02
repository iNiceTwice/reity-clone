import Image from "next/image"
import SectionTitle from "../../components/SectionTitle"

const WhyUs = () => {
    return ( 
        <>
            <section className="py-32 w-full">
                <SectionTitle title="¿Por qué Reity?"/>
                <div className="mt-10 w-full flex flex-col gap-y-10 justify-center items-center">
                    <div className="w-11/12 h-fit flex flex-col justify-center items-center lg:items-stretch lg:flex-row gap-6">
                        <div className="w-full md:w-5/6 lg:w-1/3 font-montserrat rounded-md shadow-xl flex flex-col gap-4 text-slate-800 items-center p-16 text-center min-h-full">
                            <div className="relative h-[5rem] lg:h-[10vw] w-[5rem] lg:w-[10vw]">
                                <Image alt="tarjeta de credito" src="https://www.reity.cl/card-with-coins.svg" fill loading="lazy"/>
                            </div>
                            <h3 className="font-medium text-2xl">Rentabilidad</h3>
                            <p>Gracias a nuestro token, quédate con la rentabilidad del arriendo y/o de la venta del departamento.</p>
                        </div>
                        <div className="w-full md:w-5/6 lg:w-1/3 font-montserrat rounded-md shadow-xl flex flex-col gap-4 text-slate-800 items-center p-16 text-center min-h-full">
                            <div className="relative h-[5rem] lg:h-[10vw] w-[5rem] lg:w-[10vw]">
                                <Image alt="balanza" src="https://www.reity.cl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIconBalance.05522e76.png&w=256&q=75" fill loading="lazy"/>
                            </div>
                            <h3 className="font-medium text-2xl">Diversifica</h3>
                            <p>Invierte no en uno, sino en todos los tokens asociados a departamentos que quieras.</p>
                        </div>
                        <div className="w-full md:w-5/6 lg:w-1/3 font-montserrat rounded-md shadow-xl flex flex-col gap-4 text-slate-800 items-center p-16 text-center min-h-full">
                            <div className="relative h-[5rem] lg:h-[10vw] w-[5rem] lg:w-[10vw]">
                                <Image alt="billetera" src="https://www.reity.cl/wallet.svg" fill loading="lazy"/>
                            </div>
                            <h3 className="font-medium text-2xl">Protégete de la inflación</h3>
                            <p>Pon a trabajar tu dinero: no hay peor negocio que dejar tu plata en la cuenta corriente.</p>
                        </div>
                    </div>
                    <div className="w-11/12 h-fit flex flex-col lg:flex-row gap-6 lg:items-stretch items-center justify-center">
                        <div className="w-full md:w-5/6 lg:w-1/3 font-montserrat rounded-md shadow-xl flex flex-col gap-4 text-slate-800 items-center p-16 text-center min-h-full">
                            <div className="relative h-[5rem] lg:h-[10vw] w-[5rem] lg:w-[10vw]">
                                <Image alt="computadora" src="https://www.reity.cl/computer.svg" fill loading="lazy"/>
                            </div>
                            <h3 className="font-medium text-2xl">Flexibilidad</h3>
                            <p>Le damos flexibilidad al mercado inmobiliario: compra y vende tus tokens de manera rápida y sencilla.</p>
                        </div>
                        <div className="w-full md:w-5/6 lg:w-1/3 font-montserrat rounded-md shadow-xl flex flex-col gap-4 text-slate-800 items-center p-16 text-center min-h-full">
                            <div className="relative h-[5rem] lg:h-[10vw] w-[5rem] lg:w-[10vw]">
                                <Image alt="alcancía" src="https://www.reity.cl/piggy-bank.svg" fill loading="lazy"/>
                            </div>
                            <h3 className="font-medium text-2xl">Con sólo $100.000</h3>
                            <p>Compra tokens y empieza a tener retornos.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default WhyUs;
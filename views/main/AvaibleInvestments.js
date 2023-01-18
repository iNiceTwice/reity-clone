import Image from "next/image"
import Link from "next/link";
import Button from "../../components/Button";
import SectionTitle from "../../components/SectionTitle";

const AvaibleInvestments = () => {
    return ( 
        <>
            <section className="w-full py-32">
                <SectionTitle title="Inversiones disponibles"/>
                <div className="flex flex-col lg:flex-row w-full lg:px-[8vw] lg:gap-5 justify-center items-center">
                    <div className="w-10/12 lg:w-8/12">
                        <div className="relative h-[15rem] lg:h-[40rem] w-full lg:shadow-lg overflow-hidden rounded-t-md lg:rounded-md">
                            <Image alt="Edificio Albora" fill loading="lazy" objectPosition="center" objectFit="cover" src="https://wallstate.nyc3.cdn.digitaloceanspaces.com/Reity/IMG_9443%284%29%20%281%29.jpeg"/>
                        </div>
                    </div>
                    <div className="flex flex-col font-montserrat w-10/12 lg:w-4/12 shadow-lg h-full overflow-hidden rounded-b-md lg:rounded-md">
                        <div className="rounded-md p-6 w-full">
                            <p>Santiago, CL</p>
                            <h3 className="text-2xl font-semibold mt-4 mb-1">Edificio Albora</h3>
                            <p className="text-2xl">CLP $80.000.000</p>
                        </div>
                        <div className="flex flex-col bg-main gap-6 text-white h-fit w-full p-6">
                            <div className="flex gap-x-20 mt-2">
                                <Image alt="Metros cuadrados" src="https://www.reity.cl/measurementIcon.svg" height={45} width={45}/>
                                <div>34 m2</div>
                            </div>
                            <div className="flex gap-x-20 mt-2">
                                <Image alt="Habitaciones" src="https://www.reity.cl/bedIcon.svg" height={45} width={45}/>
                                <div>1D + 1B</div>
                            </div>
                            <div className="flex gap-x-20 mt-2">
                                <Image alt="Valor del token" src="https://www.reity.cl/coinIcon.svg" height={45} width={45}/>
                                <div>Valor del token: $100.000 CLP</div>
                            </div>
                            <div className="flex gap-x-20 mt-2">
                                <Image alt="Rentabilidad" src="https://www.reity.cl/arrowIcon.svg" height={45} width={45}/>
                                <div>Rentabilidad: 12.73%</div>
                            </div>
                            <Link href="/propiedades/63bc814c280d13d1d6d563b0" className="w-full">
                                <Button className="bg-secondary w-full mt-2">Comprar</Button>
                            </Link>
                        </div>
                    </div>
                </div>                                                                                       
            </section>
        </>
     );
}
 
export default AvaibleInvestments;
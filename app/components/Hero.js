import Image from "next/image"
import Button from "../../components/Button"

const Hero = () => {
    return ( 
        <>
            <section className="lg:pt-36 grid grid-cols-1 lg:grid-cols-3 h-screen w-full">
                <div className="relative w-full">
                    <div className="z-10 absolute -left-96 -ml-12 h-[50rem] w-full xl:w-[50rem] hidden lg:flex ">
                        <Image fill src="https://www.reity.cl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCityImage.05e7ea7c.png&w=1080&q=75" objectFit="cover"/>
                    </div>
                </div>
                <div className="z-20 relative flex items-center justify-center flex-col w-full font-montserrat">
                    <h1 className="text-4xl lg:text-5xl w-11/12 lg:w-[40rem] text-center font-semibold text-slate-800/90">Propiedades al alcance de todos</h1>
                    <p className="text-center text-lg mt-8 w-10/12 lg:w-[35rem]">Con Reity invierte en tokens asociados a departamentos con solo $100.000 y gana por el arriendo y la plusvalía. Sin pie, sin créditos y con garantía.</p>
                    <Button className="bg-secondary mt-8 px-12">Empezar</Button>
                </div>
                <div className="relative w-full">
                    <div className="z-10 absolute -right-96 -mr-12 h-[50rem] w-full xl:w-[50rem] hidden lg:flex">
                        <Image fill src="https://www.reity.cl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCityImage.05e7ea7c.png&w=1080&q=75" objectFit="cover"/>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Hero;
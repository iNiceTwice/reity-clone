import Logo from "../components/Logo";
import Button from "../components/Button"
import Link from "next/link";
import Circles from "../components/Circles";
import { toast } from "react-toastify"

const signup = () => {

    const notify = () => toast.info("Feature coming soon",{ position:"bottom-right" });
    
    const handleClick = () => {
        notify()
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return ( 
        <>
            <section className="h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full">
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="flex flex-col lg:w-1/2 items-center justify-center">
                            <Link href="/">
                                <Logo className="h-[3.5rem] mb-8"/>
                            </Link>
                            <div className="text-center">
                                <h2 className="font-semibold text-3xl mb-2">Crea tu cuenta</h2>
                                <p className="text-sm text-slate-800/80">Invierte en tokens de propiedades de todo el mundo</p>
                            </div>
                            <form onSubmit={ (e) => handleSubmit(e) } className=" mt-16 w-full flex flex-col">
                                <label className="mb-1 font-semibold text-slate-800/90 text-sm" for="email">Correo</label>
                                <input name="email" type="email" className="py-1 px-2 w-full outline-none rounded-md border"/>
                                <div className="flex gap-2 items-center my-6">
                                    <input type="checkbox" className="focus:ring-main rounded-md border h-4 w-4 text-primary-600 border-gray-300"/>
                                    <p className="text-sm text-slate-800/80"> He leído y acepto los <a href="#" className="underline">términos y condiciones</a> </p>
                                </div>
                                <Button onClick={ handleClick } className="py-2">Empezar</Button>
                                <div className="border-b w-full my-6"></div>
                                <Link href="/login" className="text-main font-medium text-sm">¿Ya tienes cuenta? Entra aquí</Link>    
                                <a href="#" className="text-main font-medium text-sm">Recuperar contraseña</a>    
                            </form>
                        </div>
                    </div>
                    <div className="h-full w-full bg-main relative lg:flex items-center justify-center overflow-hidden hidden">
                        <div className="flex flex-col h-full px-32 justify-center items-center">
                            <h1 className="text-5xl font-medium text-white text-center">Crea tu cuenta e invierte en propiedades</h1>
                            <p className="text-white font-thin text-lg mt-4 text-center">Elige las propiedades que quieras e invierte en fracciones desde $100.000. Gana por el arriendo y la plusvalía.</p>
                        </div>
                        <div className="absolute -left-72">
                            <Circles/>
                        </div>
                        <div className="absolute -bottom-72 -right-72">
                            <Circles/>
                        </div>
                    </div>
                </div>                
            </section>
        </>
     );
}
 
export default signup;
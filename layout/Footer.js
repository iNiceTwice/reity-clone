import { BsFacebook, BsInstagram } from "react-icons/bs";
import Logo from "../components/Logo"

const Footer = () => {
    return ( 
        <>
            <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-y-16 py-32 border-t mt-32">
                <div className="flex justify-center w-full lg:w-1/2 px-10">
                    <div className="w-full lg:w-4/6">
                        <Logo/>
                        <p className="text-lg mt-6">Democratizamos la inversión inmobiliaria. Invierte en tokens de propiedades desde $100.000 y desde todo el mundo.</p>
                        <div className="flex gap-4 text-zinc-400 mt-6">
                            <a href="#">
                                <BsFacebook className="hover:scale-110" size={20}/>
                            </a>
                            <a href="#">
                                <BsInstagram className="hover:scale-110" size={20}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 px-10 flex flex-wrap justify-start gap-12">
                    <div className="flex flex-col gap-3">
                        <h5 className="font-medium">Recursos</h5>
                        <a href="#how-it-works">Cómo funciona</a>
                        <a href="#">Propiedades</a>
                        <a href="#">Tokeniza tu propiedad</a>
                        <a href="#faq">Preguntas frecuentes</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h5 className="font-medium">Sobre Nosotros</h5>
                        <a href="#">Trabaja con nosotros</a>
                        <a href="#">Contacto</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h5 className="font-medium">Legal</h5>
                        <a href="#">Términos y condiciones</a>
                        <a href="#">Política de Privacidad</a>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Footer;
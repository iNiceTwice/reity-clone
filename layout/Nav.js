import { useEffect, useState } from "react"
import Logo from "../components/Logo"
import Button from "../components/Button"
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5"
import Link from "next/link"
import { motion } from "framer-motion"

const Nav = () => {

    const [ navPos, setNavPos ] = useState("top")
    const [ menu, setMenu ] = useState(false)
    const variants = {
        open:{
            opacity:1, x: 0
        },
        closed: { 
            opacity:1, x: "100%" 
        }
    }

    const handleScroll = () => {
        if(window.scrollY >= 60){
            setNavPos("bellow")
        }else{
            setNavPos("top")
        }
    }
    
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
    },[])

    return ( 
        <>
            <div className={`flex items-center bg-white justify-between transition-all fixed w-full px-10 pb-4 top-0 z-50 ${navPos === "top" ? "border-0 pt-4 md:pt-8" : "border-b pt-6"}`}>
                <Link href="/">
                    <div className="-ml-2 flex items-center cursor-pointer">
                        <Logo/>
                    </div>
                </Link>
                <div className="md:hidden flex">
                    <button onClick={ () => setMenu(menu => !menu) } title="menu"> 
                        <FiMenu size={25}/>
                    </button>
                </div>
                <motion.div 
                    animate={ menu ? "open" : "closed" }
                    variants={ variants }
                    transition={ { duration: 0.5 } }    
                    className="md:hidden fixed bg-white font-sans w-full h-screen top-0 right-0 pl-10"
                >
                    <div className="flex justify-between items-center h-24">
                        <Link href="/">
                            <div className="flex items-center cursor-pointer">
                                <Logo/>
                            </div>
                        </Link>
                        <button className="mr-8" onClick={ () => setMenu(menu => !menu) }>
                            <IoClose size={25}/>
                        </button>
                    </div>
                    <div className="flex flex-col gap-y-4 pt-12">
                    <a
                        href="#how-it-works" 
                        onClick={ () => setMenu(menu => !menu)} 
                        className="cursor-pointer font-semibold "
                    >
                        Cómo funciona
                    </a>
                    <a
                        href="#details" 
                        onClick={ () => setMenu(menu => !menu)} 
                        className="cursor-pointer"
                    >
                        Propiedades
                    </a>
                    <a
                        href="#testimonials" 
                        onClick={ () => setMenu(menu => !menu)} 
                        className="cursor-pointer"
                    >
                        Ingresa
                    </a>
                    <Button text="Crea tu cuenta"/>
                    </div>
                </motion.div>
                <div className="md:flex hidden font-sans gap-x-8 items-center text-sm font-semibold text-main">
                    <a
                        href="#how-it-works" 
                        onClick={ () => setMenu(menu => !menu)} 
                        className="cursor-pointer font-semibold "
                    >
                        Cómo funciona
                    </a>
                    <a
                        href="#details" 
                        onClick={ () => setMenu(menu => !menu)} 
                        className="cursor-pointer"
                    >
                        Propiedades
                    </a>
                    <a
                        href="#testimonials" 
                        onClick={ () => setMenu(menu => !menu)} 
                        className="cursor-pointer"
                    >
                        Ingresa
                    </a>
                    <Button text="Crea tu cuenta"/>
                </div>
            </div>
        </>
     );
}
 
export default Nav;
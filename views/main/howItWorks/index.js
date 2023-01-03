import SectionTitle from "../../../components/SectionTitle";
import DesktopContent from "./DesktopContent";
import MobileContent from "./MobileContent";

const HowItWorks = () => {
    return ( 
        <>
            <section id="how-it-works" className="py-32 flex flex-col justify-center items-center w-full">
                <SectionTitle title="¿Cómo funciona?"/>
                <DesktopContent />
                <MobileContent/>
            </section>
        </>
     );
}
 
export default HowItWorks;
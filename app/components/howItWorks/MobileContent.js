import { TabOneInfo } from "./TabOne";
import { TabTwoInfo } from "./TabTwo";
import { TabThreeInfo } from "./TabThree";
import { TabFourInfo } from "./TabFour";
import Dropdown from "../../../components/Dropdown";

const MobileContent = () => {
    return ( 
        <>
            <div className="w-11/12 lg:hidden flex flex-col gap-4 -mt-10">
                <Dropdown title="Crear una cuenta">
                    <TabOneInfo/>
                </Dropdown>
                <Dropdown title="Revisa los inmuebles">
                    <TabTwoInfo/>
                </Dropdown>
                <Dropdown title="Adquiere con certeza">
                    <TabThreeInfo/>
                </Dropdown>
                <Dropdown title="Consulta tus transacciones">
                    <TabFourInfo/>
                </Dropdown>
            </div>
        </>
     );
}
 
export default MobileContent;
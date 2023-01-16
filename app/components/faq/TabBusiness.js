
import Dropdown from "../../../components/Dropdown"

const TabBusiness = () => {
    return ( 
         <>
            <div className="w-full flex flex-col gap-4">
                <Dropdown title="¿Qué es Reity?">
                    <p className="mt-8">Es un marketplace o sitio web de comercio electrónico en el que se comercializan Tokens asociados a bienes raíces (la “Plataforma Reity”). A través de la Plataforma Reity, sociedades inmobiliarias ofrecen a la venta Tokens asociados a determinados departamentos de su propiedad y personas interesadas en invertir en ellos pueden adquirirlos y, posteriormente, venderlos a otros inversionistas o a la misma sociedad inmobiliaria, o a quien ésta indique.</p>
                </Dropdown>                
                <Dropdown title="¿Cuál es el monto mínimo para invertir?">
                    <p className="mt-8">Puedes comprar tokens desde $100.000 CLP.</p>
                </Dropdown>                
                <Dropdown title="¿Quién administra la propiedad?">
                    <p className="mt-8">Reity se encarga de toda la gestión, desde encontrar arrendatario, firmar los contratos, cobrar los arriendos y traspasar las ganancias a los inversionistas.</p>
                </Dropdown>                
                <Dropdown title="¿Cómo se asegura la inversión?">
                    <p className="mt-8">Previo a la creación de los Tokens, la sociedad inmobiliaria constituye una hipoteca sobre el departamento que será tokenizado a favor de una compañía de seguros con el objeto de que esta última otorgue una póliza de seguro a favor de los dueños de los Tokens. La póliza de seguros tiene por objeto garantizar el fiel cumplimiento de las obligaciones asumidas por la sociedad inmobiliaria para con los dueños de los Tokens. Para efectos operativos de la garantía, Reity actúa como representante de los dueños de los Tokens ante la compañía de seguros y asume obligaciones de actuar como mandatario fiduciario de ellos en el cobro de la póliza en los casos que sea procedente y para aplicar los dineros de la indemnización a favor de los dueños de los Tokens.</p>
                </Dropdown>                
                <Dropdown title="¿Cómo gano con mis tokens?">
                    <p className="mt-8">Los tokens generan ganancia por dos factores: el arriendo y la plusvalía. Mientras tengas los tokens, vas a ir ganando por el arriendo de la propiedad y se va reflejando diariamente en tu cuenta en Reity. Luego, tras 5 años, la propiedad se vende y, si se generan ganancias por plusvalía, se entregan a los dueños de los tokens.</p>
                </Dropdown>                
                <Dropdown title="¿Puedo vender mis tokens antes?">
                    <p className="mt-8">En un futuro Reity tendrá un mercado secundario para que puedas transar directamente con otros usuarios. Por mientras, Reity proveerá liquidez con la recompra de tokens a un 95% del valor del activo. Reity tiene hasta 180 días para efectuar esta recompra.</p>
                </Dropdown>                
            </div>
        </>
     );
}
 
export default TabBusiness;
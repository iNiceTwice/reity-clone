
import Dropdown from "../../../components/Dropdown"

const TabTecnology = () => {
    return ( 
         <>
            <div className="w-full flex flex-col gap-4">
                <Dropdown title="¿Qué blockchain usa Reity para tokenizar las propiedades?">
                    <p className="mt-8">Los tokens están en Avalanche.</p>
                </Dropdown>                
                <Dropdown title="¿La volatilidad de las criptomonedas tiene un impacto en los tokens?">
                    <p className="mt-8">No. El precio de los tokens está relacionado con una propiedad física y tangible.</p>
                </Dropdown>                
                <Dropdown title="¿Cómo recibo mis pagos?">
                    <p className="mt-8">En las oportunidades en que las sociedades inmobiliarias deben hacer pagos a los dueños de los Tokens, sea por las primas del derecho de recompra o por la recompra misma de los Tokens, los pagos se efectúan en la forma indicada en el Contrato de Compraventa de Tokens. Los pagos por arriendo se van reflejando en tu plataforma y puedes pedir un retiro de tus ganancias a tu cuenta bancaria.</p>
                </Dropdown>                
                <Dropdown title="¿Necesito un wallet para invertir?">
                    <p className="mt-8">No es necesario. Similar a otras plataformas, nosotros custodiamos tus tokens para que puedas comprarlos fácil y rápidamente.</p>
                </Dropdown>                        
            </div>
        </>
     );
}
 
export default TabTecnology;
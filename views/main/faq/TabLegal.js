import Dropdown from "../../../components/Dropdown"

const TabLegal = () => {
    return ( 
        <>
            <div className="w-full flex flex-col gap-4">
                <Dropdown title="¿Qué es la tokenización?">
                    <p className="mt-8">Es el proceso de asociar un activo real a la creación de ciertos Tokens, quedando dicho activo vinculado y comprometido hasta la recompra de todos los Tokens. Los Tokens que se comercializan en la Plataforma Reity están vinculados a departamentos de propiedad de la sociedad inmobiliaria que crea los Tokens respectivos. La sociedad inmobiliaria se obliga a explotar el inmueble y a no enajenarlo, salvo bajo las condiciones pactadas en el Contrato de Compraventa de Tokens. A su vez, la sociedad inmobiliaria asume la obligación de pagar regularmente a los dueños de los Tokens una prima para mantener un derecho de recompra de los Tokens. La prima se encuentra indexada a las rentas de explotación del inmueble descontado los gastos. Por otra parte, el valor de recompra de los Tokens se encuentra indexado al valor del departamento, incluyendo la plusvalía. El Contrato de Compraventa de Tokens contempla las fórmulas para el cálculo de los montos respectivos y su oportunidad y forma de pago.</p>
                </Dropdown>                
                <Dropdown title="¿Qué es un token?">
                    <p className="mt-8">Los Tokens son activos digitales, también conocidos como “criptoactivos”, creados en base a la tecnología blockchain. Los Tokens que se comercializan en la Plataforma son creados a través de ella por sociedades inmobiliarias dueñas de ciertos departamentos para dar acceso, a quienes los compren, a beneficios asociados a tales inmuebles, con arreglo a los términos y garantías establecidos en el Contrato de Compraventa de Tokens. En cada caso, se crea una cantidad limitada y definida de Tokens por cada departamento, fraccionando su valor. Las sociedades inmobiliarias son los primeros vendedores de los Tokens y sus compradores finales.</p>
                </Dropdown>                
                <Dropdown title="¿Quiénes son las sociedades inmobiliarias?">
                    <p className="mt-8">Actualmente, sólo Inmobiliaria Token I SpA, una sociedad inmobiliaria del Grupo Norte Verde, está ofreciendo Tokens asociados a ciertos departamentos de su propiedad en la Plataforma Reity. Sin embargo, esperamos que en el futuro cercano otras inmobiliarias puedan también ofrecer Tokens asociados a sus departamentos.</p>
                </Dropdown>                
                <Dropdown title="¿Quién es dueño de la propiedad?">
                    <p className="mt-8">Las sociedades inmobiliarias que crean los Tokens son dueñas de los departamentos asociados a ellos. Ellas se obligan a conservar su dominio y a explotarlos para dar cumplimiento a las obligaciones que asumen para con los dueños de los Tokens. Sin embargo, para garantizar el cumplimiento de sus obligaciones constituyen hipoteca sobre ellos a favor de una compañía de seguros. Bajo las condiciones pactadas en el Contrato de Compraventa de Tokens, las sociedades inmobiliarias están facultadas para enajenar los departamos, pero esas mismas condiciones gatillarán la recompra de los Tokens. El precio de recompra de los Tokens se calcula en la forma establecida en el Contrato de Compraventa de Tokens que persigue capturar y comunicar la plusvalía de la venta del departamento.</p>
                </Dropdown>                
                <Dropdown title="¿Qué legislación rige a la Plataforma Reity y a los contratos que se celebran a través de ella?">
                    <p className="mt-8">La Plataforma Reity y los contratos que se celebran a través de ella se rigen por las leyes de la República de Chile. Dichos contratos tienen por objeto la compra y venta de Tokens con arreglo a sus términos. Los inversionistas que celebran estos contratos realizan actos de comercio, toda vez que adquieren uno o más Tokens con la explícita intención de venderlos posteriormente. En consecuencia, se trata de actos de comercio destinados a la inversión y obtención de lucro que no forma parte de las regulaciones del consumo. Por lo mismo, no se encuentran sujetos a las leyes de protección al consumidor. Por otra parte, los contratos y operaciones que se realizan a través de la Plataforma Reity podrían quedar regulados en el futuro por una nueva ley que promueva la competencia e inclusión financiera a través de la innovación y tecnología en la prestación de servicios financieros, conocida como “Ley Fintec”. Tanto los términos y condiciones de uso de la Plataforma Reity como los contratos que se celebran en ella contienen disposiciones expresas tendientes a adaptarse a tal nueva legislación en caso de que sea promulgada y entre en vigencia, contemplando la flexibilidad necesaria para que las partes puedan de buena fe cumplir con la nueva normativa sin afectar la esencia de lo pactado.</p>
                </Dropdown>                
                <Dropdown title="¿Dónde puedo encontrar los documentos legales de cada propiedad?">
                    <p className="mt-8">Todos los documentos legales de cada propiedad están en la carpeta Documentos que se presenta en la oferta de cada propiedad. Acá puedes encontrar la ficha técnica de la tokenización, los documentos asociadas a la inscripción de la propiedad, etc.</p>
                </Dropdown>                
            </div>   
        </>
     );
}
 
export default TabLegal;
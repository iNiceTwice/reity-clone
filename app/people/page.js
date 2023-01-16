import { TeamMember } from "../../views/main/Team";
import Layout from '../../layout'

const People = () => {

    const teamRoles = ["Advisor", "Advisor", "CMO", "Tecnología", "Tecnología", "CEO", "CFO", "Marketing", "Tecnología", "CTO", "COO"]
    
    return ( 
        <>
        <Layout>
            <section className="w-full pt-48 pb-32 flex justify-center items-center">
                <div className="w-full lg:w-4/6 px-8">
                    <div className="w-full text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-800/90">Conoce al equipo Reity</h2>
                        <p className="text-xl text-main">El mercado inmobiliario debería ser para todos y en Reity nos movemos para hacerlo una realidad.</p>    
                    </div>
                    <div className="flex flex-wrap w-full justify-center mt-20">
                        {
                            teamRoles.map(( role, index ) => (
                                <TeamMember borderless={ true } key={ role + index } role={ role }/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </Layout>
        </>
     );
}
 
export default People;
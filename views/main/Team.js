import Button from "../../components/Button";
import SectionTitle from "../../components/SectionTitle";
import Link from "next/link"

export const TeamMember = ({ role, borderless = false }) => {
    return (
        <>
            <div className={`p-16 rounded-md ${ borderless ? "shadow-none" : "shadow-lg"} flex flex-col justify-center items-center gap-2`}>
                <div className="p-20 rounded-full bg-slate-200"></div>
                <p className="text-lg">Jane Doe</p>
                <p className="text-main">{ role }</p>
            </div>
        </>
    )
}

export const Team = () => {

    const teamRoles = ["CMO","CEO","CFO","CTO","COO"]

    return ( 
        <>
            <section className="my-32 flex flex-col justify-center items-center">
                <SectionTitle title="Equipo"/>
                <div className="flex flex-wrap w-11/12 justify-center gap-x-4 gap-y-10">
                    {
                        teamRoles.map((role,index) => (
                            <TeamMember key={role+index} role={role}/>
                        ))
                    }
                </div>
                <div className="w-full text-center mt-20">
                    <Link href="/people">
                        <Button>Conoce a todo el equipo</Button>
                    </Link>
                </div>
            </section>
        </>
     );
}
 
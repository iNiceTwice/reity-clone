import Button from "../../components/Button";
import SectionTitle from "../../components/SectionTitle";
import TeamMember from "../../components/TeamMember"
import Link from "next/link"

const Team = () => {

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

export default Team
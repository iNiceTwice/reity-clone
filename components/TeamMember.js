const TeamMember = ({ role, borderless = false }) => {
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

export default TeamMember
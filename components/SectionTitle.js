const SectionTitle = ({ title }) => {
    return ( 
        <>
            <div className="flex flex-col w-full items-center gap-2 text-slate-800 mb-20 lg:mb-32">
                <h2 className="font-semibold text-2xl lg:text-5xl font-montserrat">{ title }</h2>
                <div className="h-[6px] w-24 bg-main"></div>
             </div>
        </>
     );
}
 
export default SectionTitle;
import Button from "../../components/Button";

const DocumentsTab = ({ data }) => {
    return ( 
        <>
            <div className="mt-8 flex flex-col w-full lg:w-1/3">
                <div className="flex justify-between items-center w-full">
                    <p className="text-main">{ data.name }</p>
                    <a href={ data.documents } target="_blank" rel="noreferer">
                        <Button>Ver documentos</Button>
                    </a>
                </div>
                <div className="my-6 flex justify-between items-center w-full">
                    <p className="text-main">Dirección token</p>
                    <a className="text-slate-800/90 hover:text-slate-800/40 hover:border-slate-800/40 border-b border-slate-800/80" href={ data.tokens.contractUrl } target="_blank" rel="noreferer">
                    { data.tokens.contract }
                    </a>
                </div>
            </div>
        </>
     );
}
 
export default DocumentsTab;
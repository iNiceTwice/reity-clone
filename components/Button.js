const Button = ({ children, className }) => {
    return ( 
        <>
            <button className={`${className} py-2 px-4 font-medium cursor-pointer bg-main text-white rounded-md hover:bg-opacity-90`}>
                { children }
            </button>
        </>
     );
}
 
export default Button;
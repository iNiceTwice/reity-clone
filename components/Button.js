const Button = ({ children, className }) => {
    return ( 
        <>
            <button className={`${className} font-medium cursor-pointer px-4 py-4 bg-main text-white rounded-md hover:bg-opacity-90`}>
                { children }
            </button>
        </>
     );
}
 
export default Button;
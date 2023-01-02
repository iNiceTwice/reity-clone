const Button = ({ text, className }) => {
    return ( 
        <>
            <button title={ text } className={`${className} cursor-pointer px-4 py-4 bg-main text-white rounded-md hover:bg-opacity-90`}>
                { text }
            </button>
        </>
     );
}
 
export default Button;
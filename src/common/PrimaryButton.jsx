const PrimaryButton = ({ BtnText, className }) => {
    return (
        <button className={`font-Rubik font-semibold text-base px-6 py-[14px] max-sm:h-[45px] flex items-center justify-center bg-light_orange hover:bg-white hover:border-light_orange hover:border border border-transparent hover:text-light_orange ease-in-out duration-300 rounded-lg text-white ${className}`}>{BtnText}</button>
    )
}

export default PrimaryButton
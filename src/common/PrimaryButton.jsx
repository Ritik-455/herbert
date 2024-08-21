const PrimaryButton = ({ BtnText, className }) => {
    return (
        <button className={`font-Rubik font-semibold text-base px-6 py-[14px] bg-light_orange rounded-lg text-white ${className}`}>{BtnText}</button>
    )
}

export default PrimaryButton
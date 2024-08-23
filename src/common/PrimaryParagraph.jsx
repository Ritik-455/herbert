const PrimaryParagraph = ({ text, className }) => {
    return (
        <p className={`font-normal sm:text-base text-sm text-grey ${className}`}>{text}</p>
    )
}

export default PrimaryParagraph
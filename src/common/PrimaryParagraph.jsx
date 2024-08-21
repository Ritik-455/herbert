const PrimaryParagraph = ({ text, className }) => {
    return (
        <p className={`font-normal text-base text-grey ${className}`}>{text}</p>
    )
}

export default PrimaryParagraph
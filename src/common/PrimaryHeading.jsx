const PrimaryHeading = ({ text, children, LeadingText, className }) => {
    return (
        <h2 className={`font-Rubik font-semibold text-5xl leading-md text-dark_black ${className}`}>
            {text}
            {children}
            {LeadingText}
        </h2>
    )
}

export default PrimaryHeading
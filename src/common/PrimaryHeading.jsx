const PrimaryHeading = ({ text, children, LeadingText }) => {
    return (
        <h2 className="font-Rubik font-semibold text-5xl leading-md text-dark_black">
            {text}
            {children}
            {LeadingText}
        </h2>
    )
}

export default PrimaryHeading
const PrimaryHeading = ({ text, children, LeadingText, className }) => {
    return (
        <h2 className={`font-Rubik font-semibold lg:text-5xl md:text-3xl text-2xl sm:leading-md text-dark_black ${className}`}>
            {text}
            {children}
            {LeadingText}
        </h2>
    )
}

export default PrimaryHeading
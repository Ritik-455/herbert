import { useEffect, useState } from 'react';
import { BackToTopIcon } from './Icon';


const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollTop} className="fixed bottom-5 right-5 bg-light_orange duration-300 hover:bg-orange bg-blue font-bold py-1 px-1 md:py-2 md:px-2 rounded-full shadow-md z-40 hover:opacity-55">
                    <BackToTopIcon />
                </button>
            )}
        </>
    );
};

export default BackToTop;
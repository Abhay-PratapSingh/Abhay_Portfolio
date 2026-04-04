import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // ✅ scroll to top when no hash
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    return null;
};

export default ScrollToSection;
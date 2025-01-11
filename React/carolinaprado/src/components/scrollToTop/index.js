import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Se houver uma hash, procure o elemento com o id correspondente
            const element = document.querySelector(hash);
            if (element) {
                // Rola para a posição da âncora
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } else {
            // Caso não haja hash, role para o topo da página
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles: { [key: string]: string } = {
    '/': 'Accueil | Excellence Tapis',
    '/homepage': 'Accueil | Excellence Tapis',
    '/a-propos': 'A propos | Excellence Tapis',
    '/about': 'A propos | Excellence Tapis',
    '/tapis': 'Nos Tapis | Excellence Tapis',
    '/custom': 'Tapis Personnalisées | Excellence Tapis',
    '/contact': 'Contactez nous | Excellence Tapis',
};

export const TitleSetter: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname;
        document.title = routeTitles[pathname] || 'Excellence Tapis';
    }, [location]);

    return null;
};
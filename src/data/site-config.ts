export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
};

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    title: 'Saúl Cánovas',
    subtitle: 'Portfolio',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/saulcanovas'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Sobre mí',
        text: "Soy Saúl Cánovas, programador en formación con experiencia en desarrollo de aplicaciones y un fuerte interés por convertirme en desarrollador full stack. Me apasiona aprender nuevas tecnologías y trabajar en proyectos que supongan un reto. Gracias a mi experiencia previa en atención al cliente y gestión, aporto organización, empatía y capacidad para resolver problemas de forma eficaz. Busco seguir creciendo en el mundo del desarrollo de software y contribuir con soluciones que generen valor real.",
        
        actions: [
            {
                text: 'Contáctame',
                href: '/contact'
            }
        ]
    },
};

export default siteConfig;

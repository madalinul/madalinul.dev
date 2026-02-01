export const developer = {
    name: 'Madalin Ciciu',
    description:
        'Passionate Frontend Engineer with extensive experience in building scalable and high-performance web applications.',
    image: '/img/boss.jpeg',
    github: 'https://github.com/madalinul',
    linkedin: 'https://www.linkedin.com/in/madalin-ciciu/',
};

export type Developer = typeof developer;

export const experiences = [
    {
        company: 'PepsiCo',
        role: 'Senior Frontend Engineer',
        duration: 'Jan 2024 - Present',
        location: 'Remote - Bucharest, Romania',
        image: 'https://img.logo.dev/pepsico.com?token=pk_Vxz45N6_SXGznLc49HGTQg',
        link: 'https://sodastream.com/',
        description: [
            'Designed and implemented a highly performant, SEO-friendly eCommerce store using Next.js with SSG/ISR for optimal speed and scalability.',
            'Integrated DatoCMS as the headless CMS, ensuring efficient content management and dynamic page generation with GraphQL API',
            'Achieved 95+ Lighthouse scores for performance, accessibility, and SEO by implementing lazy loading, image optimization, and efficient data fetching strategies.',
            'Built a reusable component library with React and Tailwind CSS, ensuring consistency and rapid development.',
        ],
    },
    {
        company: 'MiMedia',
        role: 'Senior Frontend Engineer',
        duration: 'Dec 2022 - Present',
        location: 'Remote - Bucharest, Romania',
        image: 'https://img.logo.dev/mimedia.com?token=pk_Vxz45N6_SXGznLc49HGTQg',
        link: 'https://portal.mimedia.com/',
        description: [
            'Developed a cloud storage platform with a full SDLC approach.',
            'Implemented modern React and TypeScript practices for scalable UI.',
            'Integrated AWS services (Amazon S3, AWS Amplify) for deployment.',
            'Automated deployment processes across multiple environments.',
        ],
    },
    {
        company: 'Shippo',
        role: 'Frontend Engineer',
        duration: 'Mar 2022 - Oct 2022',
        location: 'Remote - Bucharest, Romania',
        image: 'https://img.logo.dev/goshippo.com?token=pk_Vxz45N6_SXGznLc49HGTQg',
        link: 'https://goshippo.com/',
        description: [
            'Designed and developed a shared component library.',
            'Conducted research on libraries for performance optimization.',
            'Refactored codebase with custom hooks for maintainability.',
            'Implemented unit and E2E tests for better code quality.',
        ],
    },
    {
        company: 'Software Defined Automation',
        role: 'Frontend Engineer',
        duration: 'Oct 2021 - Apr 2022',
        location: 'Remote - Bucharest, Romania',
        image: 'https://img.logo.dev/softwaredefinedautomation.io?token=pk_Vxz45N6_SXGznLc49HGTQg',
        link: 'https://www.softwaredefinedautomation.io/',
        description: [
            'Built a code editor and grid-based infrastructure for deployments.',
            'Introduced Redux framework for better state management.',
            'Implemented TypeScript for improved control and auto-completion.',
            'Used web sockets for real-time monitoring of virtual machines.',
        ],
    },
    {
        company: 'Grubhub',
        role: 'Frontend Engineer',
        duration: 'Mar 2021 - Dec 2021',
        location: 'Remote',
        image: 'https://img.logo.dev/grubhub.com?token=pk_Vxz45N6_SXGznLc49HGTQg',
        link: 'https://www.grubhub.com/',
        description: [
            'Optimized performance using virtualization for large data sets.',
            'Migrated codebase from Preact to React seamlessly.',
            'Developed unit & E2E tests with React Testing Library/Jest/Cypress.',
            'Collaborated with UX/UI teams to improve website conversion rates.',
        ],
    },
    {
        company: 'Imajing Romania',
        role: 'Javascript Developer',
        duration: 'Nov 2015 - Mar 2021',
        location: 'Bucharest, Romania',
        image: 'https://img.logo.dev/imajing.eu?token=pk_Vxz45N6_SXGznLc49HGTQg',
        link: 'https://imajing.eu/',
        description: [
            'Upgraded frontend from jQuery to React Redux stack.',
            'Developed features and fixed bugs using GitLab Issue Board.',
            'Implemented complex shape drawing over real-world images with Canvas.',
            'Applied algorithms for real-time GPS coordinate decoding.',
        ],
    },
];

export type Experiences = typeof experiences;
export type Experience = (typeof experiences)[0];

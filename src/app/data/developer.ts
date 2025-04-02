export const developer = {
    name: 'Madalin Ciciu',
    description:
        'Passionate Frontend Engineer with extensive experience in building scalable and high-performance web applications.',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGQ5hVObBIQbA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731669561561?e=1749081600&v=beta&t=AXkXRkRtwxlrmLVoK_XuZrflvZNMTWwiLCLXg1hue1Q',
    github: 'https://github.com/madalinul',
    linkedin: 'https://www.linkedin.com/in/madalin-ciciu/',
};

export type Developer = typeof developer;

export const experiences = [
    {
        company: 'MiMedia',
        role: 'Senior Frontend Engineer',
        duration: 'Dec 2022 - Present',
        location: 'Remote - Bucharest, Romania',
        image: 'https://media.licdn.com/dms/image/v2/C560BAQFPwJrtI1ul6Q/company-logo_100_100/company-logo_100_100/0/1631348603315?e=1749081600&v=beta&t=QX6HHHrpb0mDXgkLFkPqJ9yXL0tAXiSDbndJy-QeucA',
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
        location: 'Bucharest, Romania',
        image: 'https://media.licdn.com/dms/image/v2/D4D0BAQE-NZ_qLiLGXQ/company-logo_100_100/company-logo_100_100/0/1712281093832/shippo_logo?e=1749081600&v=beta&t=EUjUESmPSwhuNwK42lsJzxuw33w6AMCB7C8p7pdOo_E',
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
        location: 'Bucharest, Romania',
        image: 'https://media.licdn.com/dms/image/v2/C4D0BAQEAJIdlFoySjQ/company-logo_100_100/company-logo_100_100/0/1644845577543/software_defined_automation_logo?e=1749081600&v=beta&t=gi9iWalxd6tKH6yFD9bTICPiahxt18AxKr7FZ_-AqzA',
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
        image: 'https://media.licdn.com/dms/image/v2/D560BAQHx6_AAcpifBQ/company-logo_100_100/company-logo_100_100/0/1737054862038/grubhub_seamless_logo?e=1749081600&v=beta&t=1wfvpk9dRBma8JLcDfI3NV-bSmWapgM1tXSUjDZzRoI  ',
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
        image: 'https://media.licdn.com/dms/image/v2/D4E0BAQHxvXqZ0zy4Pg/company-logo_100_100/company-logo_100_100/0/1718800647898/nigsys_logo?e=1749081600&v=beta&t=9yKsdDLwUGmAcHerPG1N2x65-nkP_UYw4le8Nf3veV4',
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

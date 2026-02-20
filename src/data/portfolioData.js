// All portfolio data extracted from the resume PDF
export const profile = {
    name: "Vyankat Sattarwar",
    title: "Software Craftsman",
    subtitle: "Principal Software Architect & Engineering Specialist",
    phone: "+91 8147379694",
    email: "sattarwar.vyankat@gmail.com",
    linkedin: "https://linkedin.com/in/vyankat-sattarwar",
    location: "Pune, Maharashtra, India",
    yearsOfExperience: 13,
    summary:
        "Solutions-oriented professional with 13+ years of remarkable background in overseeing all aspects of the Software Development Life Cycle (SDLC) from project conceptualization and development to implementation and maintenance. Proficient in utilizing a wide variety of programs and tools to provide high-quality and cost-effective systems to boost organizational efficiency and productivity. Possesses clean coding and testing skills to deliver business-oriented applications.",
};

export const skills = [
    { name: "Java", category: "core" },
    { name: "Spring Boot", category: "core" },
    { name: "Spring Cloud", category: "core" },
    { name: "Microservices", category: "architecture" },
    { name: "System Design", category: "architecture" },
    { name: "Design Patterns", category: "architecture" },
    { name: "AWS", category: "cloud" },
    { name: "Azure Cloud", category: "cloud" },
    { name: "Docker", category: "devops" },
    { name: "Kubernetes", category: "devops" },
    { name: "Terraform", category: "devops" },
    { name: "Bamboo", category: "devops" },
    { name: "Bitbucket", category: "devops" },
    { name: "ELK Stack", category: "observability" },
    { name: "Elasticsearch", category: "observability" },
    { name: "Logstash", category: "observability" },
    { name: "Kibana", category: "observability" },
    { name: "Oracle", category: "database" },
    { name: "MySQL", category: "database" },
    { name: "APIGEE", category: "api" },
    { name: "Spring Security", category: "security" },
    { name: "OAuth / SAML", category: "security" },
    { name: "NLP", category: "ai" },
    { name: "CI/CD Pipelines", category: "devops" },
];

export const skillCategories = [
    { key: "all", label: "All" },
    { key: "core", label: "Core" },
    { key: "architecture", label: "Architecture" },
    { key: "cloud", label: "Cloud" },
    { key: "devops", label: "DevOps" },
    { key: "observability", label: "Observability" },
    { key: "database", label: "Database" },
    { key: "api", label: "API" },
    { key: "security", label: "Security" },
    { key: "ai", label: "AI / ML" },
];

export const experience = [
    {
        role: "Software Engineering Specialist",
        company: "Vanderlande",
        location: "Pune",
        period: "May 2023 – Present",
        current: true,
        color: "from-sky-500 to-cyan-400",
        icon: "🏗️",
        highlights: [
            "Understanding and designing services based on stakeholder requirements.",
            "Working with stakeholders for third-party API integrations.",
            "Proposing use of Azure Cloud services, monitoring cost, and suggesting ways to reduce running costs.",
            "Creating proof of concepts out of Azure managed services which fit proposed solutions.",
            "Implemented logging and monitoring solutions using ELK stack, used by all deployed services.",
            "Used Spring Cloud modules for implementing Spring Boot microservices, including tracing, monitoring, and gateway modules.",
            "Managed infrastructure using Terraform.",
            "Created CI/CD pipelines using Bamboo and Bitbucket.",
        ],
    },
    {
        role: "Consultant",
        company: "Sincrodigital",
        location: "Pune",
        period: "Feb 2021 – Apr 2023",
        current: false,
        color: "from-violet-500 to-purple-400",
        icon: "💡",
        highlights: [
            "Collaborated with cross-functional teams to develop solutions meeting needs of all stakeholders.",
            "Conducted customer interviews to identify areas for improvement.",
            "Migrated application infrastructure to AWS cloud following lift-and-shift methodology.",
            "Re-architected legacy applications on latest tech stack — achieved 50% improvement in application load time.",
            "Migrated on-premise database to AWS cloud with minimal downtime.",
            "Led a Cloud-Native application development initiative.",
            "Developed a microservices architecture improving system modularity and reducing dependencies.",
            "Led a team of software engineers to successfully deliver a major project on time and within budget.",
            "Conducted code reviews and mentored junior developers.",
        ],
    },
    {
        role: "Senior Software Engineer",
        company: "TomTom",
        location: "Pune",
        period: "Aug 2016 – Feb 2021",
        current: false,
        color: "from-emerald-500 to-teal-400",
        icon: "🗺️",
        highlights: [
            "Developed Map Quality Specification using GPS probe data — 80% improvement in map corrections.",
            "Developed public API managed through APIGEE to report Map anomalies in TomTom Maps.",
            "Automated the process of converting raw data into Points of Interest (POI) and entry points.",
            "Enabled places search using Augmented Reality via Wikitude.",
            "Implemented navigation using better network availability along the route.",
            "Categorized map issues using Natural Language Processing (NLP).",
            "Implemented API security and SSO using Spring Security — OAuth and SAML.",
        ],
    },
    {
        role: "Application Developer",
        company: "Amdocs",
        location: "Pune",
        period: "Jun 2015 – Aug 2016",
        current: false,
        color: "from-orange-500 to-amber-400",
        icon: "📱",
        highlights: [
            "Enhanced Accounts and Collectibles application for telecom clients.",
            "Upgraded Java versions from JDK 5 to JDK 7.",
            "Worked on a tool to generate different telecom plans for prepaid and postpaid customers.",
        ],
    },
    {
        role: "Senior Software Engineer",
        company: "Mindtree",
        location: "Pune",
        period: "Sep 2012 – Jun 2015",
        current: false,
        color: "from-pink-500 to-rose-400",
        icon: "⚙️",
        highlights: [
            "Analyzed change requests and performed impact analysis.",
            "Implemented an efficient bulk insurance quote creation process.",
            "Optimized database queries.",
            "Wrote APIs according to business requirements.",
            "Created a tool to generate SQL reports, automating the reporting process.",
        ],
    },
];

export const achievements = [
    { title: "Hackathon Winner", org: "TomTom", year: "2018", icon: "🏆" },
    { title: "Hackathon Runner-Up", org: "TomTom", year: "2019", icon: "🥈" },
    { title: "Promising Talent Award", org: "Amdocs", year: "2016", icon: "⭐" },
];

export const education = {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Walchand College of Engineering, Sangli",
    period: "2008 – 2012",
};

export const languages = ["English", "Hindi", "Marathi"];

export const hobbies = [
    { label: "Reading Tech Blogs", icon: "📰" },
    { label: "Human History & Evolution", icon: "🏛️" },
    { label: "Space Research", icon: "🚀" },
    { label: "Physics Theories", icon: "⚛️" },
];

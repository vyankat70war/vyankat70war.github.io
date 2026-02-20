// All portfolio data extracted from the resume PDF
export const profile = {
    name: "Vyankat Sattarwar",
    title: "Software Architect",
    subtitle: "Cloud & Distributed Systems Leader",
    phone: "+91 8147379694",
    email: "sattarwar.vyankat@gmail.com",
    linkedin: "https://linkedin.com/in/vyankat-sattarwar",
    location: "Pune, Maharashtra, India",
    yearsOfExperience: 13,
    summary:
        "Visionary Software Architect with over 13 years of enterprise experience in driving digital transformation, cloud strategy, and large-scale system modernization. Proven track record in orchestrating high-performance architectures, optimizing cloud infrastructure costs, and leading globally distributed engineering teams. Expert in microservices, enterprise observability, and strategic technical roadmaps that align business goals with cutting-edge technological solutions.",
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
    { name: "PostgreSQL", category: "database" },
    { name: "NoSQL", category: "database" },
    { name: "Python", category: "core" },
    { name: "GraphQL", category: "api" },
    { name: "Angular", category: "core" },
    { name: "Databricks", category: "data" },
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
    { key: "data", label: "Data Engineering" },
    { key: "api", label: "API" },
    { key: "security", label: "Security" },
    { key: "ai", label: "AI / ML" },
];

export const experience = [
    {
        role: "Architect",
        company: "Vanderlande",
        location: "Pune",
        period: "May 2023 – Present",
        current: true,
        color: "from-sky-500 to-cyan-400",
        icon: "🏗️",
        logo: "https://unavatar.io/vanderlande.com",
        highlights: [
            "Directed the design of scalable Spring Boot microservices and complex third-party API integrations.",
            "Defined the Azure cloud roadmap, delivering PoCs and implementing proactive cost-optimization frameworks.",
            "Architected a centralized logging and monitoring platform using the ELK stack and Spring Cloud across all deployed services.",
            "Championed IaC and CI/CD standards utilizing Terraform, Bamboo, and Bitbucket.",
        ],
    },
    {
        role: "Consultant / Technical Lead",
        company: "Sincrodigital",
        location: "Pune",
        period: "Feb 2021 – Apr 2023",
        current: false,
        color: "from-violet-500 to-purple-400",
        icon: "💡",
        logo: "https://unavatar.io/sincrodigital.com",
        highlights: [
            "Spearheaded the transition to a microservices architecture, reducing dependencies and improving application load times by 50%.",
            "Directed seamless on-premise to AWS cloud migrations (infrastructure and databases) utilizing lift-and-shift methodologies with minimal downtime.",
            "Led cross-functional engineering teams, enforcing technical standards through rigorous code reviews and mentorship.",
            "Translated client requirements into scalable technical solutions through direct consultation and data-driven insights.",
        ],
    },
    {
        role: "Senior Software Developer",
        company: "TomTom",
        location: "Pune",
        period: "Aug 2016 – Feb 2021",
        current: false,
        color: "from-emerald-500 to-teal-400",
        icon: "🗺️",
        logo: "https://unavatar.io/tomtom.com",
        highlights: [
            "Architected enterprise API security and SSO frameworks using Spring Security, OAuth, SAML, and Apigee.",
            "Engineered automated data pipelines for GPS probe data and POIs, driving an 80% increase in essential map corrections.",
            "Integrated NLP for issue categorization and Augmented Reality (Wikitude) for advanced place searches.",
            "Optimized core navigation algorithms dynamically based on real-time network availability.",
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
        logo: "https://unavatar.io/amdocs.com",
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
        logo: "https://unavatar.io/mindtree.com",
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
    { title: "Hackathon Winner", org: "TomTom", year: "2018", icon: "🏆", logo: "https://unavatar.io/tomtom.com" },
    { title: "Hackathon Runner-Up", org: "TomTom", year: "2019", icon: "🥈", logo: "https://unavatar.io/tomtom.com" },
    { title: "Promising Talent Award", org: "Amdocs", year: "2016", icon: "⭐", logo: "https://unavatar.io/amdocs.com" },
];

export const education = {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Walchand College of Engineering, Sangli",
    logo: "https://unavatar.io/walchandsangli.ac.in",
    period: "2008 – 2012",
};

export const languages = ["English", "Hindi", "Marathi"];

export const hobbies = [
    { label: "Reading Tech Blogs", icon: "📰" },
    { label: "Human History & Evolution", icon: "🏛️" },
    { label: "Space Research", icon: "🚀" },
    { label: "Physics Theories", icon: "⚛️" },
];

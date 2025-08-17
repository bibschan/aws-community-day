
export const SPEAKERS = [
    {
        id: 8,
        name: "Matt Biilmann",
        title: "CEO and Co-Founder",
        company: "Netlify",
        tag: "keynote",
        bio: "Mathias (Matt) Biilmann is the CEO and co-founder of Netlify, leading the fastest growing platform for modern web development. He introduced agent experience (AX) for the AI era and coined Jamstack, a movement he led that reshaped modern web development. A builder at heart, Matt pioneers web architecture, champions DX, and empowers developers to shape the future.",
        talk_title: "AX and Why It Matters",
        talk_summary:
            "AI agents are reshaping software development, but today’s infrastructure wasn’t built for them. For AI agents to truly be effective, we need to design our infrastructure with Agent Experience (AX) in mind. AX is about building the shortest path for an agent to go from user input to a URL in production. This requires primitives and APIs designed for LLMs and workflows that enable seamless developer-agent collaboration. This talk will offer a new perspective on AI-driven development, key architectural principles for supporting AI agents, and a glimpse into the not-so-far off future where AI isn't just a coding assistant but an active participant in software creation.",
        image: "/speakers/matt.jpg",
    },
    {
        id: 1,
        name: "Adetokunbo Ige",
        title: "Sr. DevOps Engineer",
        company: "Planview",
        tag: "featured",
        bio: "Adetokunbo Ige is a seasoned platform engineer and Certified ISO 22301 Lead Implementer in Business Continuity. With extensive expertise spanning software engineering, enterprise application management, server infrastructure, database administration, incident response, and cloud engineering, he brings a wealth of technical knowledge to the conference. Adetokunbo holds a B.Sc in Computer Science from Babcock University and an M.Sc in Business Information Technology from Middlesex University, where he graduated with distinction. His technical arsenal includes proficiency in SQL Server, Oracle, MySQL, Docker, Kubernetes, and numerous scripting languages.",
        talk_title:
            "Build and Deploy Dockerize Python Application to Azure Container Instances (ACI) using Azure DevOps",
        talk_summary:
            "If you're building Python apps in Docker and want to deploy them to Azure automatically, this session is for you. We’ll walk through how to use Azure DevOps to deploy a containerized Python application to Azure Container Instances (ACI) with no manual intervention. You’ll learn how to streamline your pipeline, avoid common pitfalls, and set up a repeatable, reliable deployment workflow—all using real-world examples.",
        image: "/speakers/adetokunbo-cropped.jpeg",
    },
    {
        id: 2,
        name: "Aiman Parvaiz",
        title: "Director of DevOps",
        company: "NimbusStack",
        tag: "speaker",
        bio: "Aiman Parvaiz brings over a decade of hands-on experience in DevOps and cloud infrastructure, primarily across the US & Canada. Having held leadership positions at prominent companies including Fliapagram/TikTok, SHIFT, and MNTN, Aiman has spearheaded cloud transformations, led high-performing DevOps teams, and implemented large-scale infrastructure projects with significant business impact. As the founder of NimbusStack, he now focuses on helping organizations streamline DevOps practices and optimize AWS infrastructure. His impressive portfolio includes over 50 successful DevOps projects that have helped companies save more than $2 million in cloud costs while reducing time to market by 35%.",
        talk_title:
            "Driving Cloud Cost Efficiency: Multi-Cloud Strategies and the Culture of Cost-Conscious Engineering",
        talk_summary:
            "Multi-cloud sounds great—until the bills roll in. The truth is, no amount of tooling can rein in cloud spend without the right culture behind it. In this talk, we’ll explore why building a culture of cost-awareness across engineering and leadership is the real key to multi-cloud success. You’ll learn how to align DevOps and FinOps, drive better decisions through shared financial accountability, and create an environment where smart cloud usage becomes second nature.",
        image: "/speakers/aiman.jpeg",
    },
    {
        id: 13,
        name: "Brian Clendenin",
        title: "Enterprise Sales - Strategic",
        company: "Datadog",
        tag: "speaker",
        bio: 'Widely recognized as a powerful speaker intertwining storytelling and expertise, Clendenin writes and speaks on the topics of leadership, cloud, observability, devops, AI, security, mobility, IT strategy, and digital transformation. Invests his time interviewing engaging thought leaders. "We are at one of the most exciting moments in history when it comes to innovation in IT driving innovation in business."',
        talk_title: "The Business Value of Observability in the Age of AI ",
        talk_summary:
            "This is where full-stack observability platforms like Datadog come into play. IT research firms, Gartner and Forrester, have similar viewpoints regarding the operational and financial benefits of standardizing on a single platform. Brian will share his insights into the key business drivers of why many organizations today are looking at full-stack observability platforms to improve their business agility and reduce risk in the age of AI. ",
        image: "/speakers/brian.jpg",
    },
    {
        id: 3,
        name: "Denis Astahov",
        title: "Solutions Architect",
        company: "OpsGuru",
        tag: "speaker",
        bio: "Denis Astahov serves as a Solutions Architect at OpsGuru and was recognized as an AWS Community Hero in 2021. He is the creator behind the ADV-IT YouTube channel, which boasts over 100,000 subscribers, where he shares valuable insights on Cloud and DevOps technologies to help professionals advance their careers in DevOps and Cloud Engineering. Denis holds an impressive collection of 15 cloud certifications, including 12 from AWS, demonstrating his deep expertise and commitment to the field.",
        talk_title: "How to become Cloud/DevOps Engineer from Zero",
        talk_summary:
            "Interested in a career in Cloud or DevOps but not sure where to start? In this session, Denis Astahov will break down a practical, step-by-step learning roadmap for going from zero experience to Cloud/DevOps Engineer. We’ll cover which topics to focus on, in what order, and how deep to go at each stage. Whether you’re switching careers or just starting out, you’ll leave with a clear path forward and the confidence to begin your journey.",
        image: "/speakers/denis.jpg",
    },
    {
        id: 4,
        name: "Ahmad Awais",
        title: "CEO",
        company: "Langbase",
        tag: "featured",
        bio: "Ahmad Awais is an award-winning open-source engineering leader, founder and CEO of Langbase. Creator of the first AI agent that can vibe code AI agents for you. NASA Mars Ingenuity Helicopter mission code-contributor. Angel investor. Ex-VP of Developer Relations, Google Developers Advisory Board founding member, Node.js Community Committee Outreach Lead, Business Governance Board Member Linux Foundation & OpenAPI Initiative, WordPress Core Developer, and previously VP of Engineering at WGA. He has authored various open-source software tools used by millions of developers worldwide, like his Shades of Purple code theme (4M Dev Users) or projects like the corona-cli (10+ Billion Requests).",
        talk_title:
            "Why the Best AI Agents Are Built Without Frameworks (Primitives over Frameworks)",
        talk_summary:
            "Cursor, CHAI, perplexity, v0, lovable, bolt — what do they all have in common? They weren’t built on AI frameworks—they're built using primitives optimized for speed, scale, and flexibility. LLMs are evolving fast—like, literally every week. New standards pop up (looking at you, MCP), and APIs change faster than you can keep track. Frameworks just can't move at this speed. In this talk, I'll challenge conventional engineering wisdom, sharing my real-world experience scaling thousands of AI agents to handle over 100 million monthly runs. You'll discover how using AI primitives can dramatically speed up iteration, provide bigger scale, and simplify maintenance. I'll share eight practical agent architectures—covering memory management, auto tool integration, and simple serverless deployment—to help you quickly build reliable and scalable AI agents. By the end of this session, you'll clearly see why we must rethink and rebuild our infrastructure and focus on AI-native primitives instead of heavy, bloated, and quickly outdated frameworks.",
        image: "/speakers/ahmad.jpg",
    },
    {
        id: 5,
        name: "Eric Johnson",
        title: "Principal Developer Advocate",
        company: "Amazon Web Services (AWS)",
        tag: "featured",
        bio: "Eric is a Developer Advocate at AWS, focusing on Serverless technologies. With a background in software development and architecture, he shares his knowledge through speaking engagements and educational initiatives. He combines his technical expertise with an engaging teaching style to help others understand complex concepts.",
        talk_title: "Taking GenAI from Paper to Production with Serverless",
        talk_summary:
            "Start your journey into the world of Serverless and GenAI with this foundational session. Through a real-world application example, discover why serverless is the ideal architecture for GenAI workloads, offering superior scalability and cost-effectiveness compared to traditional infrastructure approaches. This practical demonstration will lay the groundwork for understanding how modern AI applications can be built and deployed efficiently using serverless.",
        image: "/speakers/eric.png",
    },
    {
        id: 6,
        name: "Farzad Khandan",
        title: "CTO & Co-Founder",
        company: "Innovimia Technologies",
        tag: "speaker",
        bio: "Farzad Khandan is a futurist, AI/ML architect, and entrepreneur with deep expertise in artificial intelligence, cloud computing, and emerging technologies. Combining a background in software engineering with a Ph.D. in Futures Studies, he has successfully designed and delivered large-scale AI/ML solutions leveraging advanced machine learning, data engineering, and cloud architectures. Farzad has led high-performance teams and launched multiple startups, including Innovimia Technologies, where he develops AI-powered SaaS solutions. He is also the founder of the Future Human Foundation (Fuman.org), a nonprofit dedicated to advancing education in AI, space, and future technologies. Currently, he is developing Hadish Social Assistant, an AI-driven content automation app that empowers users to elevate their social media presence effortlessly.",
        talk_title: "Building your Startups in the Cloud? Dos and Don'ts",
        talk_summary:
            "Building a startup in the cloud opens up endless possibilities—but also a fair share of traps. In this session, we’ll walk through the real-world dos and don’ts of launching and scaling a cloud-native startup. You’ll get practical insights on cloud architecture, DevOps automation, cost management, and integrating AI/ML from day one. Whether you’re a founder, engineer, or just startup-curious, this talk will help you build smarter, move faster, and avoid the costly mistakes others have made.",
        image: "/speakers/farzad.jpeg",
    },
    {
        id: 17,
        name: "Gabriel Caldwell",
        title: "CTO",
        company: "Tsunami Solutions",
        tag: "speaker",
        bio: "Gabriel Caldwell has been a pivotal figure at Tsunami since his inception with the company in 2001. Taking on the mantle of Chief Technology Officer in 2009, he has adeptly shaped and steered Tsunami’s technology strategy, ensuring the products remains at the cutting edge of innovation. Gabriel's dedication lies in continuously developing and deploying new technologies, not just to enhance the company's offerings, but to genuinely empower customers and streamline operations. Beyond his technical prowess, he embodies a leadership style that fosters innovation and teamwork. Outside of his professional realm, Gabriel cherishes quality moments immersed in nature, be it hiking, camping or traveling the world. Together with his family, he is often embarking on adventures, feeding his passion for exploration and understanding.",
        talk_title: "Cloud, AI & the Rise of the Next Billion-Dollar Idea",
        talk_summary:
            "What separates startups that scale from those that stall? In this panel, top startup execs from Vancouver share how they're leveraging emerging AI and cloud technologies to build smarter, faster, and more defensible companies. We’ll dive into how early cloud architecture decisions shape growth trajectories, which AI tools are reshaping SaaS, and what it really takes to create an edge in today's hyper-competitive tech landscape.",
        image: "/speakers/gabriel.jpg",
    },
    {
        id: 18,
        name: "Herman Chandi",
        title: "Cofounder & COO",
        company: "UrbanLogiq",
        tag: "speaker",
        bio: "Herman Chandi is the co-founder and Chief Operating Officer of UrbanLogiq, a data analytics company helping cities across the US and Canada make smarter decisions with real-time insights and predictive analytics. Herman leads the implementation of data-driven solutions that address government challenges using machine learning and AI.",
        talk_title: "Cloud, AI & the Rise of the Next Billion-Dollar Idea",
        talk_summary:
            "What separates startups that scale from those that stall? In this panel, top startup execs from Vancouver share how they're leveraging emerging AI and cloud technologies to build smarter, faster, and more defensible companies. We’ll dive into how early cloud architecture decisions shape growth trajectories, which AI tools are reshaping SaaS, and what it really takes to create an edge in today's hyper-competitive tech landscape.",
        image: "/speakers/herman.jpg",
    },
    {
        id: 14,
        name: "Luca Maraschi",
        title: "Co-Founder & CEO",
        company: "Platformatic",
        tag: "speaker",
        bio: "Luca Maraschi has spent two decades at the frontier of real-time systems, cloud infrastructure, and developer experience. From scaling platforms at Telus Digital and NearForm to founding and exiting multiple startups, he’s built a career turning technical chaos into elegant solutions. Today, as CEO of Platformatic, he’s on a mission to reinvent how developers run backend systems. Luca believes the best technology should feel invisible — simple, fast, and built for real life. ",
        talk_title: "Scaling Node.js in Kubernetes: Metrics, Memory, and Mastery",
        talk_summary:
            "Running Node.js in Kubernetes isn’t a simple lift-and-shift — it demands a deep understanding of memory management, event loop behaviour, and production-grade observability. In this session, Luca Maraschi (CEO of Platformatic) and Matteo Collina (Node.js TSC Member and CTO) will dive into the critical metrics you must monitor, how Node.js behaves under Kubernetes orchestration, and the pitfalls that limit scalability. We’ll share hard-earned best practices — and unveil how Platformatic Watt redefines the cloud primitives needed to run Node.js workloads efficiently in modern environments. Stay tuned: we'll reveal one more thing that pushes the boundaries of what cloud primitives can be. ",
        image: "/speakers/Luca.png",
    },
    {
        id: 7,
        name: "Mark Gamble",
        title: "Director, Product and Solutions Marketing",
        company: "Couchbase",
        tag: "speaker",
        bio: "Mark is a passionate product marketer with a technical and solution consulting background and 20+ years of experience in enterprise and open source technology. He has launched several database and analytic solutions throughout his career, and has worked with customers across a wide variety of industries including Financial Services, Automotive, Gaming, Hospitality, High-Tech and Healthcare. With an expertise in analytics and AI, Mark loves all things data, and is an emphatic supporter of data-for-good initiatives. ",
        talk_title: "Cloud-to-edge AI and role of the database",
        talk_summary:
            "Edge AI is reshaping how we deliver intelligent, low-latency experiences—from mobile apps to IoT and embedded systems. But real-time AI at the edge demands more than just models—it requires a data architecture built for speed, scale, and autonomy. In this session, we’ll explore how Couchbase powers edge AI with a cloud-to-edge database, built-in vector search, and seamless sync between cloud and device. You’ll see how to deploy smarter, faster, and more resilient applications—right where your users are.",
        image: "/speakers/mark-cropped.jpg",
    },

    {
        id: 15,
        name: "Matteo Collina",
        title: "Co-Founder & CTO",
        company: "Platformatic",
        tag: "speaker",
        bio: "Matteo is co-founder & CTO at Platformatic. With over 15 years of software engineering experience, he's known to author the Fastify web framework, the fast logger Pino, and his contributions to Node.js. Matteo is a member of the Node.js Technical Steering Committee, and is an active Open Source author, with modules he maintains being downloaded over 12 billion times per year.",
        talk_title: "Scaling Node.js in Kubernetes: Metrics, Memory, and Mastery",
        talk_summary:
            "Running Node.js in Kubernetes isn’t a simple lift-and-shift — it demands a deep understanding of memory management, event loop behaviour, and production-grade observability. In this session, Luca Maraschi (CEO of Platformatic) and Matteo Collina (Node.js TSC Member and CTO) will dive into the critical metrics you must monitor, how Node.js behaves under Kubernetes orchestration, and the pitfalls that limit scalability. We’ll share hard-earned best practices — and unveil how Platformatic Watt redefines the cloud primitives needed to run Node.js workloads efficiently in modern environments. Stay tuned: we'll reveal one more thing that pushes the boundaries of what cloud primitives can be. ",
        image: "/speakers/Matteo.png",
    },
    {
        id: 9,
        name: "Morohito (Moro) Arakaki",
        title: "Business Development Engineer - Cloud",
        company: "Fortinet",
        tag: "speaker",
        bio: "Morohito Arakaki is a Business Development Engineer at Fortinet, specializing in cloud technologies. He brings a wealth of technical expertise and strategic insight to help clients adopt secure cloud solutions that drive business growth. With a strong background in both engineering and business development, Morohito collaborates with cross-functional teams to design tailored cloud strategies that meet the evolving needs of organizations. His work focuses on bridging the gap between technical innovation and business goals, ensuring seamless cloud adoption and optimized performance. Morohito is dedicated to enabling businesses to securely scale their operations in the cloud.",
        talk_title:
            "From Foundations to Expertise: Elevating Cloud Security with CNAPP",
        talk_summary:
            "Cloud misconfigurations, API exploits, and zero-day attacks are rising threats—even for seasoned teams. This session introduces CNAPP (Cloud-Native Application Protection Platform), a unified approach to securing modern cloud environments. We’ll explore how tools like FortiCNAPP and Lacework help detect hidden risks, protect workloads, and strengthen security posture. You’ll also learn how CSPM, CWPP, and CIEM work together to defend against common cloud pitfalls. Whether you're just starting or scaling in the cloud, this session will give you practical strategies to stay secure at every stage.",
        image: "",
    },
    {
        id: 10,
        name: "Niti Jain",
        title: "Lead Software Engineer",
        company: "Salesforce",
        tag: "speaker",
        bio: "Niti Jain is a Lead Software Engineer and Scrum Leader at Salesforce with seven years of industry experience. At Salesforce, she specializes in the Identity space, focusing on authorization and authentication at scale. Her technical interests encompass distributed systems, identity, and machine learning. A trailblazing tech leader, Niti combines deep technical expertise with a passionate commitment to community building. She serves on the advisory board for the University of Wisconsin, Madison, and leads the Vancouver hub for AnitaB.org, demonstrating her dedication to advancing diversity in technology.",
        talk_title: "Scaling Microservices: Mastering Zero Downtime Data Migration",
        talk_summary:
            "Data and traffic migration is a critical yet often overlooked challenge in modern distributed systems — one that can make or break an organization’s technological resilience. In an era where every minute of downtime translates to potential revenue loss, security vulnerabilities, and eroded user trust, the ability to seamlessly transition both data and live service traffic without interruption has become a strategic imperative. This presentation unveils the intricate dance of migrating complex infrastructures — a process that demands surgical precision, advanced architectural patterns, and a deep understanding of distributed systems dynamics. Attendees will explore real-world, phased migration strategies that transform what could be a high-risk, catastrophic transition into a controlled, methodical evolution. Through live migration scenarios, cutting-edge traffic shaping techniques, and actionable implementation insights, this session offers a rare, in-depth look at how top engineering teams execute zero-downtime migrations — balancing data consistency, operational safety, and user trust. For anyone managing mission-critical infrastructure, this session provides a blueprint for scaling and modernizing systems without missing a heartbeat.",
        image: "/speakers/niti.png",
    },
    {
        id: 19,
        name: "Noorain Panjwani",
        title: "Founder",
        company: "Fluidcast",
        tag: "speaker",
        bio: "Noorain is a die hard developer fused with the entrepreneurial spirit. As cloud evangelist at heart, I love anything to do with serverlessless and GenAI.",
        talk_title: "Cloud, AI & the Rise of the Next Billion-Dollar Idea",
        talk_summary:
            "What separates startups that scale from those that stall? In this panel, top startup execs from Vancouver share how they're leveraging emerging AI and cloud technologies to build smarter, faster, and more defensible companies. We’ll dive into how early cloud architecture decisions shape growth trajectories, which AI tools are reshaping SaaS, and what it really takes to create an edge in today's hyper-competitive tech landscape.",
        image: "/speakers/noorain.jpg",
    },
    {
        id: 12,
        name: "Parice Brandies",
        title: "Lead Developer ",
        company: "RONIN",
        tag: "speaker",
        bio: "Dr Parice Brandies is the Lead Developer at RONIN. She has a background in research and completed her PhD at the University of Sydney in the field of genomics and bioinformatics. Parice is passionate about the opportunities cloud can bring to all fields and her mission is to help empower institutions around the globe to confidently harness the extraordinary power of the cloud with RONIN.",
        talk_title: "RONIN: Secure, Self-Service Cloud Without the Chaos",
        talk_summary:
            "In the fast-paced world of commercial industries, innovation can’t wait for IT bottlenecks or spiraling cloud costs. RONIN offers a streamlined platform that grants teams secure, self-service access to essential cloud computing resources, all while maintaining cost control and governance. Join us to discover how organizations are accelerating their digital transformation by enabling their teams to harness the power of the cloud—securely, efficiently, and without the usual complexities. ",
        image: "/speakers/parice.jpg",
    },
    {
        id: 11,
        name: "Sarang Gupta",
        title: "Staff Data Scientist",
        company: "Asana in Vancouver, Canada",
        tag: "speaker",
        bio: "Sarang Gupta is a Staff Data Scientist at Asana in Vancouver, Canada, where he serves as a founding data scientist on the Asana's AI team. With over 8 years of experience in machine learning and data science, he has made contributions to enterprise-grade ML applications and academic research. Sarang holds an MS in Data Science from Columbia University and a dual degree (BEng in Industrial Engineering and BBA in Business Management) from the Hong Kong University of Science and Technology (HKUST), where he graduated first in his class. His professional journey includes experience at Goldman Sachs, Hong Kong and research contributions at the Brown Institute for Media Innovation (a collaboration between Stanford and Columbia University).",
        talk_title: "Scaling Microservices: Mastering Zero Downtime Data Migration",
        talk_summary:
            "Data and traffic migration is a critical yet often overlooked challenge in modern distributed systems — one that can make or break an organization’s technological resilience. In an era where every minute of downtime translates to potential revenue loss, security vulnerabilities, and eroded user trust, the ability to seamlessly transition both data and live service traffic without interruption has become a strategic imperative. This presentation unveils the intricate dance of migrating complex infrastructures — a process that demands surgical precision, advanced architectural patterns, and a deep understanding of distributed systems dynamics. Attendees will explore real-world, phased migration strategies that transform what could be a high-risk, catastrophic transition into a controlled, methodical evolution. Through live migration scenarios, cutting-edge traffic shaping techniques, and actionable implementation insights, this session offers a rare, in-depth look at how top engineering teams execute zero-downtime migrations — balancing data consistency, operational safety, and user trust. For anyone managing mission-critical infrastructure, this session provides a blueprint for scaling and modernizing systems without missing a heartbeat.",
        image: "/speakers/Sarang.png",
    },
    {
        id: 16,
        name: "Warren Lyne",
        title: "Business Development Manager - Cloud",
        company: "Fortinet",
        tag: "speaker",
        bio: "Warren Lyne is a Business Development Manager at Fortinet with over 25 years in technology and 15 years in cloud, specializing in driving secure, cloud-based solutions for enterprise customers. A Computer Science graduate from Queen's University, Warren has contributed to several startups—one acquired in 2013 for its cloud-native SaaS design built entirely on AWS. He spent eight years at AWS as a Sales Leader, helping grow the enterprise business across Western Canada and guiding organizations through cloud adoption and digital transformation. At Fortinet, Warren focuses on enabling customers to securely manage their IT environments across multi-cloud, OT, and virtualized infrastructure, accelerating their shift from on-prem to cloud-native operations.",
        talk_title:
            "From Foundations to Expertise: Elevating Cloud Security with CNAPP",
        talk_summary:
            "Cloud misconfigurations, API exploits, and zero-day attacks are rising threats—even for seasoned teams. This session introduces CNAPP (Cloud-Native Application Protection Platform), a unified approach to securing modern cloud environments. We'll explore how tools like FortiCNAPP and Lacework help detect hidden risks, protect workloads, and strengthen security posture. You'll also learn how CSPM, CWPP, and CIEM work together to defend against common cloud pitfalls. Whether you're just starting or scaling in the cloud, this session will give you practical strategies to stay secure at every stage.",
        image: "/speakers/Warren.jpg",
    },
];

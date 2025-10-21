
export const SPEAKERS = [
    {
        id: 1,
        name: "Usman Khalid",
        title: "General Manager",
        company: "Amazon Web Services (AWS)",
        tag: "keynote",
        bio: "Usman Khalid is the General Manager at Amazon Web Services (AWS), where he leads the Serverless organization, overseeing key services including AWS Lambda, Elastic Beanstalk, Amplify, EventBridge, and Step Functions. His team’s mission is to empower developers to bring their best ideas to market faster—through scalable, secure, and sustainable cloud technologies. With a strong background in distributed systems and cloud computing, Usman’s leadership continues to shape how modern applications are built and operated using Serverless architecture.",
        talk_title: "",
        talk_summary: "",
        image: "/speakers/usmanKhalid.jpeg",
        link: "https://www.linkedin.com/in/ahmedusmankhalid/"
    },
    {
        id: 2,
        name: "Amit Bajaj",
        title: "Solutions Architect",
        company: "CEO ecoVoiceSystems",
        tag: "featured",
        bio: "A tech enthusiast with 20 years of experience making technology smarter, greener, and more cost-effective. As a Solutions Architect, I've guided customers through cloud migrations, AI adoption, and data-driven transformation. I've held roles from Sales Engineer to Chief Architect at companies like AWS and IBM, gaining a front-row seat to cloud innovation and enterprise transformation. Based in Metro Vancouver, I'm also a proud swim parent and nature lover.",
        talk_title: "From Silicon to Superintelligence: An Immersive Journey into Multimodal Gen AI",
        talk_summary: "Generative AI’s power stems from innovation across the entire tech stack — from custom silicon and cloud infrastructure to advanced multimodal models handling text, images, and audio.  This session unveils how AWS leads at every layer: from Trainium and Inferentia chips, to scalable storage with S3, high-performance training on SageMaker, and model deployment via Bedrock.  Through real-world examples and demos, you’ll learn how to build intelligent, multimodal AI systems and accelerate innovation from silicon to superintelligence. Whether you’re an architect, data scientist, or AI enthusiast, gain a clear roadmap to harness AWS’s AI ecosystem for next-gen solutions.",
        image: "/speakers/amitBajaj.png",
        link: "https://www.linkedin.com/in/amit-bajaj-sa/"
    },
    {
        id: 3,
        name: "Denis Astahov",
        title: "Solutions Architect",
        company: "OpsGuru",
        tag: "featured",
        bio: "AWS Community Hero since 2021, owner of YouTube channel ADV-IT with more than 136,000 subscribers and more 500 video tutorials about AWS, Cloud, DevOps and other IT topics. Working as Solutions Architect at OpsGuru Canada since 2019.",
        talk_title: "End to End Secrets Utilization on AWS with Terraform",
        talk_summary: "Managing secrets securely is critical for any DevOps or cloud infrastructure workflow. This presentation provides a practical guide on how to safely store secrets in Git repositories and use them in AWS via Terraform—without compromising security. We will explore best practices for encrypting and managing secrets. Attendees will learn how to encrypt secrets, deploy them to AWS Secrets Manager and SSM Parameter Store, and retrieve secret values in various AWS services.",
        image: "/speakers/denisAstahov.jpg",
        link: "https://www.linkedin.com/in/denis-astahov/"
    },
        {
        id: 4,
        name: "Humberto Gonçalves",
        title: "AI Developer",
        company: "Styx Intelligence",
        tag: "featured",
        bio: "Humberto Gonçalves is a versatile technology professional with nearly a decade of experience spanning industrial engineering, finance, payments, e-commerce, and cybersecurity. With over seven years in software engineering and product management, he has built and scaled SaaS and digital platforms that deliver measurable impact, including leading the development of AB-InBev's Global Pricing Engine, an ecosystem of microservices and RESTful APIs powering B2B and DTC e-commerce across 20+ countries for over 3 million users and 10 million monthly orders. Now focused on the intersection of AI and cybersecurity, Humberto works as an AI Developer at Styx Intelligence in Vancouver and is pursuing a Master's in Cybersecurity. His research explores Explainable AI (XAI) techniques to make machine-learning-based detections more transparent and actionable, applying methods such as SHAP and LIME within AWS GuardDuty workflows to enhance trust in automated threat responses, while also studying Transformer-based models for disinformation detection.",
        talk_title: "Beyond the Black Box: Explainable AI for AWS GuardDuty",
        talk_summary: "This presentation explores how Explainable AI (XAI) can enhance AWS GuardDuty by making its threat alerts more transparent and trustworthy. The study, submitted to the Springer Nature Journal of Supercomputing, integrated SHAP and LIME into a GuardDuty workflow and tested them with security analysts. Results showed that XAI-supported alerts improved classification accuracy, analyst confidence, and reasoning quality. LIME offered clear, per-alert explanations, while SHAP provided broader, model-level insights. The talk demonstrates how applying XAI to GuardDuty can reduce false positives, boost trust, and accelerate incident response, transforming it from a simple detection tool into a reliable decision-support system for cloud security.",
        image: "/speakers/humbertoGonçalves.jpeg",
        link: "https://www.linkedin.com/in/humbertos-goncalves/"
    },
    {
        id: 5,
        name: "Laura Salinas",
        title: "Developer Advocate",
        company: "AWS",
        tag: "featured",
        bio: "Laura Salinas is a computer engineer turned solutions architect, now working as a developer advocate at AWS. With a strong background in cloud computing and AI/ML technologies, she focuses on helping developers build scalable, intelligent applications using AWS services and open-source frameworks. Fluent in English and Spanish, Laura combines her technical expertise with a passion for diversity in tech. Her mission is to inspire and guide the next generation of diverse tech professionals while advancing cloud technology solutions.",
        talk_title: "Getting Started with Strands Agents SDK",
        talk_summary: "Learn how to create, deploy, and manage intelligent agents using the new Strands Agents SDK. In this session we'll review agents, introduce the SDK and demonstrate Python examples for agent development.",
        image: "/speakers/lauraSalinas.jpg",
        link: "https://www.linkedin.com/in/laums/"
    },
    {
        id: 6,
        name: "Nurdan Almazbekov",
        title: "Security Engineer",
        company: "Yelp",
        tag: "featured",
        bio: "Nurdan has been working as security engineer at Yelp for the past four years in infrastructure related areas. Focusing on data security related projects from encryption at rest, deleting old data across various data stores, such as S3, MySQL and Redshift, and most recently expiring unused objects in S3.",
        talk_title: "S3 server access logs at scale",
        talk_summary: "S3 buckets are one the most used storage services provided by AWS. Uploaded files are accessed as keys, or objects in AWS lingua. You can enable S3 server access logging on a bucket and start delivering logs to another destination bucket. However, the sheer volume of logs make it cost prohibitive because they come in plaintext format. Wouldn't be wonderful to be able to start analyzing access patterns to find unused objects or track operations performed by leaked credentials? In this presentation, I will go over an automated process we have developed to convert day's worth of S3 server access logs logs into parquet format reducing storage footprint by around 90%. We will delve deep into technical details in order to setup infrastructure to query data and convert objects using Athena queries.",
        image: "/speakers/NurdanAlmazbekov.jpeg",
        link: "https://www.linkedin.com/in/nurdan-almazbekov/"
    },

];

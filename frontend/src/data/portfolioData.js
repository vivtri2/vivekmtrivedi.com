import portfolioImg01 from '../asset/projects/projectImg-01.JPG';
import portfolioImg02 from '../asset/projects/projectImg-02.JPG';
import portfolioImg03 from '../asset/projects/projectImg-03.JPG';
import portfolioImg04 from '../asset/projects/projectImg-04.JPG';
import portfolioImg05 from '../asset/projects/projectImg-05.JPG';
import portfolioImg06 from '../asset/projects/projectImg-06.JPG';
import portfolioImg07 from '../asset/projects/projectImg-07.JPG';









const portfolioData = [
    {
        id: '01',
        imgUrl: portfolioImg05,
        title: 'Report Analyst Debt Collection',
        description: 'Developed an AI/ML-powered asset recovery dashboard to predict collection success rates and segment account tiers based on recovery potential using IBM SPSS and Scikit-learn. Integrated the platform with Amazon S3 for scalable storage and visualized key business metrics—like recovery rates and average resolution time—using Plotly Dash with predictive insights for faster financial decision-making.',
        tech: ["Python", "IBM SPSS", "Plotly Dash", "Pandas", "Scikit-learn"],
        siteUrl: '#',
    },

    {
        id: '02',
        imgUrl: portfolioImg02,
        title: 'Pharmaceutical Consulting Data Engineer Role',
        description: 'Engineered scalable ETL pipelines for HL7-compliant data transfers using Scala, PySpark, and Spark SQL in Databricks, supporting both batch and near real-time ingestion. Leveraged Amazon S3 for storage and AWS Glue for metadata management to drive downstream reporting. This solution streamlined pharmaceutical client operations by enabling reliable analytics, compliance tracking, and time-sensitive insights.',
        tech: ["HL7", "HIPAA", "Databricks", "Scala", "Firebase", "Amazon S3"],
        siteUrl: '#',
    },

    {
        id: '03',
        imgUrl: portfolioImg04,
        title: 'Trailer Analytics',
        description: 'Built a trailer analytics platform using Databricks and Spark SQL to process fleet telemetry and booking data. ETL pipelines were orchestrated with AWS Glue, transforming raw GPS and service logs into structured datasets stored in Amazon S3. The resulting insights—fuel usage, utilization, and hitch fee distribution—helped streamline trailer operations and reduce idle time across regions.',
        tech: ["Amazon S3", "Databricks", "Spark SQL", "AWS Glue"],
        siteUrl: '#',
    },

    {
        id: '04',
        imgUrl: portfolioImg03,
        title: 'Pharmaceutical Client Consulting Example',
        description: 'Built a real-time pharmaceutical data pipeline using Databricks and Spark SQL to ingest and clean prescription records, flagging invalid addresses via SmartyStreets. The data was processed and stored in Amazon S3, then routed through SNS/SQS to feed a custom analytics dashboard for forecasting and regulatory reporting.',
        tech: ["Mainsail Reporting Platform", "AWS SQS", "SmartyStreets", "PySpark", "Databricks"],
        siteUrl: 'https://beghouconsulting.com/technology/mainsail-reporting-platform/',
    },

    {
        id: '05',
        imgUrl: portfolioImg06,
        title: 'Vendor Services Marketing Campaign Analytics Dashboard',
        description: 'Built a real-time streaming analytics system for ad performance using Spark Structured Streaming and PySpark on Databricks, ingesting and transforming high-volume clickstream data. Cleaned up datasets were stored in Amazon S3 and queried in Snowflake for long-term reporting, with visual insights delivered through QuickSight dashboards. This pipeline enabled live tracking of impressions, clicks, and conversions, empowering marketing teams to optimize campaigns in near real-time.',
        tech: ["Amazon S3", "PySpark", "QuickSight", "Spark Structured Streaming", "Snowflake", "Databricks"],
        siteUrl: '#',
    },

    {
        id: '06',
        imgUrl: portfolioImg07,
        title: 'Frontend-to-Backend Migration for Statewide Health Insights',
        description: 'Migrated key frontend logic to backend services for the Virginia Department of Behavioral Health and Developmental Services, using React and TypeScript for the UI and GraphQL APIs on a Dockerized backend. The system was secured via Cloudflare and deployed with nHost, improving data integrity and responsiveness for evidence-based care analytics. This work enabled scalable integration with internal tools and enhanced developer collaboration through Git-based workflows.',
        tech: ["React", "GraphQL", "Cloudflare", "Docker", "nHost", "GitHub", "Retool", "TypeScript"], 
        siteUrl: 'https://www.cep-va.org/',
    },
    {
        id: '07',
        imgUrl: portfolioImg01,
        title: 'KosherstandZ',
        description: 'Built and customized the Kosherstandz site using WordPress, integrating PHP and various plugins for performance and PoLP security. Designed to promote vendor locations and events, the site includes SEO optimization and branded styling.',
        tech: ["Hosting", "PHP", "WordPress", "HTML/CSS", "MySQL", "Yoast SEO"],
        siteUrl: 'https://kosherstandz.com/',
    },

    // {
    //     id: '08',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '09',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '10',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '11',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '11',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '11',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '11',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '11',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '11',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '11',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '11',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '11',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },


]

export default portfolioData;
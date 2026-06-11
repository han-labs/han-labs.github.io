export type BlogSection = {
  heading: string;
  content: string;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  tag: string;
  readingTime: string;
  intro: string;
  sections: BlogSection[];
  whatILearned: string;
  link: string;
};

export const posts: BlogPost[] = [
  {
    title: 'How I Deployed Online Academy with Docker, Nginx, and AWS EC2',
    excerpt: 'A short case study about containerizing and deploying a full-stack web application.',
    tag: 'Deployment',
    readingTime: '5 min read',
    intro: 'To demonstrate backend deployment readiness, I containerized the Online Academy platform and set up a reverse proxy on an AWS EC2 instance. This article breaks down the step-by-step setup.',
    sections: [
      {
        heading: '1. Containerizing Node.js and PostgreSQL',
        content: 'I wrote a multi-stage Dockerfile for the Express.js API to keep production images slim. Using Docker Compose locally, I linked the API service with a PostgreSQL database, ensuring environment variables managed database credentials securely and that network isolation kept the database private.',
      },
      {
        heading: '2. Setting Up Nginx as a Reverse Proxy',
        content: 'On the AWS EC2 instance, I configured Nginx to listen on port 80 and forward client requests to the Node.js container running on port 5000. Nginx handles client headers, cushions the application server, and provides a clean entry point for SSL configuration.',
      },
      {
        heading: '3. Automating with Basic CI/CD',
        content: 'To streamline deployments, I configured a simple GitHub Actions workflow. On every push to the main branch, the runner tests the database connection, builds the Docker image, pushes it to Docker Hub, and pulls the fresh image on the EC2 host.',
      },
    ],
    whatILearned: 'I learned how containerization bridges the gap between development and production, how Nginx acts as a security and performance shield, and how to debug database connection issues in isolated docker networks.',
    link: '#online-academy-deployment',
  },
  {
    title: 'Building PeerGrade Hub with Spring Boot and PostgreSQL',
    excerpt: 'Development notes from building a peer review assessment backend.',
    tag: 'Backend',
    readingTime: '4 min read',
    intro: 'PeerGrade Hub is a peer review assessment backend built with Java and Spring Boot. In this post, I detail how I structured the application foundation and designed the relational database schema.',
    sections: [
      {
        heading: '1. Layered Architecture',
        content: 'I structured the project using standard controller-service-repository layers. This separation of concerns ensures database queries remain isolated from business logic and REST interfaces, facilitating clean testing and easier refactoring.',
      },
      {
        heading: '2. Schema Design and Versioning',
        content: 'I designed a PostgreSQL database schema to link courses, users, and review submissions. I integrated Flyway to handle schema migrations, ensuring local developments and production setups evolve consistently without manual database execution scripts.',
      },
      {
        heading: '3. Spring Data JPA for Clean Queries',
        content: 'Leveraging Spring Data JPA, I wrote clean repository interfaces. For complex relational queries (like calculating average review scores), I utilized custom native queries to optimize data retrieval speeds.',
      },
    ],
    whatILearned: 'I solidified my understanding of Java OOP design, database relational integrity using foreign keys, schema version control with Flyway, and SQL query optimization using JPA projections.',
    link: '#peergrade-spring-boot',
  },
  {
    title: 'What I Learned About Authentication and RBAC',
    excerpt: 'Notes on designing login, authorization, and role-based access control.',
    tag: 'Security',
    readingTime: '4 min read',
    intro: 'Securing backend APIs is critical. In this article, I write about implementing JSON Web Tokens (JWT) and Role-Based Access Control (RBAC) for managing permissions in my e-learning project.',
    sections: [
      {
        heading: '1. Stateless Authentication with JWT',
        content: 'I implemented a JWT-based login system. When a user authenticates, the server signs a payload containing the userId and role, returning a short-lived token to the client. This token is verified via middleware on subsequent requests.',
      },
      {
        heading: '2. Role-Based Access Control (RBAC)',
        content: 'To protect sensitive endpoints (like course creation), I built custom middleware that reads the user role embedded in the decoded token. Only users with the "instructor" or "admin" roles can access these specific routes.',
      },
      {
        heading: '3. Password Hashing and Security Practices',
        content: 'I used bcrypt to hash passwords with a salt factor of 10 before saving them to the database. I also ensured headers were protected using helmet.js to shield the express app against common security leaks.',
      },
    ],
    whatILearned: 'I learned how stateless authentication improves API scalability, how to write robust middleware in Express.js, and the importance of secure password management practices in user databases.',
    link: '#auth-rbac',
  },
];

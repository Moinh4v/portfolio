/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Moinuddin T A",
  title: "Hi all, I'm Moinuddin 👋",
  subTitle: emoji(
    "🚀 A passionate DevSecOps Engineer and Cloud Security Specialist with hands-on experience in AWS Infrastructure, Secure CI/CD Pipelines, Kubernetes, Docker, Serverless Applications, and Application Security. I love automating deployments, securing cloud environments, and optimizing infrastructure at scale."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Moinh4v",
  linkedin: "https://www.linkedin.com/in/moinuddin-devsecops/",
  gmail: "mointa97@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "DEVSECOPS ENGINEER WHO BUILDS, AUTOMATES AND SECURES CLOUD INFRASTRUCTURE ☁️🔒",
  skills: [
    emoji("⚡ Design and automate secure AWS cloud infrastructures and CI/CD pipelines"),
    emoji("⚡ Manage containerized applications using Docker, Nomad, and Kubernetes"),
    emoji("⚡ Secure applications and APIs through penetration testing and automated security tools (Snyk, Jit, Vanta)"),
    emoji("⚡ Implement API Gateways (KrakenD) and real-time monitoring using Grafana, Loki, OpenSearch"),
    emoji("⚡ Automate infrastructure with Terraform and manage serverless apps (AWS Lambda, OpenFaaS)")
  ],
  softwareSkills: [
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Terraform", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Grafana", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "Jenkins", fontAwesomeClassname: "fas fa-tools" },
    { skillName: "GitHub Actions", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "ReactJS", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Annamalai University",
      logo: require("./assets/images/annamalai.png"), // Replace with your university logo if possible
      subHeader: "Bachelor of Computer Applications (BCA)",
      duration: "2016 – 2019",
      desc: "Focused on Software Development, Networking and Security Fundamentals.",
      descBullets: [
        "Graduated with strong foundation in computer applications",
        "Developed early interest in cybersecurity and DevOps practices"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Cloud & DevOps", progressPercentage: "90%" },
    { Stack: "Security & Compliance Automation", progressPercentage: "80%" },
    { Stack: "Serverless & Containerization", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Software Engineer",
      company: "VUME Interactive Pvt Ltd",
      companylogo: require("./assets/images/VUME-interactive.webp"), // Put your company logo
      date: "Oct 2023 – Present",
      desc: "Managing multi-environment deployments with Nomad & Fabio, automating NGINX ingress, securing cloud deployments, and optimizing CI/CD pipelines with GitHub Actions."
    },
    {
      role: "Technical Lead",
      company: "Wipro Technologies",
      companylogo: require("./assets/images/wipro-logo.png"),
      date: "July 2022 – March 2023",
      desc: "Led AWS cloud management, automated Kubernetes deployments with Jenkins, and migrated monolithic Ruby on Rails applications to microservices."
    },
    {
      role: "Software Security Engineer",
      company: "Succeed Technologies Pvt Ltd",
      companylogo: require("./assets/images/succeed.png"),
      date: "Sept 2019 – June 2022",
      desc: "Architected secure web services, optimized large databases, and ensured seamless production migrations with zero data loss."
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME IMPACTFUL PROJECTS I CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/krakend.webp"),
      projectName: "KrakenD API Gateway Management",
      projectDesc: "Designed, deployed, and secured internal API gateway routes using KrakenD based on application and developer needs.",
      footerLink: []
    },
    {
      image: require("./assets/images/nomad.webp"),
      projectName: "Automated Nomad Deployments",
      projectDesc: "Built Nomad job orchestrations using nomad-packs for production and lower environments, serving millions of concurrent users."
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Achievements, Certifications, and Continuous Learning Journey",
  achievementsCards: [
    {
      title: "Certified Ethical Hacker (CEH)",
      subtitle: "Completed CEH from EC-Council in 2017, strengthening core penetration testing skills.",
      image: require("./assets/images/cehLogo.jpg"),
      imageAlt: "CEH Certification",
      footerLink: []
    },
    {
      title: "Kubernetes Beginner Certification",
      subtitle: "Completed Kubernetes beginner training from KodeKloud, gaining foundational cluster orchestration skills.",
      image: require("./assets/images/kubernetesLogo.png"),
      imageAlt: "Kubernetes Certification",
      footerLink: []
    },
    {
      title: "Python Shell Scripting",
      subtitle: "Certified in Python Shell Scripting by Prompt InfoTech.",
      image: require("./assets/images/pythonLogo.jpeg"),
      imageAlt: "Python Scripting"
    }
  ],
  display: true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

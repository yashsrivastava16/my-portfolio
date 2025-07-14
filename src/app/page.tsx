"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Menu,
  X,
  Code,
  Server,
  Cog,
  Brain,
  CheckCircle,
  GraduationCap,
} from "lucide-react";

// Client Components
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    // Set initial scroll position
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isMounted && isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            YS
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Client Component for smooth scrolling
const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    if (isMounted) {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [isMounted]);

  return <>{children}</>;
};

// Static Components (can be server components)
const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className={`absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl ${
            isMounted ? "animate-pulse" : ""
          }`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl ${
            isMounted ? "animate-pulse delay-1000" : ""
          }`}
        ></div>
      </div>

      <div className="text-center text-white z-10 px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Yash Srivastava
            </span>
          </h1>
          <p className="text-lg mb-12 opacity-75 max-w-2xl mx-auto">
            Passionate about building performant, scalable, and accessible web
            applications with modern frontend technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 hover:text-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center gap-2">
                View My Work
                <ExternalLink size={20} />
              </span>
            </a>
            <a
              href="https://drive.google.com/file/d/1SvwYHPc3Iu-MWWyx3WSxL-OKJmEAX7WU/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center gap-2">
                Download Resume
                <ExternalLink size={20} />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${
          isMounted ? "animate-bounce" : ""
        }`}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div
            className={`w-1 h-3 bg-white rounded-full mt-2 ${
              isMounted ? "animate-pulse" : ""
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const stats = [
    { value: "3+", label: "Years Frontend Experience" },
    { value: "50+", label: "UI Components Built" },
    { value: "4+", label: "Owened Module" },
    { value: "10+", label: "Developers Mentored" },
  ];

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:yashsrivastavaa16@gmail.com",
      color: "text-red-500",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yash-srivastava-8634181a0/",
      color: "text-blue-600",
    },
    {
      icon: Github,
      href: "https://github.com/yashsrivastava16",
      color: "text-gray-800",
    },
    { icon: Phone, href: "tel:+919026482050", color: "text-green-500" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Passionate Frontend Developer with expertise in modern UI frameworks
            and a strong focus on creating exceptional user experiences.
            Specializing in building performant, accessible, and visually
            appealing web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-80 h-80 mx-auto rounded-2xl flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-300">
              <Code size={120} className="text-white" />
            </div>
            <div className="absolute -top-4 -right-4 bg-yellow-400 w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🚀</span>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Frontend Developer at Deloitte
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Currently leading frontend development efforts and spearheading
              the transition to modern component-based architecture. With
              experience in UI/UX optimization and implementing innovative
              frontend solutions, I&apos;ve contributed to improving application
              performance by 40% and enhancing team productivity through
              effective mentoring.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className={`${link.color} hover:opacity-75 transition-opacity p-3 bg-gray-50 rounded-full hover:bg-gray-100`}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Core",
      icon: Code,
      skills: "Angular, Next.js, React.js, TypeScript, JavaScript (ES6+)",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "UI/UX",
      icon: Server,
      skills: "Figma, Tailwind CSS, Material-UI, Responsive Design",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Frontend Tools",
      icon: Cog,
      skills: "Webpack, Syncfusion , Git",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "AI & ML",
      icon: Brain,
      skills: "RAG, LangChain, OpenAI, Google Generative AI",
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}
                >
                  <IconComponent size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {category.skills}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      title: "DC Associate Engineer",
      company: "Deloitte Consulting India",
      period: "Jun 2024 - Present",
      color: "from-blue-500 to-purple-600",
      achievements: [
        "Led frontend development of enterprise applications using Angular and React.js",
        "Implemented modern component architecture, improving code reusability by 60%",
        "Optimized application performance, achieving 90+ Lighthouse scores",
        "Mentored 4+ junior developers in frontend best practices and modern JavaScript",
      ],
    },
    {
      title: "DC Associate Analyst",
      company: "Deloitte Consulting India",
      period: "Jan 2022 - May 2024",
      color: "from-purple-500 to-pink-600",
      achievements: [
        "Developed responsive and accessible UI components using modern CSS frameworks",
        "Reduced bundle size by 40% through code splitting and lazy loading",
        "Implemented automated testing using Jest and React Testing Library",
        "Collaborated with UX designers to implement pixel-perfect interfaces",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row gap-8 items-start"
            >
              <div className="lg:w-1/3">
                <div
                  className={`bg-gradient-to-r ${exp.color} text-white p-8 rounded-2xl shadow-lg`}
                >
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="opacity-90 text-lg font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm opacity-75 bg-white/20 inline-block px-3 py-1 rounded-full">
                    {exp.period}
                  </p>
                </div>
              </div>

              <div className="lg:w-2/3">
                <ul className="space-y-4">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <CheckCircle
                        className="text-blue-500 mt-1 mr-4 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-gray-600 text-lg leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Jardin Secret",
      description:
        "Performed UI/UX design and frontend development of a luxury perfume e-commerce platform for a UAE client. Created an immersive shopping experience with modern design principles, responsive layouts, and optimized performance.",
      icon: "🌸",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Redux",
        "UI/UX Design",
        "Personal Project",
      ],
      color: "from-pink-400 to-rose-600",
      url: "https://www.jardins-secret.com/",
    },
    {
      title: "Dr. Riya Srivastava Portfolio",
      description:
        "Developed a personal portfolio website for Dr. Riya Srivastava to showcase her professional work, achievements, and publications. The website features an appointment booking system, allowing users to easily schedule consultations online.",
      icon: "🩺",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Appointment Booking",
        "Portfolio Website",
      ],
      color: "from-teal-400 to-blue-600",
      url: "https://healthcare-eight-bice.vercel.app/",
    },
    {
      title: "OperateEdge",
      description:
        "Developed key modules for Deloitte's central CTO operations platform, enabling business transformation through intelligent resource allocation and training management. Implemented real-time analytics dashboards and automated workflow systems to optimize operational efficiency across global teams.",
      icon: "⚙️",
      technologies: ["Angular", "TypeScript", "RxJS", "Enterprise Tool"],
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "AONA",
      description:
        "Built an organizational analytics platform that enables businesses to compare and analyze organizational structures. Implemented interactive org charts, comparative analysis features, and data visualization tools to help clients optimize their organizational design and resource distribution.",
      icon: "🏢",
      technologies: ["React.js", "Node.js", "MongoDB", "Enterprise Tool"],
      color: "from-green-400 to-green-600",
    },
    {
      title: "HcSurveys",
      description:
        "Developed an internal survey management platform for Deloitte, enabling efficient collection and analysis of employee feedback. Implemented secure authentication, real-time data visualization, and automated reporting features to streamline the survey process across the organization.",
      icon: "🐳",
      technologies: ["React.js", "Docker", "Figma", "Internal Tool"],
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`bg-gradient-to-r ${project.color} h-48 flex items-center justify-center`}
              >
                <span className="text-6xl">{project.icon}</span>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        tech === "Personal Project"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 transition-colors"
                  >
                    View Details
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "Lovely Professional University",
      period: "Jan 2023 – Jan 2025",
      color: "from-blue-500 to-purple-600",
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Dr. Virendra Swaroop Institute",
      period: "Aug 2018 – Aug 2021",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${edu.color} text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="mb-6">
                <GraduationCap size={48} className="text-white/80" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{edu.degree}</h3>
              <p className="opacity-90 text-lg mb-3">{edu.institution}</p>
              <p className="text-sm opacity-75 bg-white/20 inline-block px-3 py-1 rounded-full">
                {edu.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "yashsrivastavaa16@gmail.com",
      href: "mailto:yashsrivastavaa16@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+91 9026482050",
      href: "tel:+919026482050",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      info: "Connect with me",
      href: "https://www.linkedin.com/in/yash-srivastava-8634181a0/",
    },
    {
      icon: Github,
      title: "GitHub",
      info: "Check my code",
      href: "https://github.com/yashsrivastava16",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Let&apos;s Work Together
        </h2>
        <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let&apos;s connect and discuss your
          next project.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
              >
                <IconComponent size={48} className="mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-xl">{contact.title}</h3>
                <p className="opacity-90">{contact.info}</p>
              </a>
            );
          })}
        </div>

        <button className="bg-white text-purple-600 px-12 py-4 rounded-full font-semibold hover:bg-yellow-300 hover:text-purple-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Get In Touch
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Yash Srivastava
          </div>
          <p className="text-gray-400 mb-2">
            &copy; 2025 Yash Srivastava. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with passion for exceptional web experiences
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;

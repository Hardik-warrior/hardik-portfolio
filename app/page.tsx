export default function Home() {
  const skills = [
    "C",
    "C++",
    "Python",
    "MicroPython",
    "MATLAB",
    "PHP",
    "Laravel",
    "CodeIgniter",
    "JavaScript",
    "Ajax",
    "HTML",
    "CSS",
    "MySQL",
    "SQL Server",
    "Raspberry Pi",
    "Raspberry Pi Pico",
    "Arduino",
    "SPI",
    "ADS1262",
    "IoT",
    "Chart.js",
  ];

  const projects = [
    {
      title: "ADS1262 Random Signal Generator",
      text: "Master thesis project using ADS1262 32-bit sigma-delta ADC, Raspberry Pi, Python, SPI communication, noise sources, and random bitstream analysis.",
      tech: "Python, MicroPython, Raspberry Pi, ADS1262, SPI",
    },
    {
      title: "PHP Randomness Dashboard",
      text: "A web dashboard for uploading, storing, analyzing, and visualizing bitstream data using charts and database storage.",
      tech: "PHP, MySQL, JavaScript, Chart.js",
    },
    {
      title: "Smart Baby Cradle using IoT",
      text: "IoT-based system using sensors, Raspberry Pi, Arduino, Python, and ThingSpeak for real-time monitoring.",
      tech: "Python, Raspberry Pi, Arduino, IoT",
    },
    {
      title: "Offersnearme Web Application",
      text: "Web application developed during internship to help users find nearby shop offers based on location.",
      tech: "PHP, CodeIgniter, JavaScript, HTML, CSS",
    },
  ];

  const experiences = [
    {
      role: "Quality Assurance Specialist",
      company: "HelloFresh",
      date: "May 2024 – December 2024",
      place: "Barleben, Germany",
      text: "Worked on error resolution, product quality, process improvement, and order fulfillment support.",
    },
    {
      role: "Web Developer / Jr. Software Executive",
      company: "Arham Share Consultant Pvt. Ltd.",
      date: "April 2021 – June 2022",
      place: "Surat, India",
      text: "Developed analytics solutions, improved database performance, and integrated Razorpay, SEBI, and banking APIs.",
    },
    {
      role: "Web Development Intern",
      company: "Trueline Solution",
      date: "November 2019 – April 2020",
      place: "Surat, India",
      text: "Worked with PHP, CodeIgniter, JavaScript, CSS, debugging, and web application development.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold text-cyan-400">
            Hardik Raval
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#experience" className="hover:text-cyan-400">Experience</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-lg text-cyan-400">Hello, I am</p>

        <h1 className="text-5xl font-bold md:text-7xl">Hardik Raval</h1>

        <h2 className="mt-5 text-2xl text-slate-300 md:text-3xl">
          Embedded Software Engineer | Full-Stack Web Developer | IoT Developer
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          I build embedded and web-based systems using Raspberry Pi, Python,
          MicroPython, PHP, Laravel, MySQL, JavaScript, and data visualization.
          My master thesis focuses on ADS1262 ADC-based random signal generation
          and bitstream analysis.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            View Projects
          </a>

          <a
            href="mailto:hardik.r2000@gmail.com"
            className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-400"
          >
            Contact Me
          </a>

          <a
            href="https://www.linkedin.com/in/hardikgraval"
            target="_blank"
            className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">About Me</h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
          I am an engineering student and developer with experience in web
          development, embedded systems, IoT, and data analysis. I have worked
          with PHP, Laravel, CodeIgniter, JavaScript, MySQL, SQL Server,
          Raspberry Pi, Arduino, and Python. I enjoy building practical systems
          that connect hardware, software, and data.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Skills</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-center text-slate-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">{project.text}</p>

              <p className="mt-4 text-sm text-slate-300">
                <span className="font-semibold text-white">Tech:</span>{" "}
                {project.tech}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Professional Experience</h2>

        <div className="mt-8 space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-bold text-cyan-400">{exp.role}</h3>
              <p className="mt-1 font-semibold text-white">{exp.company}</p>
              <p className="mt-1 text-sm text-slate-400">
                {exp.date} | {exp.place}
              </p>
              <p className="mt-4 leading-7 text-slate-400">{exp.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Education</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="font-bold text-cyan-400">
              Master of IT and Electrical Engineering
            </h3>
            <p className="mt-3 text-slate-400">
              Hochschule Wismar University of Applied Sciences, Germany
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="font-bold text-cyan-400">
              Bachelor in Computer Application
            </h3>
            <p className="mt-3 text-slate-400">
              Shri Shambhubhai V. Patel College, Surat, India
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="font-bold text-cyan-400">
              Diploma in Power Electronics
            </h3>
            <p className="mt-3 text-slate-400">
              Gujarat Technological University, India
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
          <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            I am open to web development, embedded software, IoT, and junior
            software engineering opportunities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hardik.r2000@gmail.com"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/hardikgraval"
              target="_blank"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-500">
        © 2026 Hardik Raval. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  );
}
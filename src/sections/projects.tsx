import ProjectCard from "../components/project"

function Projects() {
    return (
        <section id="Projects" className="flex flex-col w-[100vw] min-h-[1100px] bg-white 
        dark:bg-gray-700 items-center pb-10">
            <h1 className="text-4xl mt-14 mb-4 text-black dark:text-white">Projects</h1>
            <p className="mb-12 text-black dark:text-white text-center">Some projects that demonstrate my skills.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <ProjectCard title="Sunlog.dev" description="Full-stack platform where the central entity is Project, allowing versioned devlogs to be associated in order to record progress, technical decisions, and development history. Includes REST APIs, relational data modeling, authentication, and metrics-based monitoring. " imageUrl="sunlog.png" technologies={["NestJS", "NextJS", "Docker", "PostgresSQL", "Sequelize", "AWS", "CI/CD"]} liveUrl="https://sunlog.dev" githubUrl="https://github.com/LucasNarZ/Sunlog.dev" />

                <ProjectCard title="Bookland" description="A monthly book subscription website made using React and Sass." imageUrl="bookland.png" technologies={["HTML", "CSS", "React", "Redux"]} liveUrl="https://landing-page-lucasnarz.vercel.app/" githubUrl="https://github.com/LucasNarZ/Book-Service-Landing-page" />

                <ProjectCard title="PocScript" description="A compiler written in C that converts to assembly." imageUrl="gear.svg" technologies={["C", "NASM", "make"]} liveUrl="https://github.com/LucasNarZ/PocScript" githubUrl="https://github.com/LucasNarZ/PocScript" />

                <ProjectCard title="Simple Thermostat" description="A simple thermostat firmware written in C++ that connect to aws, basic control front-end and api using API Gateway." imageUrl="gear.svg" technologies={["C++", "Arduino Framework", "Esp32", "AWS"]} liveUrl="https://github.com/LucasNarZ/Simple-Thermostat" githubUrl="https://github.com/LucasNarZ/Simple-Thermostat" />
            </div>

        </section>
    )
}

export default Projects

import ProjectCard from "../components/ProjectCard";
import projects from "../assets/projects";

export default function PortfolioPage(){
    
    return (
        <main className="
            about-me
            py-20
            bg-blue-300
            min-h-[100vh]
            flex flex-wrap
        ">
            {projects.map((project) => (
                <ProjectCard 
                    project={project}
                />
            ))}
        </main>
    );
};
import TemplatePage from "./TemplatePage";
import projects from "../assets/projects";
import Card from "../components/Card";

export default function PortfolioPage(){

    const printProjects = () => {
        projects.forEach(project => {
            console.log(project);
        })
    }
    

    return (
        <main className="
            about-me
            py-20
            bg-blue-300
            min-h-[100vh]
            flex
        ">
            {projects.map((project) => (
                <img src={project.image} alt="something" 
                    className="h-44 w-52 m-14
                "/>
            ))}
        </main>
    );
};
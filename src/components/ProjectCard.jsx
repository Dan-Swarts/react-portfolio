import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectCard({ project }){

    return (
        <figure className="m-14 h-60 w-80 relative">
            <img src={project.image} alt={project.description} 
                className="absolute h-full w-full rounded-2xl
            "/>

            <div className="absolute h-full w-full border-black bg-blue-50 
                opacity-0 hover:opacity-60 hover:border-8 rounded-2xl
                transition-all duration-300
            ">
                <p className="text-3xl text-black">
                    {`${project.title}  `}

                    <a href={project.link} target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="text-4xl" />
                    </a>
                </p>

                <p>{project.subtitle}</p>
            </div>
        </figure>
    );
};
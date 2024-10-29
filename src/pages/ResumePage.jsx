import TemplatePage from "./TemplatePage";
import resume from '../assets/resume.txt';

export default function ResumePage(){

    return (
        <main className="
        about-me
        py-20
        bg-blue-300
        min-h-[100vh]
        ">
            <a href={resume} download>
                <button>
                    Download Resume
                </button>
            </a>
        </main>
    );
};
import resume from '../assets/Resume.pdf';

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
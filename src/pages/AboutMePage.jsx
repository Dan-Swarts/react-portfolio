import '../styles/aboutMePage.css';

export default function AboutMePage(){

    return (
        <main className="
            about-me
            py-20
            bg-blue-300
            min-h-[100vh]
        ">

            <h1 className='text-4xl'>About Me</h1>

            <img src="assets/images/headshot.jpg" alt="Daniel's Headshot Photo" className="h-64 rounded-full" />

            <p className='aboutMeParagraph'> 
                I'm a dedicated AI trainer with a strong foundation in computer science 
                and a passion for cutting-edge web and AI technologies. I hold a 
                Bachelor of Science in Computer Science from the University of 
                Minnesota, where I also deepened my knowledge in artificial 
                intelligence and its applications. Additionally, I pursued 
                comprehensive training in full-stack development at Northwestern 
                University, equipping me with the skills needed to build and manage 
                robust, scalable applications.
            </p> <br />

            <p className='aboutMeParagraph'>
                In my professional role at DataAnnotations, I work as an AI trainer, 
                leveraging prompt engineering techniques to optimize AI interactions and 
                improve model performance. My technical toolkit includes proficiency in 
                TypeScript, React, Vite, and Tailwind CSS, enabling me to create efficient,
                high-quality web applications with modern frameworks and tools.
            </p> <br />
            
            <p className='aboutMeParagraph'>
                Through my academic and professional experiences, I've honed a blend of 
                technical and collaborative skills, always focused on delivering innovative 
                and impactful solutions.
            </p>
            
        </main>
    );
};
import '../styles/aboutMePage.css';
import profile from '../assets/images/profilePic.png';

export default function AboutMePage(){

    return (
        <main className="
            about-me
            py-20
            bg-blue-300
            min-h-[100vh]
        ">

            <h1 className='text-4xl'>About Me</h1>

            <img src={profile} alt="Daniel's Headshot Photo" />

            <p> 
                Hello! I’m [Your Name], a passionate [Your Profession or Role] based in 
                [Your Location]. With a strong background in [Your Field or Relevant 
                Experience], I specialize in [Your Area of Expertise or Niche] and have 
                a keen interest in [Related Interests or Hobbies].
            </p>

            <p>
                I graduated from [Your University or Educational Background] with a 
                degree in [Your Degree], and since then, I've dedicated my career to 
                [Your Professional Focus or Goal]. My journey has allowed me to work on 
                projects like [Example of a Key Project or Experience] and collaborate 
                with incredible teams to bring innovative ideas to life.
            </p>
            
            <p>
                In my free time, I enjoy [List 1-2 Hobbies or Interests that add 
                personality]. I’m also an avid learner, constantly looking to expand my 
                knowledge in [Field of Ongoing Study or Interest].
            </p>

            <p>
                Feel free to connect with me—I’m always open to discussing [Relevant 
                Topics] or exploring new collaborations!
            </p>

        </main>
    );
};
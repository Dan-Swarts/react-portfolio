import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="
            h-1/6 max-h-20 w-full bg-header bg-cover
            fixed bottom-0 flex justify-center text-6xl text-white
        ">
            <a href="https://github.com/Dan-Swarts?tab=repositories" target="_blank" className='mx-6'>
                <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="https://www.linkedin.com/in/daniel-swarts/" target="_blank" className='mx-6'>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a href=" https://stackoverflow.com/users/22176371/daniel-swarts" target="_blank" className='mx-6'>
                <FontAwesomeIcon icon={faStackOverflow} />
            </a>
        </div>
    );
};
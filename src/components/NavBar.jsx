import NavButton from './NavButton';
import '../styles/background.css';

export default function NavBar() {
    return (
        <header className="
            h-20 w-full 
            bg-header bg-cover
            fixed top-0 z-50
        ">

            <nav className="flex justify-around py-4">
                <h1 className="text-2xl text-cyan-50">Daniel Swarts</h1>

                <img src="assets/images/background1.png" alt="" 
                    className='w-10 h-10'
                />

                <NavButton page='/' text='About me' />
                <NavButton page='/Portfolio' text='Portfolio' />
                <NavButton page='/Contact' text='Contact me' />
                <NavButton page='/Resume' text='Resume' />

            </nav>
        </header>
    );
};
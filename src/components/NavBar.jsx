import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
    const currentPage = useLocation().pathname;
    return (
        <header className="
            h-1/6 max-h-20 w-full 
            bg-header bg-cover
            fixed top-0
        ">

            <nav className="flex justify-around py-4">
                <h1 className="text-2xl text-cyan-50">Daniel Swarts</h1>

                <Link
                    to='/'
                    className = { currentPage === '/' ? 
                        'nav-link h-12 w-16 bg-black text-white active' : 
                        'nav-link h-12 w-16 bg-black text-white' }
                >
                    Home
                </Link>

                <Link
                    to='/Contact'
                    className = { currentPage === '/Contact' ? 
                        'nav-link h-12 w-16 bg-black text-white active' : 
                        'nav-link h-12 w-16 bg-black text-white' }
                >
                    Contact
                </Link>

                <Link
                    to='/Portfolio'
                    className = { currentPage === '/Portfolio' ? 
                        'nav-link h-12 w-16 bg-black text-white active' : 
                        'nav-link h-12 w-16 bg-black text-white' }
                >
                    Portfolio
                </Link>

                <Link
                    to='/Resume'
                    className = { currentPage === '/Resume' ? 
                        'nav-link h-12 w-16 bg-black text-white active' : 
                        'nav-link h-12 w-16 bg-black text-white' }
                >
                    Resume
                </Link>
            </nav>
        </header>
    );
};
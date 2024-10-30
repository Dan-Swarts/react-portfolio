import { Link, useLocation } from 'react-router-dom'
import '../styles/navButtons.css'

export default function NavButton({ page, text }){
    const currentPage = useLocation().pathname;

    const conditionalStyles = (currentPage === page)
        ? 'bg-black text-white'
        : 'bg-white text-black'

    return (
        <Link
            to={page}
            className = {`h-12 w-16 rounded-xl ${conditionalStyles}`}
        >
            {text}
        </Link>
    );
};
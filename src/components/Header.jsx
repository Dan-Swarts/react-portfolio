import Button from "./Button"

export default function Header() {
    return (
        <header className="
            h-1/6 max-h-20 w-full bg-header bg-cover
            fixed top-0
        ">

            <nav className="flex justify-around py-4">
                <h1 className="text-2xl text-cyan-50">Daniel Swarts</h1>
                <Link className=""></Link>
                <Button
                    className=""
                    text="this is a button"
                />
                <Button 
                    className=""
                    text="this is a button"
                />
                <Button 
                    className=""
                    text="this is a button"
                />
                <Button 
                    className=""
                    text="this is a button"
                />
            </nav>
        </header>
    );
};
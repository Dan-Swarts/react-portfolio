import { useState } from "react";

export default function ContactPage(){

    const [error, setError] = useState('');

    const handleContactFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.querySelector('input.name').value;
        const email = form.querySelector('input.email').value;
        const message = form.querySelector('input.message').value;
        
        if (!name || !email || !message){
            return setError("Please fill all fields");
        }

        if(!lintEmail(email)){
            return setError("please enter a valid email adress");
        }

        handleSucess(name,email,message);
    };

    
    const lintEmail = (email) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    };

    const handleSucess = (name,email,message) => {
        setError('sucess!');
        console.log(`I'm not sure what to do with this message: ${message}`);
    };

    return (
        <main className="
        about-me
        py-20
        bg-blue-300
        min-h-[100vh]
        ">
            <form onSubmit={handleContactFormSubmit} 
                className="
                p-10
            ">
                <label htmlFor="">Name:</label><br />
                <input
                    type="text" 
                    className="name" 
                /><br />

                <label htmlFor="">Email Address:</label><br />
                <input 
                    type="text" 
                    className="email" 
                /><br />

                <label htmlFor="">Message:</label><br />
                <input 
                    type="text"
                    className="message"
                /><br />

                <button type="submit" value="submit">Submit</button>
            </form>

            <div>
                {error}
            </div>
        </main>
    );
};
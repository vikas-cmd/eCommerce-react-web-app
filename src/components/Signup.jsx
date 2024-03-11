import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: ''
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("login")
        localStorage.setItem("user", JSON.stringify(input));

        alert("Registration Successfully...")
    
            navigate("/login");

    

       

    }
    // Handle form submission here


return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
            <h1 className="text-xl font-bold text-center">SignUP</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block mb-2">
                        Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        className="w-full px-3 py-2 placeholder-gray-500 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="full name"
                    />
                </div>
                
                <div>
                    <label htmlFor="email" className="block mb-2">
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        className="w-full px-3 py-2 placeholder-gray-500 maiborder rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="name@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2">
                        CreatePassword
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={input.password}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        className="w-full px-3 py-2 placeholder-gray-500 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Your password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >

                    Sign UP
                </button>
            </form>
            <div>Already Registerd click here
                <Link to="/login">
                    <button className='text-red-500 text-lg font-serif ml-2'>  login </button>
                </Link>
            </div>
        </div>
        {/**********************************************************************************/}




    </div>
)
}
export default Signup;

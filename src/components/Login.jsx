import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
    const [input, setInput] = useState({
        email:'',
        password:''
    });
   

    const handleSubmit = (e) => {
        e.preventDefault();
        const loggedUser=JSON.parse(localStorage.getItem("user"))
        if(input.email===loggedUser.email && input.password===loggedUser.password){
            
                navigate("/");
    
          
        }
        else{
            alert("Wrong User or Password");
        }
        // Handle form submission here
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
                <h1 className="text-xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block mb-2">
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={input.email}
                            onChange={(e) => setInput({...input,[e.target.name]:e.target.value})}
                            className="w-full px-3 py-2 placeholder-gray-500 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={(e) => setInput({...input,[e.target.name]:e.target.value})}
                            className="w-full px-3 py-2 placeholder-gray-500 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >

                        Sign in
                    </button>
                    
                    <div>For new Registration        
                        <Link to="/signup">
                        <button className='text-red-500 text-lg font-serif'>`  click Here` </button>
                        </Link>
                        </div>
                   
                </form>
            </div>
            {/**********************************************************************************/}



            
        </div>
    )
}
export default Login;
        
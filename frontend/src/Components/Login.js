import React, { useState } from 'react';

const Login = () => {
    const [signin, setSignIn] = useState(false);
    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        let formErrors = {};
        if (!signin && (user.userName.length <= 6)) {
            formErrors.userName = "Enter a valid username!";
        }
        if (!user.email) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            formErrors.email = "Enter a valid email!";
        }
        if (user.password.length < 6) {
            formErrors.password = "Password must be at least 6 characters long!";
        }
        return formErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        const userDetails={
            email:user.email,
            password:user.password
        };
        if (Object.keys(formErrors).length === 0) {
            try {
                const response = await fetch(`http://localhost:5000/api/auth/${signin ? `login` : `register`}`, {
                    method: "POST", 
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(signin ? userDetails : user)
                });
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const res = await response.json();
                if (res === "User is already registered!") {
                    setSignIn(true);
                } else {
                    console.log(res);
                }
            } catch (err) {
                console.log(`Error: ${err}`);
            }
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className='flex'>
            <div className='text-white'>
                <form className='w-[500px] bg-neutral-700 ml-20 mt-40 rounded-lg' onSubmit={handleSubmit}>
                    <h1 className='font-bold text-red-600 text-[30px] p-3'>{signin ? "Sign In" : "Sign Up"}</h1>
                    {!signin && (
                        <>
                            <label htmlFor='userName' className='p-3 mt-6'>Enter Username</label><br />
                            <input className='p-3 ml-3 my-6 w-[450px] text-black'
                                type='text'
                                name='userName'
                                onChange={handleChange}
                                value={user.userName}
                                required
                            /><br />
                            {errors.userName && <span className="error">{errors.userName}</span>}
                        </>
                    )}
                    <label htmlFor='email' className='p-3 mt-6'>Enter Email</label><br />
                    <input className='p-3 ml-3 my-6 w-[450px] text-black'
                        type='email'
                        name='email'
                        onChange={handleChange}
                        value={user.email}
                        required
                    /><br />
                    {errors.email && <span className="error">{errors.email}</span>}
                    <label className='p-3' htmlFor='password'>Enter Password</label><br />
                    <input className='p-3 ml-3 my-6 w-[450px] text-black'
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={user.password}
                        required
                    /><br />
                    {errors.password && <span className="error">{errors.password}</span>}
                    {signin && (
                        <p className='p-2 text-red-500 ml-3'>
                            User already registered! <span className='text-blue-700 cursor-pointer' onClick={() => setSignIn(false)}>For sign up</span>
                        </p>
                    )}
                    <button className='p-3 bg-orange-600 mt-4 ml-3 rounded-lg'>{signin ? "Sign In" : "Sign Up"}</button>
                </form>
            </div>
            <div>
                <img alt='bg' src='https://images.businessnewsdaily.com/app/uploads/2022/04/04073619/how-ecommerce-works.png' />
            </div>
        </div>
    );
}

export default Login;

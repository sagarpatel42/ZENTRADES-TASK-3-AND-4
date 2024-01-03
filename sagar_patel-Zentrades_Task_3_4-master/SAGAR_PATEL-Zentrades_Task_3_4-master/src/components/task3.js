import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [details, setDetails] = useState({ username: "", password: "" })

    const navigate = useNavigate();

    const handlechange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    const handlesubmit = () => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[^@\]:;<>,.?/~\\-]*$/;
        if(details.username === "" && details.password === ""){
            alert("Please enter both Username and Password")
            return;
        }
        else if (!emailRegex.test(details.username)) {
            alert("Please enter a valid Email address");
            setDetails({
                ...details,
                username:""
            })
            return
        }
        // else if(!passwordRegex.test(details.password)){
        //     alert('Password should contain at least one uppercase letter and one number')
        //     setDetails({
        //         ...details,
        //         password:""
        //     })
        //     return;
        // }

        if(details.password === "SmartServTest@123"){
            localStorage.setItem("zentrades",details.username)
            console.log(details.username)
            navigate('/dashboard')
        }else{
            alert("Invalid Credentials")
            setDetails({
                        ...details,
                        password:""
                    })
                    return;
        }
    }


    return (
        <div
            class="bg-[#222222] text-white min-h-screen flex justify-center items-center"
        >
            <div
                class="bg-[#141414] px-16 py-12 rounded-lg shadow-md flex flex-col justify-center items-start w-1/3"
            >
                <img src="logo.webp" alt="" srcset="" class="mb-5" />
                <form action="#" method="post" class="w-full" id="loginForm">
                    <div class="w-full mb-5">
                        <input
                            type="email"
                            name="username"
                            id="username"
                            value={details.username}
                            onChange={(e) => { handlechange(e) }}
                            class="p-2 rounded-lg w-full text-black focus:outline-[#78BE43] font-semibold mb-1"
                            placeholder="Username"
                            required
                        />
                        <div id="usernameError" class="text-red-500 text-xs"></div>
                    </div>
                    <div class="w-full mb-5">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={details.password}
                            onChange={(e) => { handlechange(e) }}
                            class="p-2 rounded-lg w-full text-black focus:outline-[#78BE43] font-semibold"
                            placeholder="Password"
                            required
                        />
                        <div id="passwordError" class="text-red-500 text-xs"></div>
                    </div>
                    <div class="w-full mb-5">
                        <button
                            type="submit"
                            class="w-full font-semibold bg-[#78BE43] p-2 rounded-lg focus:outline-[#78BE43]"
                            onClick={handlesubmit}                
                        >
                            Login
                        </button>
                    </div>
                    <div class="w-full flex justify-center items-center">
                        <a
                            class="font-medium text-sm text-[#78BE43] underline cursor-pointer"
                            href='mailto:support@smartserv.io'
                        >
                            Forget your password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./login.css"


function LogIn() {
    let navigate = useNavigate();
    const navigationTo = () => {
        navigate('/regi');
    }

    const [data, setData] = useState({ pass: '', email: '' })
    const submitHandler = (e) => {
        e.preventDefault()
        //   console.log(data)
        let keys = Object.keys(sessionStorage);
        for (let key of keys) {
            let info = sessionStorage.getItem(key)
            info = JSON.parse(info)
            // console.log(info)
            // console.log(info.fname)
            console.log(info.fname)
            data.email === info.email ?
                (data.pass === info.pass ? alert(`welcome ${info.fname}`) : alert(' Pass doesn`t match '))
                : alert('Email not found')

        }
    }

    return (
        <>
            <section className='login my-5'>
                <div className='container'>
                    <div className='row'>
                        <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-10 col-10 m-auto">
                            <img src="../images/login.png" className='img-fluid' alt="svf" />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-10 m-auto form_part">

                            <h4 className="text-center mb-3" >Sign In</h4>

                            <form onSubmit={submitHandler} >
                                <button className='apps_sign google_sign'>
                                    <img src="../images/google.svg" alt="app" className='apps img-fluid' />
                                    Sign in with Google</button>
                                <button className='apps_sign apple_sign'>
                                    <img src="../images/apple.svg" alt="app" className='apps2 img-fluid' />
                                    Sign in with Apple</button>

                                <p className='pt-2' style={{ fontSize: "1.2rem" }}>Or</p>

                                <div className="form-group">
                                    <input type="email" placeholder='Enter Email' required
                                        name='email' value={data.email} onChange={e => setData({ ...data, email: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder='Enter Password'
                                        name='pass' value={data.pass} onChange={e => setData({ ...data, pass: e.target.value })}
                                        required />
                                </div>
                                <button type="submit" className="submit_btn mt-4">Submit</button>
                                <p className=' login_link' onClick={navigationTo}>Don't have an account ?</p>
                                <p className=' login_link' style={{ color: "red", paddingTop: ".5px" }}>Forgot Password ?</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default LogIn
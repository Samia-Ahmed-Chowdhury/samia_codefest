import React, { useState } from 'react'
import "./login.css"
import { useNavigate } from "react-router-dom";


function Regi() {
    let navigate = useNavigate();
    const navigationTo = () => {
        navigate('/login');
    }

    const [data, setData] = useState({ fname: '',lname:'', pass: '', email: '' })
    const submitHandler = (e) => {
      e.preventDefault()
      console.log(data)
      sessionStorage.setItem(`info`,JSON.stringify(data));
      navigate('/login');
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

                            <h4 className="text-center mb-3" >Sign Up</h4>

                            <form onSubmit={submitHandler} >
                            <button className='apps_sign google_sign'>
                                <img src="../images/google.svg" alt="app"  className='apps img-fluid'/>
                                Sign in with Google</button>
                                <button className='apps_sign apple_sign'>
                                <img src="../images/apple.svg" alt="app"  className='apps2 img-fluid'/>
                                Sign in with Apple</button>

                                <p className='pt-2' style={{fontSize:"1.2rem"}}>Or</p>
                                
                                <div className="form-group">
                                    <input type="text" placeholder='Enter Firstname'
                                        name='fname' value={data.fname}
                                        onChange={e => setData({ ...data, fname: e.target.value })}
                                        required />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder='Enter Lastname'
                                        name='lname' value={data.lname}
                                        onChange={e => setData({ ...data, lname: e.target.value })}
                                        required />
                                </div>
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


                                <p className=' login_link' onClick={navigationTo}>Already have an account ?</p>
                                <button type="submit" className="submit_btn mt-4">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Regi
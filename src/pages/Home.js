import React, { useState } from 'react'
import './home.scss'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confPassword,setConfPassword] = useState('')
    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    const [checked, setChecked] = useState(false);
    const [error,setError] = useState({
        message:'',
        type:''
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!email || !password || !confPassword || !name || !number){
            return setError({
                message:'All fields required',
                type:'all'
            })
        }
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email.match(mailformat)){
            return setError({
                message:'Invalid email address',
                type:'email'
            })
        }
        if(password !== confPassword){
            return setError({
                message:'Both password should match',
                type:'password'
            })
        }
        let phoneFormat = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        // if(number.length !== 10){
        //     return setError({
        //         message:'Phone number should be maximum of 10',
        //         type:'number'
        //     })
        // }
        if(!number.match(phoneFormat)){
            return setError({
                message:'Invalid phone number',
                type:'number'
            })
        }
        if(checked === false){
            return setError({
                message:'Please accept Terms & Conditions',
                type:'check'
            })
        }
        setError({
            message:'',
            type:''
        })

        navigate('/chart',{state:{name:name || ''}})
    }

    return (
        <div className='home'>
            <div className='home__item home--bgleft'>
                <img src='./assets/mydash.png' className='home__img' alt=''/>
            <div className='home--textDiv'>
            <h2>Choose a date range</h2>
            <br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            
            </div>
            <div className='home__item home--bgright'>
                <div className='home--bgright-div'>
                    <h2>Create an account</h2>
                    <br></br>
                    <div className='input-div'>
                    <label className='input-label'>Your email address</label><br></br>
                    <input type='email' className='input-field' value={email} onChange={e=>setEmail(e.target.value)}/>
                    {error.type === 'email' &&
                        <h6>{error.message}</h6>
                        }
                    </div>

                    <div className='input-div'>
                    <label className='input-label'>Your password</label><br></br>
                    <input type='password' className='input-field' value={password} onChange={e=>setPassword(e.target.value)}/>
                    </div>

                    <div className='input-div'>
                    <label className='input-label'>Confirm your password</label><br></br>
                    <input type='password' className='input-field' value={confPassword} onChange={e=>setConfPassword(e.target.value)}/>
                    {error.type === 'password' &&
                        <h6>{error.message}</h6>
                        }
                    </div>

                    <div className='input-div'>
                    <label className='input-label'>Your full name</label><br></br>
                    <input type='text' className='input-field' value={name} onChange={e=>setName(e.target.value)}/>
                    </div>

                    <div className='input-div'>
                    <label className='input-label'>Your phone number</label><br></br>
                    <input type='text' className='input-field-half' value={number} onChange={e=>setNumber(e.target.value)}/>
                    {error.type === 'number' &&
                        <h6>{error.message}</h6>
                        }
                    </div>

                    <div className='input-div'>
                        <div className='check-div'>
                        {/* <input type='checkbox' className='check'/>
                        <span class="checkmark"></span>
                        &nbsp;<h5> I read and agree Terms & Conditions</h5> */}
                        <label className="container"><h5>I read and agree Terms & Conditions</h5>
                        <input type="checkbox" defaultChecked="checked" checked={checked}
                                    onChange={(e) => setChecked(e.target.checked)} />
                        <span className="checkmark" />
                        </label>
                        </div>
                        {error.type === 'check' &&
                        <h6>{error.message}</h6>
                        }
                    </div>
                    <div className='input-div'>
                        {error.type === 'all' &&
                        <h6>{error.message}</h6>
                        }
                    </div>
                    <div className='input-div'>
                        <button type='button' onClick={handleSubmit} className='submit-btn'>Create account</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home

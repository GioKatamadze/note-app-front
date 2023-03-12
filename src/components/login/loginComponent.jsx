import React, { useEffect } from "react";
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import Error from "../error/error.jsx";
import Spinner from "../spinner/spinner.jsx";
import Button from "./button/login-button.jsx";
import { StyledForm, Paragraph } from "./style";


const LoginForm = () => {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
  
    const submitForm = (data) => {
    }
  
    return (
        <StyledForm>
            {/* {error && <Error>{error}</Error>} */}
            <form onSubmit={handleSubmit(submitForm)}>
                <h1>Login</h1>
                <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    {...register('email')}
                    required/>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    {...register('password')}
                    required/>
                <Button 
                    className="button" 
                    type="submit" >
                        {/* // {loading ? <Spinner /> : 'Login to your account'} */}
                        Login to your account
                </Button>
                <Paragraph>
                    Don't have an account? 
                    <HashLink className="nostyle" smooth to="/signup">Sign Up</HashLink>
                </Paragraph>
            </form>
            <p className="lastp">
                To test app, use <br/>
                email: demo@example.com <br/>
                password: demo123
            </p>
            <p className="lastp">
                or signup if you wish
            </p>
        </StyledForm>
    )
}

export default LoginForm
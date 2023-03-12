import React, { useEffect, useState } from "react";
import { StyledForm, Paragraph } from "./style";
import { useNavigate, Link } from 'react-router-dom'
import { userLogin } from "../../services/userServices";
import { HashLink } from 'react-router-hash-link';
import toast from 'react-hot-toast';
import Button from "./button/login-button.jsx";

const LoginForm = () => {

    const navigate = useNavigate();
    const [values, setValues] = useState({ email: "", password: "" });

    const generateError = (error) =>
      toast.error(error);
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { data } = await userLogin(values)
        if (data) {
          if (data.errors) {
            const { email, password } = data.errors;
            if (email) generateError(email);
            else if (password) generateError(password);
          } else {
            localStorage.setItem("token", data.token)
            navigate("/")
            toast('Welcome!', {
              icon: '👏',
            });
          }
        }
      } catch (ex) {
        console.log(ex);
      }
    };

    useEffect(() => {
      if (localStorage.token) {
        navigate("/");
      }
    }, [localStorage.token, navigate]);
    return (
        <StyledForm>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Login</h1>
                <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    onChange={(e) =>
                        setValues({ ...values, [e.target.name]: e.target.value })
                      }
                    required/>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) =>
                        setValues({ ...values, [e.target.name]: e.target.value })
                      }
                    required/>
                <Button 
                    className="button" 
                    type="submit" >
                        Login to your account
                </Button>
                <Paragraph>
                    Don't have an account? 
                    <HashLink className="nostyle" smooth to="/signup">Sign Up</HashLink>
                </Paragraph>
            </form>
            <p className="lastp">
                To test app, use <br/>
                email: demo@user.com <br/>
                password: demo123
            </p>
            <p className="lastp">
                or signup if you wish
            </p>
        </StyledForm>
    )
}

export default LoginForm
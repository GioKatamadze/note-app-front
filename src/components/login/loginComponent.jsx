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

    const handleSubmit = async (e) => {
      e.preventDefault();
      const { data } = await userLogin(values)
      if (data) {
        const newData = {
          token: data.token,
          name: data.name,
          email: data.email,
          user_id: data.user_id
        }
        localStorage.setItem("token", JSON.stringify(newData.token))
        localStorage.setItem("user", JSON.stringify(newData.user_id))
        navigate("/home")
        toast('Welcome!', {
          icon: '👏',
        });
      } else {
        toast.error("Oops.. Try Again")
      }
    };

    useEffect(() => {
      if (localStorage.newData) {
        navigate("/home");
      }
    }, [localStorage.newData, navigate]);
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
                Signup or use <br/>
                email: demo@user.com <br/>
                password: demo123
            </p>
        </StyledForm>
    )
}

export default LoginForm
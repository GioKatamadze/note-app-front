import { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { StyledForm, Paragraph } from "./style.jsx"
import { userSignup } from "../../services/userServices.js";
import Button from "../login/button/login-button.jsx";
import Error from "../error/error.jsx";
import toast from 'react-hot-toast';

const RegisterForm = () => {

  const [customError, setCustomError] = useState(null)
  const navigate = useNavigate()
  const [values, setValues] = useState({
    name: "",
    email: "", 
    password: "" 
  })

  const generateError = (error) =>
    toast.error(error);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await userSignup(values)
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
            toast.success("User Created Successfully")
            navigate("/signin");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };
    return (
        <StyledForm>
            {customError && <Error>{customError}</Error>}
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Sign Up</h1>
                <input
                    type="name"
                    placeholder="Full name"
                    name="name"
                    onChange={(e) =>
                        setValues({ ...values, [e.target.name]: e.target.value })
                      }
                    required/>
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
                    type="submit" 
                    >
                      Create an account
                </Button>
                    <Paragraph>
                        Already have an account? 
                        <HashLink className="nostyle" smooth to="/signin">Login</HashLink>
                    </Paragraph>
            </form>
        </StyledForm>
    )
}

export default RegisterForm

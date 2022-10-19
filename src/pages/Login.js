import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useNavigate, Link } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

import { useFormik } from 'formik';

import * as yup from 'yup';






export default function Login() {
    const navigate = useNavigate();

    const FormValidationSchema = yup.object({
        email: yup.string().required("enter valid email").min(5, "type more than 5 letters"),
        password: yup.string().required("enter valid password").min(5),
    })

    const { handleChange, handleBlur, handleSubmit, values, touched, errors } = useFormik({
        initialValues: { email: "testmail@gmail.com", password: "Test@123" },
        validationSchema: FormValidationSchema,
        onSubmit: (values) => {
            login(values)
        }
    });

    const login = (data) => {
    
        fetch('https://mern-book-store-serv.herokuapp.com/reg/login',
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    console.log(data.error);
                    toast.error(data.error);
                } else {
                    console.log(data);
                    toast.success(data.msg);
                    navigate("/homeLayout");
                }
            })
    }
    return (
        <form onSubmit={handleSubmit} className="user">
            <div className="form-group">
                <TextField className="form-control form-control-user"
                    type="username"
                    name="username"
                    label="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.username && touched.username}
                    helperText={errors.username && touched.username ? errors.username : ""}
                />
            </div>
            <div className="pass">
                < TextField
                    className="form-control form-control-user"
                    type="password"
                    name="password"
                    label="Password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={errors.password && touched.password}
                    helperText={errors.password && touched.password ? errors.password : ""}
                />
            </div>
            <Button
                type="submit"
                className="btn btn-primary btn-user btn-block form-control form-control-user lg-btn"
                variant='contained'>login</Button>
            <div > New User? <Link className="lg-btn" to="/register">Register</Link>
            </div>
            
          
        </form>
    )
};
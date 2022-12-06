import "./profile.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import IconButton from "components/UI/iconButton";
import { useDispatch } from "react-redux";
import { login } from "redux/reducers/accountReducer";
import { Account } from "common/types";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
        lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        address: Yup.string().required("Required"),
        creditCard: Yup.string().length(16, "Invalid credit card").required("Required"),
    });
    
    const submitHandler = (values: Account) => {
        //console.log(values);
        dispatch(login(values));
        navigate("/profile");
    }
    

    return (
        <div className="login-container">
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    address: "",
                    creditCard: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={submitHandler}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="login">
                            <h4>Log In</h4>
                            <div/>
                            <Field placeholder="First Name" name="firstName" autoComplete="given-name" />
                            <div className="login-error">
                                {errors.firstName && touched.firstName
                                    ? errors.firstName
                                    : ""}
                            </div>
                            <Field  placeholder="Last Name" name="lastName" autoComplete="family-name" />
                            <div className="login-error">
                                {errors.lastName && touched.lastName
                                    ? errors.lastName
                                    : ""}
                            </div>
                            <Field  placeholder="Email" name="email" type="email" />
                            <div className="login-error">
                                {errors.email && touched.email ? errors.email : ""}
                            </div>
                            <Field  placeholder="Address" name="address" autoComplete="street-address"/>
                            <div className="login-error">
                                {errors.address && touched.address
                                    ? errors.address
                                    : ""}
                            </div>
                            
                            <Field placeholder="Credit Card"name="creditCard" autoComplete="cc-number"/>
                            <div className="login-error">
                                {errors.creditCard && touched.creditCard
                                    ? errors.creditCard
                                    : ""}
                            </div>
                            <div />
                            <div />
                            <IconButton imageFilename="button_icons/arrow_button.png" buttonType="submit"/>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;

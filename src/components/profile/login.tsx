import "./profile.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    creditCard: Yup.string().length(16, "Invalid credit card").required("Required"),
});

const Login = () => {
    return (
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    creditCard: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => console.log(values)}
            >
                {({ errors, touched }) => (
                    <Form className="login">
                        <Field name="firstName" />
                        {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                        ) : null}
                        <Field name="lastName" />
                        {errors.lastName && touched.lastName ? (
                            <div>{errors.lastName}</div>
                        ) : null}
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <Field name="creditCard" />
                        {errors.creditCard && touched.creditCard ? (
                            <div>{errors.creditCard}</div>
                        ) : null}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
    );
};

export default Login;

import { useState, useEffect } from "react";

const useSigninForm = validate => {
    const [values, setValues] =useState({
        email1: '',
        password1: ''
     })
     const [errors, setErrors] = useState({});
     const [isSubmitting, setIsSubmitting] = useState(false);


     const handleChange = e => {
        const { name, value} = e.target;
        setValues ({
            ...values,
            [name]: value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    };
    return {handleChange, values, handleSubmit, errors};
}

export default useSigninForm;

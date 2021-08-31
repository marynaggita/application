export default function validationInfo(values){
    let errors= {}

    if(!values.firstName){
        errors.firstName = 'First Name is required';
    }
    if(!values.lastName){
        errors.lastName = 'Last name is required';
    }

    if(!values.email){
        errors.email = "Email required";
    } else if(!/^[A-Z0-9,_%+]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email address is invalid";
    }

    if(!values.password){
        errors.password = 'Password is required';
    }
    // }else if(values.password.length < 6){
    //     errors.password= 'Password needs to be 6 characters or more';
    
    if(!values.password2){
        errors.password2 = 'Password is required';
    }else if(values.password2 !== values.password){
        errors.password2= 'Passwords do not match';
    }
    if(!values.phone){
        errors.phone = 'Phone number is required';
    }
    if(!values.age){
        errors.age = 'Age range is required';
    }

    return errors;
}
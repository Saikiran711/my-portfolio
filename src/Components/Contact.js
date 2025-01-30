import { useState } from "react";
export default function Contact(){
    const formintialdetails={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:'',
    }
    const [formDetails,setFormDetails]=useState(formintialdetails);
    const [buttonText,setButtonText]=useState('send');
    const [status,setStatus]=useState({});

    return(<>

    </>);
}


import React, { useState } from "react";
import "./FormValidation.css"
//import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';






let FormValidation = () => {


    let [formData, setFormData] = useState({
        name: "",
        email: "",

        password: "",
        Confirmpassword: ""
    })

    let [error, setError] = useState({})
    

    let handalonchange = (e) => {

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    console.log(formData, error);
    var cheakPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;

    let handalonclick = (e) => {

        e.preventDefault()

        let handalerror = {}

        if (!formData.name.trim()) {
            handalerror.name = "name is requre"

        } else if (formData.name.length < 3) {
            handalerror.name = "name more then 3 digit"
        }
        if (!formData.email.trim()) {
            handalerror.email = "email is requred"
        } else if (!cheakPassword.test(formData.email)) {
            handalerror.email = "invalite email"
        }
        if (!formData.password.trim()) {
            handalerror.password = "password is require"
        } else if (formData.password.length < 6) {
            handalerror.password = "password must be 6 char"
        } if (!cheakPassword.test(formData.password)) {
            handalerror.password = "password must have include @Aa123"
        }
        if (!formData.Confirmpassword.trim()) {
            handalerror.Confirmpassword = "Confirmpassword is required"
        }
        else if (formData.Confirmpassword !== formData.password) {
            handalerror.Confirmpassword = "password not match"
        }
        if (!cheakPassword.test(formData.Confirmpassword)) {
            handalerror.Confirmpassword = "password must have include @Aa123"
        }
        setError(handalerror);


        if (Object.keys(handalerror).length === 0) {


            alert("form submit successfully");
            setFormData({
                name: "",
                email: "",
                password: "",
                Confirmpassword: "",
            })
        }
    }
    return (
        <>
            <div>

                <form>

                    <label>Name</label>

                    <input name="name"
                        value={formData.name}
                        onChange={handalonchange}
                        type="text"
                        placeholder="enter a name" />

                    {error.name && <span>{error.name}</span>}

                    <label>Email</label>
                    <input name="email"
                        value={formData.email}
                        onChange={handalonchange}
                        type="text"
                        placeholder="enter a email" />

                    <span>{error.email && <span>{error.email}</span>}</span>

                    <label>Password</label>

                    <input name="password"
                        value={formData.password}
                        onChange={handalonchange}
                        type="password"
                        placeholder=" password" />

                    {error.password && <span>{error.password}</span>}

                    
                    <label>Confirmpassword</label>
                   
                    <input name="Confirmpassword"
                        value={formData.Confirmpassword}
                        onChange={handalonchange}
                        type={ "password"}
                        placeholder="Confirmpassword"
                    />
                   


                    {error.Confirmpassword && <span>{error.Confirmpassword}</span>}
                  
                    <button onClick={handalonclick}
                        type="submit"
                        disabled={!formData.name || !formData.email || !formData.password || !formData.Confirmpassword}

                        className={(!formData.name || !formData.email || !formData.password || !formData.Confirmpassword) ? "disabledButton" : ""}>

                        submit</button>

                </form>
                <div className="secondDiv">
                    <ul>

                        <li style={{ color: formData.password.length > 7 ? "green" : "red" }}>

                            <span>{formData.password.length > 7 ? <CheckIcon style={{ color: "green" }} /> : ""}</span>
                            Password must have a 8 character</li>

                        <li style={{ color: /[A-Z]/.test(formData.password) ? "green" : "red" }}>
                            <span>{/[A-Z]/.test(formData.password) ? <CheckIcon style={{ color: "green" }} /> : ""}</span>
                            At list one upperCase letter(A-Z)</li>

                        <li style={{ color: /[a-z]/.test(formData.password) ? "green" : "red" }}>
                            <span>{/[a-z]/.test(formData.password) ? <CheckIcon style={{ color: "green" }} /> : ""}</span>
                            At list one lowerCase letter(a-z)</li>

                        <li style={{ color: /[0-9]/.test(formData.password) ? "green" : "red" }}>
                            <span>{/[0-9]/.test(formData.password) ? <CheckIcon style={{ color: "green" }} /> : ""}</span>
                            At list one Number letter(0-9)</li>

                        <li style={{ color: /[@#$%^&+=]/.test(formData.password) ? "green" : "red" }}>
                            <span>{/[@#$%^&+=]/.test(formData.password) ? <CheckIcon style={{ color: "green" }} /> : ""}</span>
                            At list one special character(like !@%^$&*)</li>
                        <li style={{ color: (formData.password === formData.Confirmpassword && formData.password !== "") ? "green" : "red" }}>
                            <span>{(formData.password === formData.Confirmpassword && formData.password !== "") ? <CheckIcon style={{ color: "green" }} /> : ""}</span>
                            Password match</li>


                    </ul>
                </div>

            </div>


        </>
    )
}
export default FormValidation;
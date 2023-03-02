import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { v4 as uuid } from "uuid"
import dataCrud from "./dataCrud"


const Contact = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [validate, setValidate] = useState('');
    let history = useNavigate();
    const CheckValidate = () => {
        const msg = {};
        if ((name == '')) {
            msg.name = "vui long nhap ten"
        }
        if ((age == '')) {
            msg.age = "vui long nhap tuoi"
        }
        if ((address == '')) {
            msg.address = "vui long nhap dia chi"
        }
        setValidate(msg);
        if (Object.keys(msg).length > 0) return false
        return true
    }
    console.log(CheckValidate)
    const submit = (e) => {
        e.preventDefault();
        var dateCheck = CheckValidate();
        if (!dateCheck) {
            return;
        } else {
            const ids = uuid();
            let unique = ids.slice(0, 2);
            let a = name;
            let b = age;
            let c = address;
            dataCrud.push({ id: unique, Name: a, Age: b, Address: c });
            history("/");
        }

    }
    
    return (
        <div>
            <h1>Contact Page</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} id="exampleInputPassword1" placeholder="Name" />
                    <span>{validate.name}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Age</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setAge(e.target.value)} placeholder="Age" />
                    <span>{validate.age}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Address</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                    <span>{validate.address}</span>
                </div>
                <button onClick={(e) => submit(e)} type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
}

export default Contact
import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import dataCrud from "./dataCrud"

function Edit (){
    let[names,setName] = useState("");
    let[ages,setAge] = useState("");
    let[addresss,setAddress] = useState("");
    let[iD,setId] = useState("");
    let index = dataCrud.map(function(e){
            return e.Name 
    }).indexOf(names);
    var history = useNavigate();
    const submit = (e) => {
        e.preventDefault();
        let a = dataCrud[index];
        a.Name = names;
        a.Age = ages;
        a.Address = addresss;
        history("/");
    }

    useEffect(()=>{
            setName(localStorage.getItem('Name'))
            setAge(localStorage.getItem('Age'))
            setAddress(localStorage.getItem('Address'))
            setId(localStorage.getItem('ID'))
    },[]) 
    return(
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input type="text" className="form-control" value={names} onChange={(e) => setName(e.target.value)} id="exampleInputPassword1" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Age</label>
                    <input type="text" className="form-control" value={ages}  id="exampleInputPassword1" onChange={(e) => setAge(e.target.value)} placeholder="Age" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Address</label>
                    <input type="text" className="form-control" value={addresss} id="exampleInputPassword1" onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                </div>
                <button onClick={(e) => submit(e)} type="submit" className="btn btn-primary">Upload</button>
            </form> 
        </div>
       
    )
}

export default Edit
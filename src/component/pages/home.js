import React from "react";
import {Link, useNavigate} from "react-router-dom"
import dataCrud from "./dataCrud"
function Home() {
    let history = useNavigate()
    const onEdit = (id,name,age,address)=>{
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Address',address);
        localStorage.setItem('ID',id);
    }
    const Delete = (id)=>{
        var index = dataCrud.map(function(e){
            return e.id
        }).indexOf(id);
        dataCrud.splice(index,1);
        history('/')
    }
   
    return (
        <div>
            <h1>Home Page</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataCrud && dataCrud.length > 0 ?
                            dataCrud.map((current) => {
                                return (
                                    <tr>
                                        <th scope="row">{current.id}</th>
                                        <td>{current.Name}</td>
                                        <td>{current.Age}</td>
                                        <td>{current.Address}</td>
                                        <td>
                                            <Link to="/edit">
                                            <button onClick={()=>onEdit(current.id,current.Name,current.Age,current.Address)}>Edit</button>
                                            </Link>
                                            <button onClick={()=>Delete(current.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )

                            }) :
                            "Not Data"
                    }
                </tbody>
            </table>
            <br>
            </br>
            <Link to="/contact">
            <button >Create</button>
            </Link>
            
        </div>
    );
}

export default Home
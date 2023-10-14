import React, { Component, useEffect,useState } from 'react';
import "./index.css";
function ApiRecords(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        retrieveData();
    },[])

    const retrieveData=async()=>{
        try{
            const response = await fetch('https://dummyjson.com/users');
            const val = await response.json();
            setData(val.users);
        }catch(error){
            console.log("Error:", error);
        }
    }
    return(
        <div >
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
            crossOrigin="anonymous"></link>
            <div className='mt-3'>
                    <center><h3 className='bg-primary text-light'>API records data fetching and display in table</h3></center>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th className='text-danger bg-success'>Sno</th>
                                <th className='text-danger bg-success'>FirstName</th>
                                <th className='text-danger bg-success'>LastName</th>
                                <th className='text-danger bg-success'>MaindenName</th>
                                <th className='text-danger bg-success'>Age</th>
                                <th className='text-danger bg-success'>Gender</th>
                                <th className='text-danger bg-success'>Email</th>
                                <th className='text-danger bg-success'>Phone</th>
                                <th className='text-danger bg-success'>UserName</th>
                                <th className='text-danger bg-success'>Birthdate</th>
                                <th className='text-danger bg-success'>BloodGroup</th>
                                <th className='text-danger bg-success'>Height</th>
                                <th className='text-danger bg-success'>Weight</th>
                                <th className='text-danger bg-success'>EyeColor</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            data.map((user)=>(
                                <tr key={user.id}>
                                    <td className='text-white bg-dark'>{user.id}</td>
                                    <td className='text-white bg-dark'>{user.firstName}</td>
                                    <td className='text-white bg-dark'>{user.lastName}</td>
                                    <td className='text-white bg-dark'>{user.maidenName}</td>
                                    <td className='text-white bg-dark'>{user.age}</td>
                                    <td className='text-white bg-dark'>{user.gender}</td>
                                    <td className='text-white bg-dark'>{user.email}</td>
                                    <td className='text-white bg-dark'>{user.phone}</td>
                                    <td className='text-white bg-dark'>{user.username}</td>
                                    <td className='text-white bg-dark'>{user.birthDate}</td>
                                    <td className='text-white bg-dark'>{user.bloodGroup}</td>
                                    <td className='text-white bg-dark'>{user.height}</td>
                                    <td className='text-white bg-dark'>{user.weight}</td>
                                    <td className='text-white bg-dark'>{user.eyeColor}</td>
                                </tr>
                            ))
                          }
                        </tbody>
                    </table>
            </div>
        </div>
    )
}
export default ApiRecords;
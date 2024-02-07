import React, { useState } from 'react';
import '../styles/Register.css';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let error = "";
    if(formData.firstname === "") error = "Firstname is empty";
    else if(formData.lastname === "") error = "Lastname is empty";
    else if(formData.email === "") error = "Email is empty";
    else if(formData.password === "") error = "Password is empty";

    if(error){
      toast(error,{type: 'warning'});
      return;
    }
    try{
      let data = await fetch('http://localhost:5000/create/user',{
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      data = await data.json();
      if(data.error){
        toast(data.error,{
          type: 'warning'
        })
      }else toast('Registered Successfully',{type: 'success'})
      console.log(data.error);
    }catch(e){
      console.log(e);
    }
  };

  return (
    <div className='container register'>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className='submitDiv'>
          <button type="submit" onClick={handleSubmit}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;

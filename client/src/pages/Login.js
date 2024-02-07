import React, { useState } from 'react';
import '../styles/Login.css'; // Create a CSS file for styling if needed
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [formData, setFormData] = useState({
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
    if(formData.email === "") error = "Email is empty";
    else if(formData.password === "") error = "Password is empty";

    if(error){
      toast(error,{type: 'warning'});
      return;
    }

    try {
        let res = await fetch('http://localhost:5000/auth/login',{
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await res.json();
        console.log(data);
        if(data.error){
          toast(data.error,{
            type: 'warning'
          })
        }else toast('Logged In Successfully',{type: 'success'})
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container'>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

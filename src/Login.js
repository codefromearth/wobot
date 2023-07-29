import React, { useState } from 'react';
import './Login.css'
const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    industryName: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (!formData.name || !formData.companyName || !formData.industryName) {
      alert('Please fill in all fields.');
      return;
    }

    
    setFormData({
      name: '',
      companyName: '',
      industryName: ''
    });

    alert('Form submitted successfully!');
  };

  return (
    <>
   
    <div  className='center-container'>
    
        
    <div className='logo'>
    <img src="https://wobot.ai/wobot_logo_blue.svg" alt="logo"/>
    </div>
    
    <div className="form-container">
        <div className='upper-content'>
            <img src="./logo2.png" alt="logo2"/>
      <h2>It's delight to have you onboard</h2>
      <p>help us know you better</p>
      <p>(this is how we optimise Wobot as per your business need)</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className='inputtype' name="name" value={formData.name} onChange={handleInputChange} required placeholder='e.g john smith'/>
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input type="text" id="companyName"  className='inputtype' name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder='e.g alpha in' required />
        </div>
        <div className="form-group">
          <label htmlFor="industryName">Industry Name:</label>
          <select id="industryName"  className='inputtype' name="industryName" value={formData.industryName} onChange={handleInputChange} required>
            <option value="">Select</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            
          </select>
        </div>
        <div className='loaction'><p>number of location:</p>
        <button>1-20</button>
        <button>20-50</button>
        <button>51-200</button>
        <button>200-500</button>
        <button>500+</button>
        </div>
        <div className="form-group">
       <button id="button">get started</button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default Login;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './RegisterForm.css'; 

function RegisterForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    city: '',
    mobileNumber: '',
    photograph: null,
    address: '',
    institute: '',
    qualification: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle the form submission, e.g., send the form data to the backend
  };

  return (
    <div className="register-form-container">
      <h1>Register for Exam {id}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </label>
        <label>
          Mobile Number:
          <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
        </label>
        <label>
          Photograph:
          <input type="file" name="photograph" accept="image/*" onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Institute:
          <input type="text" name="institute" value={formData.institute} onChange={handleChange} required />
        </label>
        <label>
          Qualification:
          <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;

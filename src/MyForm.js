import React, { useState } from 'react';

function MyForm() {
    const initialFormData = {
    Name: '',
    address:'',
    phone:'',
    gender:'',
    checkbox:'',

  };

  const [formData, setFormData] = useState(initialFormData);


   const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'radio' || type === 'checkbox' ? checked : value;
  
  setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData(initialFormData);
  };
  return (
    <div>
      <h1>Covid Vaccination Portal</h1>  
      <form onSubmit={handleSubmit}>
        <label>
         Name:
          <input
            type="text"
            name="Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br/>
        

        <label>
          Address:
          <textarea
            name = "address"
            value={formData.address}
            onChange={handleChange}
            />
        </label>
        <br/>

        <label>
          Contact number:
          <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          />
        </label>
        <br/>

        <label>
          Gender :
          <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
        />
        Female
        </label>
        <br/>

        <label>
          <input
          type="checkbox"
          name="checkbox"
          checked={formData.checkbox}
          onChange={handleChange}
          required
          />
          I accept all the terms and conditions.
        </label>
        <br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyForm;
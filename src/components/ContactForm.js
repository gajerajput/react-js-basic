import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if(!name.trim()) {
      newErrors.name = "Name is required";
    }

    if(!email.trim()) {
      newErrors.email = "Email is required";
    } else if(!email.includes('@')) {
      newErrors.email = "Email must be valid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (validateForm()) {
      console.log("Form submitted:", { name, email });
      setSubmittedData({ name, email }); // Store submitted data
      setName("");
      setEmail("");
      setErrors({});
    } 
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Contact Form</h2>
      <p>This demonstrates form validation</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type='text'
            placeholder='Enter name'
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
          {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
          <label>Email</label>
          <input 
            type='text'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
          <button type="Submit">Submit</button>
          
          {submittedData && (
            <div>
              <p>Name : {submittedData.name}</p>
              <p>Email : {submittedData.email}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactForm; 
import React, { useState } from 'react';

function Contact(){

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const handleInputChange = (e) =>{
        // update state so that input values will be accurate
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        console.log(target);

        if(inputType === 'text'){
            console.log(inputValue);
            setName(inputValue)
        }else if (inputType === 'email'){
            console.log(inputValue);
            setEmail(inputValue)
        }else if (inputType === 'textarea'){
            console.log(inputValue);
            setMessage(inputValue)
        }
    }

    const handleFormSubmit = (e) => {
        // submit form and reset inputs
        e.preventDefault(); 
        setName('')
        setEmail('')
        setMessage('')
    }

    return(
        <div id='contact'>
        <form>
  <div className="mb-3">
    <label htmlFor="inputEmail" className="form-label">Email address</label>
    <input type="email" value={email} onChange={handleInputChange} placeholder='email' className="form-control" id="inputEmail"/> 
  </div>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" value={name} onChange={handleInputChange} placeholder='name' className="form-control" id="name"/> 
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
    <input type="textarea" value={message} onChange={handleInputChange} placeholder='message' className="form-control" id="message"/> 
  </div>
  <button type="submit" onClick={handleFormSubmit} className="btn btn-primary">Submit</button>
</form>
</div>
    )
}
export default Contact;
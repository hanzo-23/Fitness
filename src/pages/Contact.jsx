import {useState} from 'react';
import "./Contact.css";

const people = JSON.parse(localStorage.getItem("people")) || [];

export const Contact = () => {

  const [values , setValues] = useState({ 
    fname: "" ,
    email: "", 
    phone: "", 
    message: ""
     });

  const handleSubmit = (e) =>{

     e.preventDefault();
     
     const errors = [];
     if (!values.fname.trim()) errors.push("Full name is required.");
     if (!values.email.trim()) errors.push("Email is required.");
     if (!values.phone.trim()) errors.push("Phone is required.");
     if (!values.message.trim()) errors.push("Message is required."); 
     if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.push("Email is not valid.");
     if (!/^\d{8}$/.test(values.phone)) errors.push("Phone number must be 8 digits.");
  

     if (errors.length > 0) {
        alert(errors.join("\n"));}

     else 
      {  
        
        people.push(values);
        localStorage.setItem("people", JSON.stringify(people));
        alert("Thank you for your message! We've received it and will get back to you soon");
         

        setValues({
        fname: "",
        email: "",
        phone: "",
        message: ""

      });
      }

       


  }
  
  return (

    <main className="contact-page">

      <div className="contact-header">
          <h1>
            Contact<span> US</span>
            <button id="contact-submit" type="submit" form="contact-form">
              Send Message
            </button>
          </h1>

          
        </div>

      <div className='contact'> 

  <form id="contact-form" onSubmit={handleSubmit} >

 <label htmlFor="fname">Full Name</label>
 <input id="fname" name = 'fname' placeholder="Enter full name..."  type="text" 
 onChange={(e) => setValues({...values, fname: e.target.value})}/>
 
 <label htmlFor="email">Email</label>
 <input id="email" name = 'email' placeholder="Enter email..."  type="email" 
 onChange={(e) => setValues({...values, email: e.target.value})} />


 
 <label htmlFor="phone">Phone</label>
 <input id="phone" name = 'phone' placeholder="Enter your phone number should be 8 digits..." type="tel" 
 onChange={(e) => setValues({...values, phone: e.target.value})} />
 
 <label htmlFor="message">Message</label>
 <textarea
 id="message"
 rows="6"
 placeholder="Enter message..."
 name='message'
 onChange={(e) => setValues({...values, message: e.target.value})}
 ></textarea>

 
 </form>
    </div>
    </main>
  )
}

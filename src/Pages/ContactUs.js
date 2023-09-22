import React ,{useState} from 'react'

const ContactUs = (props) => {
    const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [number,setNumber]=useState('')

  const submitHandler=(event)=>{
    event.preventDefault();

    const detail={
      name:name,
      email:email,
      number:number
    };

  props.onDetailMovie(detail)

    setName('');
    setEmail('');
    setNumber('');
  }

  return (
    <>
    < div>Contact Us  Please fill the form</div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={(e)=> setName(e.target.value)} />
        </div> 
        <div>
          <label htmlFor="email">Email Id</label>
          <input type="text" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="number">Phone Number</label>
          <input type="text" id="number" value={number} onChange={(e)=> setNumber(e.target.value)}/>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};


export default ContactUs

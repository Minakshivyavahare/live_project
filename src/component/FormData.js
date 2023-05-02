import React, { useState } from 'react';
import {Button,Container,Form} from 'react-bootstrap';



const FormData = () =>{
    const[detail,setDetails] =useState({})

    const handleChange = (e) => {
      setDetails({ ...detail, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(detail);
        
    }
    return(
      
        <Container style={{textAlign:'center',justifyContent: 'center',display:'flex'}}>
         
          <Form style={{textAlign:'center',width:'30vw',height:'50vh',justifyContent:'center',marginTop:'10px'}} onSubmit={handleSubmit}>
          <h2>ADD BANK DETAILS</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label>Account Number</Form.Label>
        <Form.Control type="accountholder" placeholder="Enter Account Number" name='account' onChange={handleChange}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">

        <Form.Label>Phone No</Form.Label>
        <Form.Control type="phone" placeholder="phone" name='phone' onChange={handleChange} />
      </Form.Group>

     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> 
       
        </Container>
           
        
    )
}
export default FormData;
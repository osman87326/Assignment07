import React from 'react'
import { Link } from 'react-router';

const User = ({user}) => {
    const{name,email,phone}=user;

    const userstyle={
        border:'2px solid yellow',
    
borderRadius:'20px',
padding:'10px',
margin:'10px'    
    }
  return (
    <div style={userstyle}>
      <h5>{name}</h5>
      <p>Email: {email}</p>
      <p><small>Phone: {phone}</small></p>
      <Link to={`/users/${user.id}`}>Show Details</Link>
    </div>
  )
}

export default User

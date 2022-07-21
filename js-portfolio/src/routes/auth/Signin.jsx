import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [authing, setAuthing] = useState(false);
  const navigate = useNavigate();
  let location = useLocation();
  const { signIn } = UserAuth();

  let from = location.state?.from?.pathname || "/";
  console.log('hey '+from);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    setAuthing(true);
    try {
      await signIn(email, password)
      navigate(from, { replace: true })
    } catch (e) {
      if(e.code==='auth/wrong-password'){setError('Wrong password')}
      if(e.code==='auth/invalid-email'){setError('Invalid e-mail')}
      if(e.code==='auth/user-disabled'){setError('User is disabled')}
      console.log(e.message)
      setAuthing(false);
    }
  };

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.4 }}>
      <div>
        <p>You must loggge in to view the page at {from}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} type='email' />
        </div>
        <div>
          <label>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type='password' />
        </div>
        <div>
          <p style={{color: 'red'}}>{error}</p>
        </div>
        <button type="submit" disabled={authing}>
          Sign In
        </button>
      </form>
    </motion.div>
  );
};

export default Signin;
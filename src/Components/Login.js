import { withStyles } from '@material-ui/styles';
import React from 'react';

import '../styles/LoginStyles.css';
import bg from '../styles/svgs/bg1.svg';

const styles = {
   root: {
      backgroundColor: '#1462aa',
      backgroundImage: `url(${bg})`,
   },
};

const Login = (props) => {
   const { classes } = props;
   return (
      <div className={`${classes.root} wrapper`}>
         <form className='login100-form validate-form'>
            <span className='login100-form-title'> Member Login </span>

            <div
               className='wrap-input100 validate-input'
               data-validate='Valid email is required: ex@abc.xyz'
            >
               <input
                  className='input100'
                  type='email'
                  name='email'
                  placeholder='Email'
                  required
               />
               <span className='focus-input100'></span>
               <span className='symbol-input100'>
                  <i className='fa fa-envelope' aria-hidden='true'></i>
               </span>
            </div>

            <div
               className='wrap-input100 validate-input'
               data-validate='Password is required'
            >
               <input
                  className='input100'
                  type='password'
                  name='pass'
                  placeholder='Password'
                  required
               />
               <span className='focus-input100'></span>
               <span className='symbol-input100'>
                  <i className='fa fa-lock' aria-hidden='true'></i>
               </span>
            </div>

            <div className='container-login100-form-btn'>
               <button className='login100-form-btn'>Login</button>
            </div>

            <div className='ForgotBtns'>
               <span className='txt1'> Forgot </span>
               <a className='forgotPass' href='#'>
                  Username / Password?
               </a>
               <br />
               <button
                  style={{
                     backgroundColor: '#57b846',
                     marginTop: '20px',
                     padding: '12px',
                  }}
               >
                  <a className='createAccount' href='/register'>
                     Create your Account
                     <i
                        className='fa fa-long-arrow-right m-l-5'
                        aria-hidden='true'
                     ></i>
                  </a>
               </button>
            </div>
         </form>
      </div>
   );
};

export default withStyles(styles)(Login);

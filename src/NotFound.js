import React, { Component } from 'react';
import './styles/NotFound.css';
export class NotFound extends Component {
   //    {
   //    height: 100vh;
   //    background: #33cc99;
   //    /* background: red; */
   //    color: #fff;
   //    font-family: 'Open Sans', sans-serif;
   //    max-height: 700px;
   //    overflow: hidden;
   // }
   componentWillMount() {
      document.body.style.backgroundColor = '#33cc99';
      document.body.style.height = '100vh';
      document.body.style.color = `'Open Sans', sans-serif`;
      document.body.style.fontFamily = '#33cc99';
      document.body.style.maxHeight = '700px';
      document.body.style.overflow = 'hidden';
   }

   componentWillUnmount() {
      document.body.style.backgroundColor = '#';
      document.body.style.height = '';
      document.body.style.color = '';
      document.body.style.fontFamily = '';
      document.body.style.maxHeight = '';
      document.body.style.overflow = '';
   }
   render() {
      return (
         <div className='notFound'>
            <div id='clouds'>
               <div className='cloud x1' />
               <div className='cloud x1_5' />
               <div className='cloud x2' />
               <div className='cloud x3' />
               <div className='cloud x4' />
               <div className='cloud x5' />
            </div>
            <div className='c'>
               <div className='_404'>404</div>
               <hr />
               <div className='_1'>THE PAGE</div>
               <div className='_2'>WAS NOT FOUND</div>
               <a className='btn' href='/'>
                  BACK TO EARTH
               </a>
            </div>
         </div>
      );
   }
}

export default NotFound;

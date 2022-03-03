import React from 'react';
import { Link } from 'react-router-dom';

import WrapperError from '../assets/wrappes/Error';
import notFound from '../assets/images/not-found.svg';

export const Error = () => {
  return (
    <WrapperError>
        <div className='containerError'>
          <img src={notFound} className='notFound' />
        </div>
        <h4 className='NotFoundMessage'>Sorry, we are not able to find this page.</h4>
        
    </WrapperError>
  )
}

export default Error;
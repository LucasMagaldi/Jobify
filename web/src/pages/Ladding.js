import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappes/LaddingPage';
import { Logo } from '../components/index';
import main from '../assets/images/main-alternative.svg';

export const Ladding = () => {
  return (
    <Wrapper>
        <Logo/>
        <div className='container page'>
            <div className='info'>
                <h1>
                    Job <span>Tracking</span> App
                </h1>
                <p>
                    Web plataform to manage yours best job positons.
                    Met the best companies in your country and world.
                    Apply to position that companies with you and be happy.
                </p>
                <Link to='/register' className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img'/>
        </div>
    </Wrapper>
  )
}

export default Ladding;
import React from 'react';
import Wrapper from '../assets/wrappes/LaddingPage';

import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

export const Ladding = () => {
  return (
    <Wrapper>
        <nav>
            <img src={logo} alt='logo' className='logo'/>
        </nav>
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
                <button className='btn btn-hero'>Login/Register</button>
            </div>
            <img src={main} alt='job hunt' className='img main-img'/>
        </div>
    </Wrapper>
  )
}

export default Ladding;
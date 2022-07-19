import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../services/api';
import Wrapper from '../assets/wrappes/LaddingPage';
import { Logo } from '../components/index';
import main from '../assets/images/main-alternative.svg';
import mainAlternative from '../assets/images/main.svg';

export const Ladding = () => {



    useEffect(() => {
        fetchData();
        console.log(1000);
    }, []);

    const load = window.addEventListener('load', () => {
        alert(100)
    })
    const imga = document.getElementById('test');
    console.log(imga);

    const MainAlternative = () => {
        imga.src={mainAlternative}
    }

    window.addEventListener('focus', () => {console.log("NotBlur")})
    window.addEventListener('blur', () => {console.log("blue")})

    const fetchData = async () => {
        try {
            const response  = await fetch(`${api}/test`);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

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
            <img src={main} id='test' alt='job hunt' className='img main-img'/>
        </div>
    </Wrapper>
  )
}

export default Ladding;
import React from 'react'

import notFound from '../assets/images/not-found.svg'

export const Error = () => {
  return (
    <div className='container page'>
        <img src={notFound} className='teste' />
    </div>
  )
}

export default Error;
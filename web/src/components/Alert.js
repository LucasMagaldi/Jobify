import React from 'react'
import { useAppContext } from '../context/appContext';


export const Alert = () => {
  const { alertType, alertText } = useAppContext();

  return (
    <div>Alert {alertText}</div>
  )
}

export default Alert;
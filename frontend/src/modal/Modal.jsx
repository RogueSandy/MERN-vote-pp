import React, { useState } from 'react'
import './modal.css'

const Modal = ({msg, isOpen}) => {
 
  if(!isOpen) return null
  
  return (
    <div className='modal'>
        hello {msg}
    </div>
  )
}

export default Modal
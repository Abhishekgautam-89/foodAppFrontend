import React, {Fragment} from 'react'
// import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const BackDrop = (props)=>{
  console.log("backdrop", props)
    // return (<div className={classes.backdrop}/>)
    return (<div onClick={props.onHideCart} className='fixed z-20 bg-[#000000bf] w-[100%] h-[100vh] top-0 left-0'/>)
}

const ModalOverLay = (props)=>{
  // return (<div className={classes.modal} >
      return (<div className='fixed z-30 w-[45%] rounded-xl max-w-[90%] top-[20vh] p-5 left-[25%] bg-white animate__animated animate__fadeInUp ' >
        {/* <div className='' > */}
        {props.children}
        {/* </div> */}
    </div>)
}

const domElement = document.getElementById('overlays')
// console.log(domElement)

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onHideCart={props.onHideCart} />, domElement)}
      {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, domElement)}      
    </Fragment>
  )
}

export default Modal

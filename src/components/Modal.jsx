import React from 'react'

function Modal(props) {
  const setFlg = props.setFlg;
  return (
    <>
      {props.flg === true ?
        <div className='modal'>
          <div className='modal-content'>
            <h2>Modal</h2>
            <p>모달 창</p>
          </div>
          <button onClick={()=>{setFlg(!props.flg)}} >닫기 버튼</button>
        </div>
        :
        null
      }
    </>
    
  )
}

export default Modal
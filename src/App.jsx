import { useState } from 'react'
import './App.css'
// import Modal from './components/modal'
import Tab from './components/Tab';

function App() {
  // const [flg, setFlg] = useState(false);
  const [tab, setTab] = useState(0);
  
  

  return (
    <>
      <h1>zz</h1>
      {/* <>
      { flg  ?
        <Modal flg={flg} setFlg = {setFlg} />
      :
      <button onClick={()=>{setFlg(!flg)}}>모달창 열기</button>
      }
      </> */}
      <div className='tab-ui'>
        <div className='tab-group'>
          <a href='#tab1' onClick={() =>setTab(0)}
          style={ tab === 0 ? {color : 'violet'} : null}>FirstTab</a>
          <a href='#tab2' onClick={() =>setTab(1)}
            style={ tab === 1 ? {color : 'violet'} : null}>SecondTab</a>
          <a href='#tab3' onClick={() =>setTab(2)}
            style={ tab === 2 ? {color : 'violet'} : null}>ThirdTab</a>
        </div>
        <div className='tab-contents'>
          {
            tab === 0 &&
              <article id='#tab1'>
                <h1>First Tab</h1>
                <p>대충 첫번째 탭이라는 아무말</p>
              </article>
              
          }
              { tab === 1 && 
              <article id='#tab2'>
                <h1>Second Tab</h1>
                <p>대충 두번째 탭이라는 아무말</p>
              </article>
              }
              {
              tab === 2 ?
              <article id='#tab3'>
                <h1>Third Tab</h1>
                <p>대충 마지막 탭이라는 아무말</p>
              </article>
              : null
              }
            </div>
        
      </div>
      
      
    </>
  )
}

export default App

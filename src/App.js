import 'antd/dist/antd.css';
import './index.css';
import './App.css';
import { Col, Row, Divider, Empty, Button } from 'antd';
import { useState } from 'react';
// import compenents
import { Side } from './Compenents/Side'
import { MEditor } from './Compenents/MEditor'



function App() {


  const [menu, setMenu] = useState([])
  const [info, setInfo] = useState([])

  const handelOk  = (name) =>{
      setMenu(prev => {
          return [
              ...menu,
              name
          ]
      })
      setInfo(prev => {
        return [
            ...info,
            {
              id: name,
              content: ''
            }
        ]
    })
  }
  const eventName = (i) =>{
    console.log(info)
  }

//   const MenuJSX = () =>{
//     return props.menu.map(item => {
//         return (
//             <Col span={24}> 
//                 <h3 onClick={() => props.handelEvent(item)}> {item} </h3>
//             </Col>
//         )
//     })
//  }

  return (
    <Row className='App'>
      <Col span={4}>
        <Side menu={menu} handelok={handelOk} handelEvent={eventName} />
      </Col>
      <Col span={20} style={{padding: '10px'}}>
        <MEditor />
      </Col>
    </Row>
  );
}

export default App;

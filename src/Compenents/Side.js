import { Col, Row, Divider, Button, Modal } from 'antd';
import { useState } from 'react';

export const Side = (props) => {

    

    //modal
    const [name, setName] = useState('')
    const [visible, setVisible] = useState(false)
    const change  = (e) => setName(e.target.value)

    
    //menu

    const MenuJSX = () =>{
        return props.menu.map(item => {
            return (
                <Col span={24}> 
                    <h3 onClick={() => props.handelEvent(item)}> {item} </h3>
                </Col>
            )
        })
    }

    
    
    
    return (
        <div >
            <Row >
                <Col span={24}>
                    <Button type="link" size='large' onClick={() =>{ setVisible(true)}} style={{width: '100%', marginTop: '15px', color: 'green'}}>
                        Add new Note
                    </Button>
                </Col>
                <Divider />
                <MenuJSX />
                
            </Row>
            
            <Modal title="Basic Modal" visible={visible} onOk={() => { 
                props.handelok(name) 
                setVisible(false)
            }} onCancel={() =>{ setVisible(false)}}>
                <input name='name' placeholder='Enter note name' onChange={change} />
            </Modal>
        </div>
    )
}
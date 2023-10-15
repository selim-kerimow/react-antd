import { Button, Drawer, Table, Alert, Form, Input, Select } from 'antd';
import Column from 'antd/es/table/Column';
import { useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { Option } from 'antd/es/mentions';

interface DrawerComponentProps {
    drawer: boolean,
    onClose: () => void
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({ drawer, onClose }) => {

    const [childrenDrawer, setChildrenDrawer] = useState(false)

    // Redux Toolkit
    const { cart } = useAppSelector(state => state.cartSlice)    

    // total price
    const getTotalPrice = (items: any) => items
        .map((item: any) => item.price)
        .reduce((acc: any, value: any) => acc + value, 0)
    const result = getTotalPrice(cart);

    const formHandler = ( values: any ) => {
      onClose()
      console.log('Success:', values);
    }

  return (
    <>
      <Drawer title="Cart" closable={true} open={drawer} onClose={onClose}>

        {/* Upper Drawer */}
        <Table dataSource={cart} pagination={false}>
            <Column title='Name' dataIndex='title' key='title' />
            <Column title='Price TMT' dataIndex='price' key='price' width='30%'/>
        </Table>
        <Alert message={`Total: ${result} TMT`} type="success" style={{ margin: '15px 0', fontSize: '1rem'}}/>
        <Button type="primary"  onClick={() => setChildrenDrawer(true)} style={{width: '100%'}}> Order </Button>

        {/* Inner Drawer */}
        <Drawer title="Personal Data" width={320} closable={true} open={childrenDrawer} onClose={() => setChildrenDrawer(false)}>
          <Form layout='vertical' onFinish={formHandler}>

            <Form.Item label='Full Name:' name='name' rules={[{ required: true, message: 'Please enter your full name!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label='Phone Number' name='phone' rules={[{ message: 'Please enter valid phone number!', type: 'number'}]}>
              <Input style={{ width: '25%' }} value="+993" disabled />
              <Input style={{ width: '75%' }} required max={8} min={8}/>
            </Form.Item>

            <Form.Item label="City:" name='city' rules={[{ required: true, message: 'Please select your city!' }]}>
              <Select>
                <Option value="Asghabat">Asghabat</Option>
                <Option value="Turkmenbashi">Turkmenbashi</Option>
                <Option value="Mary">Mary</Option>
                <Option value="Dashoguz">Dashoguz</Option>
                <Option value="Charjov">Charjov</Option>
                <Option value="Anew">Anew</Option>
              </Select>
            </Form.Item>

            <Form.Item label='Address:' name='address' rules={[{ required: true, message: 'Please enter your address!' }]}>
              <Input />
            </Form.Item>

            <Button htmlType='submit' type='primary' style={{width: '100%'}}>Confirm Order</Button>
          </Form>
        </Drawer>

      </Drawer>
    </>
  );
};

export default DrawerComponent;
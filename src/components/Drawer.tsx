import { Button, Drawer, Table, Alert } from 'antd';
import Column from 'antd/es/table/Column';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa'
import { useAppSelector } from '../store/hooks';

interface DrawerComponentProps {
    drawer: boolean,
    onClose: () => void
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({ drawer, onClose }) => {

    const [childrenDrawer, setChildrenDrawer] = useState(false)

    const { cart } = useAppSelector(state => state.cartSlice)

    const removeCart = () => {
        
    } 
    
    // total price
    const getTotalPrice = (items: any) => items
        .map((item: any) => item.price)
        .reduce((acc: any, value: any) => acc + value, 0)
    const result = getTotalPrice(cart);

  return (
    <>
      <Drawer title="Cart" closable={true} open={drawer} onClose={onClose}>

        <Table dataSource={cart} pagination={false}>
            <Column title='Name' dataIndex='title' key='title' width='50%'/>
            <Column title='Price TMT' dataIndex='price' key='price' width='20%'/>
            <Column title='Remove' render={() => <FaTrash color='red' onClick={removeCart}/>} key='title' width='20%'/>
        </Table>
        <Alert message={`Total: ${result} TMT`} type="success" style={{ margin: '15px 0', fontSize: '1rem'}}/>

        <Button type="primary" onClick={() => setChildrenDrawer(true)}> Inner Drawer </Button>
        <Drawer
          title="Two-level Drawer"
          width={320}
          closable={true}
          open={childrenDrawer}
          onClose={() => setChildrenDrawer(false)}
        >
          Lower drawer
        </Drawer>

      </Drawer>
    </>
  );
};

export default DrawerComponent;
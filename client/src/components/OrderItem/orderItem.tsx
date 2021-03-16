import './orderItem.css'
import { Order } from '../../interfaces/order';

interface OrderItemProps {
  order: Order
}

const OrderItem: React.FC<OrderItemProps> = ({ order })  => {

  return (
    <div className='orderItem'>
      <p data-testid="order-id">Order ID: {order.id}</p>
      <p data-testid="order-name">Name: {order.clientName}</p>
      <p data-testid="order-address">Address:  {order.clientAddress}</p>
      <p data-testid="order-phone">Phone: {order.clientPhone}</p>
      <p data-testid="order-comments">Comments: {order.comments}</p>

      {order.Dishes?.map((dish) =>
        <div key={dish.id}>
          <p >{dish.title}</p>
        </div>
      )}
    </div>
  )
}

export default OrderItem;
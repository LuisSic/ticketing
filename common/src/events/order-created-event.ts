import { Subjects } from './subjects';
import { OrderStatus } from './Types/order-status';

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    version: number;
    status: OrderStatus;
    userId: string;
    expireAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}

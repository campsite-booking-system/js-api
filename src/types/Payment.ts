import { PaymentMethods } from './values';

interface Payment {
  id: number;
  paymentMethod: PaymentMethods;
  amount: number;
  updatedAt: string;
}

export default Payment;

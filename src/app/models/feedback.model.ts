export interface Feedback {
  id: string;
  barberId: string;
  customerId?: string; // Optional, as feedback can be anonymous
  rating: number; // 1-5
  comment: string;
  createdAt: Date;
}

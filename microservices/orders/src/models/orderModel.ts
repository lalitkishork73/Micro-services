import mongoose, { Document, Schema } from 'mongoose';

export interface Customers {
    CustomerId: string;
    BookId: string;
    initialDate: string;
    deliveryDate: string;
}

export interface CustomersModel extends Customers, Document {}

const CustomerModelSchema = new Schema(
    {
        CustomerId: { type: Schema.Types.ObjectId, required: true, ref: 'customers' },
        BookId: { type: Schema.Types.ObjectId, required: true, ref: 'books' },
        initialDate: { type: String, required: true },
        deliveryDate: { type: String, required: true }
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

export default mongoose.model<CustomersModel>('orders', CustomerModelSchema);

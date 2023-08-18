import mongoose, { Document, Schema } from 'mongoose';

export interface Customers {
    name: string;
    age: string;
    address: string;
}

export interface CustomersModel extends Customers, Document {}

const CustomerModelSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: String, required: true },
        address: { type: String, required: true }
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

export default mongoose.model<CustomersModel>('customers', CustomerModelSchema);

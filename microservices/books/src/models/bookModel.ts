import mongoose, { Document, Schema } from 'mongoose';

export interface Book {
    title: string;
    author: string;
    numberPages: string;
    publisher: string;
}

export interface BookModel extends Book, Document {}

const BookModelSchema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        numberPages: { type: String, required: true },
        publisher: { type: String, required: true }
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

export default mongoose.model<BookModel>('books', BookModelSchema);

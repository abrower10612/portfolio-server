import { Document, InferSchemaType, Schema, model } from 'mongoose';

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: true,
  },
});

export type ContactType = InferSchemaType<typeof ContactSchema> & Document;
export default model<Document & ContactType>('Contact', ContactSchema);

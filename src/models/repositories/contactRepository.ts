import { ContactType } from '../Contact';
import { contactInputSchema } from '../inputSchemas/contact';

export default class ContactRepository {
  public async validateInputs(data: ContactType) {
    try {
      contactInputSchema.parse(data);
    } catch (error: any) {
      const errorMessage = error.errors[0].message || error.message;
      throw new Error(errorMessage);
    }
  }
}

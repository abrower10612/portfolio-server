import { Request, Response } from 'express';
import Contact from '../models/Contact';
import ContactRepository from '../models/repositories/contactRepository';

export const createOne = async (req: Request, res: Response) => {
  const contactSubmissionData = req.body.contactSubmission;

  try {
    const repo = new ContactRepository();
    await repo.validateInputs(contactSubmissionData);

    const contactSubmission = Contact.create({ ...contactSubmissionData });

    res.json({
      contactSubmission,
      message: 'Contact request successfully submitted',
    });
  } catch (error: any) {
    res.json({ error: error.message });
  }
};

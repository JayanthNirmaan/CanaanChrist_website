
'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { z } from 'zod';

const EnquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
});

export async function submitEnquiry(formData: FormData) {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  const validatedFields = EnquirySchema.safeParse({
    name,
    phone,
    message,
  });

  if (!validatedFields.success) {
    return {
      error: 'Invalid input. Please check your data.',
    };
  }

  try {
    await addDoc(collection(db, 'enquiries'), {
      name,
      phone,
      message,
      timestamp: serverTimestamp(),
    });
    return { success: true };
  } catch (e) {
    console.error('Error adding document: ', e);
    return { error: 'Something went wrong. Please try again later.' };
  }
}

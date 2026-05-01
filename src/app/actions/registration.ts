'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { z } from 'zod';

const RegistrationSchema = z.object({
  studentName: z.string().min(2, 'Student name must be at least 2 characters'),
  gradeApplying: z.string().min(1, 'Please select a grade'),
  parentType: z.enum(['Father', 'Mother', 'Guardian']),
  parentName: z.string().min(2, 'Parent name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  previousBoard: z.enum(['CBSE', 'ICSE', 'State Board', 'None/Other']),
});

export async function submitRegistration(formData: FormData) {
  const data = {
    studentName: formData.get('studentName') as string,
    gradeApplying: formData.get('gradeApplying') as string,
    parentType: formData.get('parentType') as 'Father' | 'Mother' | 'Guardian',
    parentName: formData.get('parentName') as string,
    phone: formData.get('phone') as string,
    previousBoard: formData.get('previousBoard') as 'CBSE' | 'ICSE' | 'State Board' | 'None/Other',
  };

  const validatedFields = RegistrationSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      error: 'Invalid input. Please check all fields.',
    };
  }

  try {
    // In a production environment, this Firestore write would trigger a 
    // Cloud Function or a service like Resend/SendGrid to send the email.
    await addDoc(collection(db, 'registrations'), {
      ...data,
      timestamp: serverTimestamp(),
    });
    return { success: true };
  } catch (e) {
    console.error('Error adding registration: ', e);
    return { error: 'Something went wrong. Please try again later.' };
  }
}

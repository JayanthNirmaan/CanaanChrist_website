'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);

    // Simulate a network delay for a realistic feel
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsPending(false);
    setIsSuccess(true);
    
    toast({
      title: "Enquiry Sent",
      description: "Thank you for reaching out to us.",
    });
  }

  if (isSuccess) {
    return (
      <div className="text-center py-12 px-6 space-y-6 animate-in fade-in duration-700">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-2xl font-bold text-primary">Enquiry Submitted!</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Sit back and relax, our school team will contact you!
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSuccess(false)}
          className="rounded-full px-8 mt-4"
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Full Name</label>
          <Input name="name" placeholder="John Doe" required disabled={isPending} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Phone Number</label>
          <Input 
            name="phone" 
            placeholder="9876543210" 
            required 
            disabled={isPending} 
            type="tel"
            pattern="[0-9]{10}"
            maxLength={10}
            title="Please enter a valid 10-digit mobile number"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Message</label>
        <Textarea 
          name="message" 
          placeholder="I would like to know more about..." 
          className="min-h-[120px]" 
          required 
          disabled={isPending}
        />
      </div>
      <Button type="submit" className="w-full h-12 rounded-xl shadow-sm hover:shadow-md transition-all font-bold" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Enquiry"
        )}
      </Button>
    </form>
  );
}


'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { submitEnquiry } from '@/app/actions/enquiry';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);

    const formData = new FormData(event.currentTarget);
    const result = await submitEnquiry(formData);

    setIsPending(false);

    if (result.success) {
      toast({
        title: "Message Sent",
        description: "Thank you for your enquiry. We will get back to you soon.",
      });
      (event.target as HTMLFormElement).reset();
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error || "Failed to send message.",
      });
    }
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
          <Input name="phone" placeholder="+91 98765 43210" required disabled={isPending} />
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
      <Button type="submit" className="w-full" disabled={isPending}>
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

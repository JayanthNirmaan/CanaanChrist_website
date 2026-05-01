'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { submitRegistration } from '@/app/actions/registration';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle2 } from 'lucide-react';

export function RegistrationForm() {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);

    const formData = new FormData(event.currentTarget);
    const result = await submitRegistration(formData);

    setIsPending(false);

    if (result.success) {
      setIsSuccess(true);
      toast({
        title: "Registration Received",
        description: "We have received your application inquiry.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error || "Failed to submit registration.",
      });
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-12 px-6 space-y-6 animate-in fade-in duration-700">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-3xl font-bold text-primary">Application Submitted!</h3>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Sit back and relax, our school team will contact you soon!
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSuccess(false)}
          className="rounded-full px-8"
        >
          Submit another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="studentName">Student Full Name</Label>
          <Input id="studentName" name="studentName" placeholder="Enter student's full name" required disabled={isPending} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="gradeApplying">Grade Applying For</Label>
            <Select name="gradeApplying" required disabled={isPending}>
              <SelectTrigger>
                <SelectValue placeholder="Select Grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Nursery">Nursery</SelectItem>
                <SelectItem value="LKG">LKG</SelectItem>
                <SelectItem value="UKG">UKG</SelectItem>
                {Array.from({ length: 10 }, (_, i) => (
                  <SelectItem key={i + 1} value={`Grade ${i + 1}`}>Grade {i + 1}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="previousBoard">Previous Board</Label>
            <Select name="previousBoard" required disabled={isPending}>
              <SelectTrigger>
                <SelectValue placeholder="Select Board" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="State Board">State Board</SelectItem>
                <SelectItem value="CBSE">CBSE</SelectItem>
                <SelectItem value="ICSE">ICSE</SelectItem>
                <SelectItem value="None/Other">None / Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="parentType">Relationship</Label>
            <Select name="parentType" defaultValue="Father" required disabled={isPending}>
              <SelectTrigger>
                <SelectValue placeholder="Relationship" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Father">Father</SelectItem>
                <SelectItem value="Mother">Mother</SelectItem>
                <SelectItem value="Guardian">Guardian</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="parentName">Parent / Guardian Name</Label>
            <Input id="parentName" name="parentName" placeholder="Enter name" required disabled={isPending} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" required disabled={isPending} />
        </div>
      </div>

      <Button type="submit" className="w-full h-14 text-lg rounded-xl shadow-lg" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Admission Inquiry"
        )}
      </Button>
      <p className="text-[10px] text-center text-muted-foreground">
        Note: This is an initial inquiry form. Formal admission requires a campus visit and document verification.
      </p>
    </form>
  );
}

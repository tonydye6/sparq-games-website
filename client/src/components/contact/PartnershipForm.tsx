import { z } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const partnershipFormSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  title: z.string().min(2, { message: 'Title/Position is required' }),
  email: z.string().email({ message: 'Valid email is required' }),
  phone: z.string().min(5, { message: 'Phone number is required' }),
  university: z.string().min(2, { message: 'University name is required' }),
  department: z.string().min(2, { message: 'Department is required' }),
  interest: z.string().min(1, { message: 'Please select an area of interest' }),
  message: z.string().optional(),
  subscribe: z.boolean().optional(),
});

type PartnershipFormValues = z.infer<typeof partnershipFormSchema>;

const PartnershipForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<PartnershipFormValues>({
    resolver: zodResolver(partnershipFormSchema),
    defaultValues: {
      name: '',
      title: '',
      email: '',
      phone: '',
      university: '',
      department: '',
      interest: '',
      message: '',
      subscribe: false,
    },
  });

  const onSubmit = async (data: PartnershipFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/partnership-inquiry', data);
      toast({
        title: 'Success!',
        description: 'Your partnership inquiry has been submitted. Our team will contact you shortly.',
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit your inquiry. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="partnership-section py-20 lg:py-28 bg-muted" id="partnership-form">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="section-header text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-display mb-4">University <span className="font-neodex italic text-cyan-400 mr-2">Partnership</span>Inquiry</h2>
          <p className="text-lg text-gray-300">Let's explore how Crown U! can benefit your university community</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="partnership-form space-y-6 bg-background p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Full name" 
                          className="bg-muted border-gray-700" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title/Position</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your role at the university" 
                          className="bg-muted border-gray-700" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="Your institutional email" 
                          className="bg-muted border-gray-700" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your contact number" 
                          className="bg-muted border-gray-700" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="university"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>University or Company</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="University name" 
                          className="bg-muted border-gray-700" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g., Athletics, Marketing" 
                          className="bg-muted border-gray-700" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="interest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Area of Interest</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-muted border-gray-700">
                          <SelectValue placeholder="Select Area of Interest" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="licensing">Licensing & Revenue Opportunities</SelectItem>
                        <SelectItem value="fan-engagement">Fan & Student Engagement</SelectItem>
                        <SelectItem value="athlete-nil">Student-Athlete NIL Opportunities</SelectItem>
                        <SelectItem value="brand-awareness">Brand Awareness & Marketing</SelectItem>
                        <SelectItem value="technical">Technical Implementation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Information</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please share any specific questions or information about your partnership interests" 
                        className="bg-muted border-gray-700 min-h-[100px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subscribe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1"
                      />
                    </FormControl>
                    <div className="leading-none">
                      <FormLabel className="text-sm text-gray-300">
                        Keep me updated about partnership opportunities and platform developments
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full py-3 bg-primary hover:bg-primary/80 text-white font-semibold transition duration-300"
                disabled={isSubmitting}
              >
                Submit Partnership Inquiry
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default PartnershipForm;

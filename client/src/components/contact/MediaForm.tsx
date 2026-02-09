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

const mediaFormSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  email: z.string().email({ message: 'Valid email is required' }),
  phone: z.string().min(5, { message: 'Phone number is required' }),
  organization: z.string().min(2, { message: 'Organization name is required' }),
  requestType: z.string().min(1, { message: 'Please select a request type' }),
  deadline: z.string().optional(),
  message: z.string().min(10, { message: 'Please provide details about your request' }),
  pressReleases: z.boolean().optional(),
});

type MediaFormValues = z.infer<typeof mediaFormSchema>;

const MediaForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<MediaFormValues>({
    resolver: zodResolver(mediaFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      organization: '',
      requestType: '',
      deadline: '',
      message: '',
      pressReleases: false,
    },
  });

  const onSubmit = async (data: MediaFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/media-request', data);
      toast({
        title: 'Success!',
        description: 'Your media request has been submitted. Our team will contact you shortly.',
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit your request. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="media-section py-20 lg:py-28 bg-background" id="media-form">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="section-header text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-display mb-4">Media <span className="font-neodex italic text-cyan-400">Request</span></h2>
          <p className="text-lg text-gray-300">For press inquiries, interview requests, or media kit access</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="media-form space-y-6 bg-muted p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
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
                          className="bg-background border-gray-700" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Media Organization</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your publication or outlet" 
                          className="bg-background border-gray-700" 
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
                          placeholder="Your email address" 
                          className="bg-background border-gray-700" 
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
                          className="bg-background border-gray-700" 
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
                  name="requestType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Request Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background border-gray-700">
                            <SelectValue placeholder="Select Request Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="interview">Interview Request</SelectItem>
                          <SelectItem value="press-kit">Press Kit Access</SelectItem>
                          <SelectItem value="statement">Company Statement</SelectItem>
                          <SelectItem value="partnership">Partnership Coverage</SelectItem>
                          <SelectItem value="podcast">Podcast Appearance</SelectItem>
                          <SelectItem value="other">Other Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="deadline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Deadline (if applicable)</FormLabel>
                      <FormControl>
                        <Input 
                          type="date" 
                          className="bg-background border-gray-700" 
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
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Request Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please provide details about your request including your specific needs, target publication date, and any other relevant information" 
                        className="bg-background border-gray-700 min-h-[120px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pressReleases"
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
                        Subscribe to receive Sparq Inc. press releases and media announcements
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
                Submit Media Request
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default MediaForm;

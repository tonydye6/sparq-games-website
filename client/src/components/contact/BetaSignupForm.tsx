import { z } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const betaSignupSchema = z.object({
  firstName: z.string().min(2, { message: 'First name is required' }),
  lastName: z.string().min(2, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Valid email is required' }),
  favoriteSport: z.string().min(1, { message: 'Please select a sport' }),
  terms: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms',
  }),
  updates: z.boolean().optional(),
});

type BetaSignupValues = z.infer<typeof betaSignupSchema>;

const BetaSignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<BetaSignupValues>({
    resolver: zodResolver(betaSignupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      favoriteSport: '',
      terms: false,
      updates: false,
    },
  });

  const onSubmit = async (data: BetaSignupValues) => {
    setIsSubmitting(true);
    try {
      // Exclude terms field from API request as it's only for frontend validation
      const { terms, ...submitData } = data;
      await apiRequest('POST', '/api/beta-signup', submitData);

      // Invalidate beta stats cache to update the counter immediately
      queryClient.invalidateQueries({ queryKey: ['/api/beta-stats'] });

      toast({
        title: 'Success!',
        description: 'You have been added to our beta waitlist.',
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit your application. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const BetaBenefit = ({ text }: { text: string }) => (
    <li className="flex items-start space-x-3">
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary mt-0.5">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
      </svg>
      <span className="text-gray-300">{text}</span>
    </li>
  );

  return (
    <section className="beta-signup-section py-20 lg:py-28 bg-background" id="beta-signup">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="beta-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="beta-info" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl mb-6">Join the <span className="font-neodex italic text-cyan-400 mr-4">Crown U!</span><span className="text-primary">Beta</span></h2>
            <p className="text-lg text-gray-300 mb-8 lead">Be part of the exclusive group shaping the future of collegiate sports gaming</p>

            <div className="beta-benefits mb-8">
              <h3 className="text-xl font-semibold mb-4">Beta Member Benefits:</h3>
              <ul className="space-y-3">
                <BetaBenefit text="Early access to Crown U! platform" />

                <BetaBenefit text="Exclusive beta member tournaments" />
                <BetaBenefit text="Direct feedback channel with development team" />

              </ul>
            </div>


          </div>

          <div className="beta-form bg-muted rounded-xl p-8 lg:p-10 shadow-xl" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-6">Reserve Your Spot</h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your first name" 
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
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your last name" 
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
                  name="favoriteSport"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Favorite College Sport</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background border-gray-700">
                            <SelectValue placeholder="Select Sport" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="football">Football</SelectItem>
                          <SelectItem value="basketball">Basketball</SelectItem>
                          <SelectItem value="baseball">Baseball</SelectItem>
                          <SelectItem value="soccer">Soccer</SelectItem>
                          <SelectItem value="hockey">Hockey</SelectItem>
                          <SelectItem value="lacrosse">Lacrosse</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="checkbox-group space-y-3">
                  <FormField
                    control={form.control}
                    name="terms"
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
                            I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="updates"
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
                            Send me updates about Crown U! and Sparq Inc.
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full py-4 px-6 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition duration-300"
                  disabled={isSubmitting}
                >
                  Join Beta Waitlist
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaSignupForm;
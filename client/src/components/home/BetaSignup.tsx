import { z } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const betaSignupSchema = z.object({
  firstName: z.string().min(2, { message: 'First name is required' }),
  lastName: z.string().min(2, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Valid email is required' }),
  university: z.string().min(2, { message: 'University is required' }),
  favoriteSport: z.string().min(1, { message: 'Please select a sport' }),
  updates: z.boolean().optional(),
});

type BetaSignupValues = z.infer<typeof betaSignupSchema>;

const BetaSignup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<BetaSignupValues>({
    resolver: zodResolver(betaSignupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      university: '',
      favoriteSport: '',
      updates: false,
    },
  });

  const onSubmit = async (data: BetaSignupValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/beta-signup', data);
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
    <li className="group flex items-start space-x-4 p-4 bg-muted/30 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
        <i className="fas fa-check text-white text-sm"></i>
      </div>
      <span className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">{text}</span>
    </li>
  );

  return (
    <section id="beta-signup" className="py-20 lg:py-28 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-primary/50 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div data-aos="fade-up">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold mb-6 shadow-lg">
              <i className="fas fa-star mr-2"></i>
              Limited Access Beta
            </div>
            <h2 className="text-4xl lg:text-5xl font-display mb-6 leading-tight">
              Join the Crown U! <span className="text-cyan-400 font-neodex block lg:inline mt-2 lg:mt-0">BETA</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">Be among the first to experience the future of collegiate sports gaming and help shape the platform that will revolutionize fan engagement.</p>
            
            <div className="mb-10">
              <h3 className="text-2xl font-display font-bold mb-6 text-white">Beta Member Benefits:</h3>
              <ul className="space-y-4">
                <BetaBenefit text="Early access to Crown U! platform" />
                <BetaBenefit text="$50 in bonus credits for gameplay" />
                <BetaBenefit text="Exclusive beta member tournaments" />
                <BetaBenefit text="Direct feedback channel with developers" />
                <BetaBenefit text="Beta member badge and recognition" />
              </ul>
            </div>

          </div>
          
          <div className="bg-gradient-to-br from-muted/80 to-background/60 backdrop-blur-sm rounded-3xl p-10 lg:p-12 shadow-2xl border border-primary/30" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-display font-bold mb-8 text-center text-white">Reserve Your Spot</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  name="university"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Favorite University</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g., University of Michigan" 
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
                          <SelectItem value="softball">Softball</SelectItem>
                          <SelectItem value="volleyball">Volleyball</SelectItem>
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
                
                <div className="space-y-3">

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

export default BetaSignup;

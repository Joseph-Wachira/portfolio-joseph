import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { toast } from 'sonner'; // or custom toast

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send('service_id', 'template_id', data, 'public_key');
      toast.success('Message sent!');
    } catch {
      toast.error('Failed to send message.');
    }
  };

  return (
    <section className="py-20 px-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-gradient mb-8">Get in Touch</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Input placeholder="Your Name" {...register('name')} />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Input placeholder="Email" {...register('email')} />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <Textarea placeholder="Message" rows={5} {...register('message')} />
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </section>
  );
}
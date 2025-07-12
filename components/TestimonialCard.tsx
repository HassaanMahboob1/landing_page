import Image from 'next/image';

type TestimonialCardProps = {
  avatar: string;
  name: string;
  role: string;
  content: string;
};

export default function TestimonialCard({ avatar, name, role, content }: TestimonialCardProps) {
  return (
    <div className="testimonial-card flex flex-col items-center text-center">
      <Image src={avatar} alt={name} width={64} height={64} className="rounded-full mb-4" />
      <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
      <p className="text-gray-500 text-sm mb-2">{role}</p>
      <p className="text-gray-700 mb-2 font-medium">"{content}"</p>
    </div>
  );
} 
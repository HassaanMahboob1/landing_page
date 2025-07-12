import Image from 'next/image';

type FeatureCardProps = {
  icon?: string;
  title: string;
  description: string;
  className?: string;
  bg?: string;
  textAlign?: string;
  shadow?: boolean;
  padding?: string;
};

export default function FeatureCard({ icon, title, description, className = '', bg = 'bg-white', textAlign = 'text-left', shadow = true, padding = 'p-6' }: FeatureCardProps) {
  return (
    <div className={`${bg} rounded-2xl ${padding} ${shadow ? 'shadow-lg' : ''} flex flex-col items-start ${textAlign} ${className}`}>
      {icon ? (
        <Image src={icon} alt={title} width={40} height={40} className="mb-4" />
      ) : (
        <span className="mb-4 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          {/* Placeholder icon */}
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /></svg>
        </span>
      )}
      <h4 className="text-lg font-semibold mb-2 text-gray-900">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
} 
import Image from 'next/image';

type ServiceCardProps = {
  icon?: string;
  title: string;
  description: string;
  className?: string;
  bg?: string;
  textColor?: string;
  shadow?: boolean;
};

export default function ServiceCard({ icon, title, description, className = '', bg = 'bg-[#1a1a2e]', textColor = 'text-white', shadow = false }: ServiceCardProps) {
  return (
    <div className={`${bg} rounded-xl p-6 flex flex-col items-center text-center min-h-[140px] ${textColor} ${shadow ? 'shadow-lg' : ''} ${className}`}>
      {icon ? (
        <Image src={icon} alt={title} width={36} height={36} className="mb-3" />
      ) : (
        <span className="mb-3 w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center">
          {/* Placeholder icon */}
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10" cy="10" r="9" /></svg>
        </span>
      )}
      <h5 className="font-semibold mb-1 text-base">{title}</h5>
      <p className="text-xs opacity-80">{description}</p>
    </div>
  );
} 
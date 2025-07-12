import Image from 'next/image';

type ArticleCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function ArticleCard({ image, title, description }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-start min-h-[120px]">
      <Image src={image} alt={title} width={80} height={60} className="mb-2 rounded" />
      <h6 className="text-base font-semibold mb-1 text-gray-900">{title}</h6>
      <p className="text-gray-600 text-xs">{description}</p>
    </div>
  );
} 
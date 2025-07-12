import Image from 'next/image';

const partners = [
  { src: '/new_images/testportal_logo.png', alt: 'Testportal' },
  { src: '/new_images/alohacamp_logo.png', alt: 'AlohaCamp' },
  { src: '/new_images/mycheckins_logo.png', alt: 'MyCheckins' },
  { src: '/new_images/shapescape_logo.png', alt: 'Shapescape' },
  { src: '/new_images/yordex_logo.png', alt: 'Yordex' },
];

export default function PartnerLogos() {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-6">
      {partners.map((partner) => (
        <div key={partner.alt} className="flex items-center h-12">
          <Image src={partner.src} alt={partner.alt} width={120} height={48} className="object-contain h-12 w-auto" />
        </div>
      ))}
    </div>
  );
} 
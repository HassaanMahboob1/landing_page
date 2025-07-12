type StatisticCardProps = {
  value: string;
  label: string;
};

export default function StatisticCard({ value, label }: StatisticCardProps) {
  return (
    <div className="flex flex-col items-center px-4">
      <span className="text-2xl md:text-3xl font-bold text-white">{value}</span>
      <span className="text-sm md:text-base text-white/80 mt-1">{label}</span>
    </div>
  );
} 
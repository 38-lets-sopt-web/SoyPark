interface DetailStatCardProps {
  label: string;
  value: string;
}

const DetailStatCard = ({ label, value }: DetailStatCardProps) => {
  return (
    <div className="rounded-card border border-border bg-white px-5 py-5">
      <p className="text-sm font-medium text-text-muted">{label}</p>
      <p className="mt-1 text-lg font-bold text-text">{value}</p>
    </div>
  );
};

export default DetailStatCard;

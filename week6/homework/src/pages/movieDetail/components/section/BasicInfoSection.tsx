import { sectionTitleClassName } from "@pages/movieList/constants/commonStyles";

interface BasicInfoItem {
  label: string;
  value: string;
}

interface BasicInfoSectionProps {
  items: BasicInfoItem[];
}

const BasicInfoSection = ({ items }: BasicInfoSectionProps) => {
  return (
    <div className="rounded-(--radius-card) border border-border bg-white px-6 py-6 shadow-card lg:px-8">
      <h2 className={sectionTitleClassName}>기본 정보</h2>
      <div className="divide-y divide-border">
        {items.map((item) => (
          <div
            key={item.label}
            className="grid grid-cols-[90px_minmax(0,1fr)] gap-4 py-4"
          >
            <p className="text-sm font-medium">{item.label}</p>
            <p className="text-base font-medium">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasicInfoSection;

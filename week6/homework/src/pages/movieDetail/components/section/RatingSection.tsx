import { sectionTitleClassName } from "@pages/movieList/constants/commonStyles";
import Button from "../button/Button";

interface RatingSectionProps {
  initialRating?: number;
}

const RatingSection = ({ initialRating }: RatingSectionProps) => {
  return (
    <div className="flex flex-col gap-3 rounded-(--radius-card) border border-border bg-white px-6 py-6 shadow-card lg:px-8">
      <h2 className={sectionTitleClassName}>별점 남기기</h2>
      <p className="text-sm font-semibold text-text-soft">0.5 ~ 10.0</p>
      <input
        className="h-12 w-full rounded-2xl border border-border bg-white px-4 outline-none transition focus:border-black"
        type="number"
        min="0.5"
        max="10.0"
        step="0.5"
        defaultValue={initialRating}
      />
      <div className="flex flex-wrap gap-2">
        <Button>별점 저장</Button>
        <Button variant="secondary">별점 삭제하기</Button>
      </div>
    </div>
  );
};

export default RatingSection;

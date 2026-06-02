import { ratingOptions } from "@pages/movieList/constants/ratingLabels";

export type RatingFilterValue = (typeof ratingOptions)[number]["value"];

interface RatingFilterProps {
  value?: RatingFilterValue;
  onChange: (value: RatingFilterValue) => void;
}

const RatingFilter = ({ value = "all", onChange }: RatingFilterProps) => {
  return (
    <div className="w-full p-2">
      <label className="sr-only" htmlFor="rating-filter">
        별점 필터
      </label>
      <select
        id="rating-filter"
        className="h-10 min-w-40 rounded-card border border-border bg-white px-3 text-sm font-medium outline-none"
        value={value}
        onChange={(event) => onChange(event.target.value as RatingFilterValue)}
      >
        {ratingOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RatingFilter;

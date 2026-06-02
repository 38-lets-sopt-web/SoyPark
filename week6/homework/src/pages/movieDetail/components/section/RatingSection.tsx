import { sectionTitleClassName } from "@pages/movieList/constants/commonStyles";
import Button from "../button/Button";
import { useState } from "react";
import { useMovieRatingMutation } from "@pages/movieDetail/apis/mutaion/postRating";

interface RatingSectionProps {
  movieId: number;
  guestSessionId: string;
  initialRating?: number;
}

const RatingSection = ({
  movieId,
  guestSessionId,
  initialRating,
}: RatingSectionProps) => {
  const [ratingInput, setRatingInput] = useState(
    initialRating !== undefined ? String(initialRating) : "",
  );
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { mutate: saveRating, isPending: isSaving } = useMovieRatingMutation();

  const validateRating = (value: string) => {
    const rating = Number(value);

    if (Number.isNaN(rating)) {
      return "숫자를 입력해주세요.";
    }

    if (rating < 0.5 || rating > 10) {
      return "별점은 0.5에서 10.0 사이여야 합니다.";
    }

    return null;
  };

  const handleSave = () => {
    setSuccessMessage("");
    setErrorMessage("");

    const validationMessage = validateRating(ratingInput);

    if (validationMessage) {
      setErrorMessage(validationMessage);
      return;
    }

    saveRating(
      {
        movie_id: movieId,
        value: Number(ratingInput),
        guest_session_id: guestSessionId,
      },
      {
        onSuccess: (response) => {
          setSuccessMessage(response.status_message);
        },
      },
    );
  };

  return (
    <div className="flex flex-col gap-3 rounded-(--radius-card) border border-border bg-white px-6 py-6 shadow-card lg:px-8">
      <h2 className={sectionTitleClassName}>별점 남기기</h2>
      <p className="text-sm font-semibold text-text-soft">0.5 ~ 10.0</p>
      <input
        className="h-12 w-full rounded-2xl border border-border bg-white px-4 outline-none transition focus:border-black"
        type="number"
        min="0.5"
        max="10.0"
        value={ratingInput}
        onChange={(e) => setRatingInput(e.target.value)}
      />
      <div className="flex flex-wrap gap-2">
        <Button onClick={handleSave} disabled={isSaving}>
          {isSaving ? "저장 중..." : "별점 저장"}
        </Button>
        <Button variant="secondary">별점 삭제하기</Button>
      </div>

      {errorMessage ? (
        <p className="text-sm font-medium text-red-500">{errorMessage}</p>
      ) : null}

      {successMessage ? (
        <p className="text-sm font-medium text-accent">{successMessage}</p>
      ) : null}
    </div>
  );
};

export default RatingSection;

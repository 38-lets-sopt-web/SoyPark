import { sectionTitleClassName } from "@pages/movieList/constants/commonStyles";
import Button from "../button/Button";
import { useState } from "react";
import { useMovieRatingMutation } from "@pages/movieDetail/apis/mutaions/postRating";
import { ERROR_MESSAGE } from "@pages/movieDetail/constants/errorMessage";
import { useMovieRatingDeleteMutation } from "@pages/movieDetail/apis/mutaions/deleteRating";

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
  const { mutate: deleteRating, isPending: isDeleting } =
    useMovieRatingDeleteMutation();

  const validateRating = (value: string) => {
    const rating = Number(value);

    if (Number.isNaN(rating)) {
      return ERROR_MESSAGE.IS_NOT_A_NUMBER;
    }

    if (rating < 0.5 || rating > 10) {
      return ERROR_MESSAGE.RATING_OUT_OF_BOUNDS;
    }

    return null;
  };

  const requestData = {
    movie_id: movieId,
    value: Number(ratingInput),
    guest_session_id: guestSessionId,
  };

  const handleSave = () => {
    setSuccessMessage("");
    setErrorMessage("");

    const validationMessage = validateRating(ratingInput);

    if (validationMessage) {
      setErrorMessage(validationMessage);
      return;
    }

    saveRating(requestData, {
      onSuccess: (response) => {
        setSuccessMessage(response.status_message);
      },
    });
  };

  const handleDelete = () => {
    setSuccessMessage("");
    setErrorMessage("");

    const validationMessage = validateRating(ratingInput);

    if (validationMessage) {
      setErrorMessage(validationMessage);
      return;
    }

    deleteRating(
      {
        movie_id: movieId,
        guest_session_id: guestSessionId,
      },
      {
        onSuccess: (response) => {
          setSuccessMessage(response.status_message);
          setRatingInput("");
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
        <Button onClick={handleSave} disabled={isSaving || isDeleting}>
          {isSaving ? "저장 중..." : "별점 저장"}
        </Button>
        <Button
          variant="secondary"
          onClick={handleDelete}
          disabled={isDeleting || isSaving}
        >
          {isDeleting ? "삭제 중..." : "별점 삭제하기"}
        </Button>
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

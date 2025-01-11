import { StarIcon } from "@/icons";

const StarRating = ({ rating }: { rating: number }) => {
  const maxStars = 5;
  const starArray = Array.from({ length: maxStars }, (_, i) => i + 1);

  return (
    <>
      {starArray.map((_, index) => {
        const fillPercentage = Math.max(0, Math.min(1, rating - index)) * 100;

        return <StarIcon key={index} percentage={fillPercentage} />;
      })}
    </>
  );
};

export default StarRating;

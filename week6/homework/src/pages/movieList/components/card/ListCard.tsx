interface ListCardProps {
  title: string;
  description: string;
  imageUrl: string;
  releaseDate: string;
}

const ListCard = ({
  title,
  description,
  imageUrl,
  releaseDate,
}: ListCardProps) => {
  return (
    <article className="w-full overflow-hidden rounded-(--radius-card) border border-border bg-white shadow-card transition-transform duration-300 hover:scale-[1.03]">
      <div className="aspect-3/4 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="space-y-3 px-5 py-5">
        <h2 className="line-clamp-2 text-xl font-bold text-black">{title}</h2>
        <p className="text-sm text-text-soft">{releaseDate}</p>
        <p className="line-clamp-3 text-[15px] text-text-soft">{description}</p>
      </div>
    </article>
  );
};

export default ListCard;

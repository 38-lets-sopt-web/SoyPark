import ListCard from "./components/card/ListCard";

const MovieListPage = () => {
  return (
    <div className="flex min-h-screen flex-col gap-10 px-40 py-10">
      <h1 className="text-3xl font-bold">Movie Explorer</h1>
      <section>별점 필터링</section>
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ListCard
          title="The Shawshank Redemption"
          description="Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
          imageUrl="https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg"
          releaseDate="1994-09-22"
        />
        <ListCard
          title="The Godfather"
          description="The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
          imageUrl="https://m.media-amazon.com/images/I/41+eK8zBwQL._AC_.jpg"
          releaseDate="1972-03-24"
        />
        <ListCard
          title="The Dark Knight"
          description="When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice."
          imageUrl="https://m.media-amazon.com/images/I/51EbJjlLJGL._AC_.jpg"
          releaseDate="2008-07-18"
        />
      </section>
    </div>
  );
};

export default MovieListPage;

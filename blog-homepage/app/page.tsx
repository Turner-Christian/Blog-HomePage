import ArticleCard from "./components/ArticleCard";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="mx-auto">
      <NavBar />
      <div className="grid grid-cols-1 justify-center md:grid-cols-1 lg:grid-cols-4 lg:px-5">
        <ArticleCard
          title={"Lorem Ipsum Dolor Sit Amet"}
          author={"John Doe"}
          content={"This is the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. of the article."}
          description={"This is a brief description of the article."}
          date={"2023-10-01"}
          src={"/images/laptop.jpg"}
          alt={"An image of the article"}
        />
        <ArticleCard
          title={"Lorem Ipsum Dolor Sit Amet"}
          author={"John Doe"}
          content={"This is the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. of the article."}
          description={"This is a brief description of the article."}
          date={"2023-10-01"}
          src={"/images/sunset.jpg"}
          alt={"An image of the article"}
        />
        <ArticleCard
          title={"Lorem Ipsum Dolor Sit Amet"}
          author={"John Doe"}
          content={"This is the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. of the article."}
          description={"This is a brief description of the article."}
          date={"2023-10-01"}
          src={"/images/mall.jpg"}
          alt={"An image of the article"}
        />
        <ArticleCard
          title={"Lorem Ipsum Dolor Sit Amet"}
          author={"John Doe"}
          content={"This is the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. of the article."}
          description={"This is a brief description of the article."}
          date={"2023-10-01"}
          src={"/images/controller.jpg"}
          alt={"An image of the article"}
        />
        <ArticleCard
          title={"Lorem Ipsum Dolor Sit Amet"}
          author={"John Doe"}
          content={"This is the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. of the article."}
          description={"This is a brief description of the article."}
          date={"2023-10-01"}
          src={"/images/vinyl.jpg"}
          alt={"An image of the article"}
        />
        <ArticleCard
          title={"Lorem Ipsum Dolor Sit Amet"}
          author={"John Doe"}
          content={"This is the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. of the article."}
          description={"This is a brief description of the article."}
          date={"2023-10-01"}
          src={"/images/lightHouse.jpg"}
          alt={"An image of the article"}
        />
        <ArticleCard
          title={"Lorem Ipsum Dolor Sit Amet"}
          author={"John Doe"}
          content={"This is the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. of the article."}
          description={"This is a brief description of the article."}
          date={"2023-10-01"}
          src={"/images/coffee.jpg"}
          alt={"An image of the article"}
        />
        <ArticleCard
          title={"Lorem Ipsum Dolor Sit Amet"}
          author={"John Doe"}
          content={"This is the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}
          description={"This is a brief description of the article."}
          date={"2023-10-01"}
          src={"/images/randomItems.jpg"}
          alt={"An image of the article"}
        />
      </div>
    </div>
  );
}

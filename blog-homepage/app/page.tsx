import ArticleCard from "./components/ArticleCard";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';

// Manually setting ID's for the articles
// This is just for demonstration purposes, in a real application I would fetch this data from an API or database
export default function Home() {
  return (
    <div className="mx-auto bg-slate-950">
      <NavBar />
      <div className="grid grid-cols-1 justify-center md:grid-cols-1 lg:grid-cols-4 lg:px-5">
        <ArticleCard
          id={1}
          title={"Lorem Ipsum Dolor Sit Amet"}
          author={"John Doe"}
          content={"This is the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. of the article."}
          description={"This is a brief description of the article."}
          date={"2023-10-01"}
          src={"/images/office.jpg"}
          alt={"An image of the article"}
        />
        <ArticleCard
          id={2}
          title={"Lorem Ipsum Dolor Sit Amet"}
          author={"John Doe"}
          content={"This is the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. of the article."}
          description={"This is a brief description of the article."}
          date={"2023-10-01"}
          src={"/images/sunset.jpg"}
          alt={"An image of the article"}
        />
        <ArticleCard
          id={3}
          title={"Lorem Ipsum Dolor Sit Amet"}
          author={"John Doe"}
          content={"This is the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. of the article."}
          description={"This is a brief description of the article."}
          date={"2023-10-01"}
          src={"/images/mall.jpg"}
          alt={"An image of the article"}
        />
        <ArticleCard
          id={4}
          title={"Lorem Ipsum Dolor Sit Amet"}
          author={"John Doe"}
          content={"This is the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. of the article."}
          description={"This is a brief description of the article."}
          date={"2023-10-01"}
          src={"/images/controller.jpg"}
          alt={"An image of the article"}
        />
        <ArticleCard
          id={5}
          title={"Lorem Ipsum Dolor Sit Amet"}
          author={"John Doe"}
          content={"This is the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. of the article."}
          description={"This is a brief description of the article."}
          date={"2023-10-01"}
          src={"/images/vinyl.jpg"}
          alt={"An image of the article"}
        />
        <ArticleCard
          id={6}
          title={"Lorem Ipsum Dolor Sit Amet"}
          author={"John Doe"}
          content={"This is the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. of the article."}
          description={"This is a brief description of the article."}
          date={"2023-10-01"}
          src={"/images/lightHouse.jpg"}
          alt={"An image of the article"}
        />
        <ArticleCard
          id={7}
          title={"Lorem Ipsum Dolor Sit Amet"}
          author={"John Doe"}
          content={"This is the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. of the article."}
          description={"This is a brief description of the article."}
          date={"2023-10-01"}
          src={"/images/coffee.jpg"}
          alt={"An image of the article"}
        />
        <ArticleCard
          id={8}
          title={"Lorem Ipsum Dolor Sit Amet"}
          author={"John Doe"}
          content={"This is the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}
          description={"This is a brief description of the article."}
          date={"2023-10-01"}
          src={"/images/randomItems.jpg"}
          alt={"An image of the article"}
        />
        <ArticleCard
          id={9}
          title={"Lorem Ipsum Dolor Sit Amet"}
          author={"John Doe"}
          content={"This is the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}
          description={"This is a brief description of the article."}
          date={"2023-10-01"}
          src={"/images/laptop.jpg"}
          alt={"An image of the article"}
        />
      </div>
      <Footer />
    </div>
  );
}

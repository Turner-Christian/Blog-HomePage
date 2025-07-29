import ArticleCard from "./components/ArticleCard";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="mx-auto flex-col">
      <NavBar />
      <ArticleCard
        title={"This is a test"}
        author={"John Doe"}
        content={"This is the content of the article."}
        description={"This is a brief description of the article."}
        date={"2023-10-01"}
        src={"https://picsum.photos/200/300"}
        alt={"An image of the article"}
      />
    </div>
  );
}

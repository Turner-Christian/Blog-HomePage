
import NavBar from "@/app/components/NavBar"
import Footer from "@/app/components/Footer"

type ArticleCardProps = {
    id : number;
    title: string;
    author?: string;
    content?: string;
    description?: string;
    date?: string;
    src?: string;
    alt?: string;
}

export default function Page() {
    return (
        <div>
            <NavBar />
            <Footer />
        </div>
    )
}
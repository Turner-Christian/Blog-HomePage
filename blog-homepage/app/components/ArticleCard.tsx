import Image from "next/image";
import laptopImg from "@/public/images/laptop.jpg";

type ArticleCardProps = {
  title: string;
  author?: string;
  content?: string;
  description?: string;
  date?: string;
  src?: string;
  alt?: string;
};

const imageSize = {
    width: 400,
    height: 150,
}

export default function ArticleCard({
    title,
    author,
    content,
    description,
    date,
    src,
    alt
}: ArticleCardProps) {

    return(
        <div className="flex flex-col m-8 p-4 bg-gray-800 rounded-2xl md:mx-30 md:mt-10">
            {/* IMAGE */}
            <div className="flex justify-center">
                <Image
                    src={src ?? laptopImg}
                    alt={alt ?? "Article image"}
                    width={imageSize.width}
                    height={imageSize.height}
                    className="rounded-2xl md:max-w-2xl md:flex-grow object-cover"
                />
            </div>
            {/* TITLE, AUTHOR, DATE */}
            <h1 className="text-xl font-bold mt-4">{title}</h1>
            <div className="flex space-x-1 italic">
                <p className="text-xs pl-3 text-lime-500">{author}</p>
                <p className="pl-3">-</p>
                <p className="text-xs pl-3 text-lime-500">{date}</p>
            </div>

                <hr className="border-t border-lime-500 my-4"/>
            <div>
                <p>{description}</p>
                <p className="mt-2 text-sm px-4">{content}</p>
            </div>
        </div>
    );
}
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type ArticleCardProps = {
  title: string;
  author?: string;
  content?: string;
  description?: string;
  date?: string;
  src?: string | StaticImport;
  alt?: string;
};

const imageSize = {
    width: 350,
    height: 300,
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
        <div className="flex flex-col m-4 p-4 bg-gray-800 rounded">
            {/* TODO: Add image loading skeleton */}
            {/* TODO: Fix The image aspect ratio */}
            {/* TODO: Center the picture */}
            <div>
                <Image
                    src={src ?? "https://picsum.photos/200/200"}
                    alt={alt ?? "Article image"}
                    width={imageSize.width}
                    height={imageSize.height}
                />
            </div>
            <h1 className="text-xl font-bold">{title}</h1>
            <div className="flex space-x-1 italic">
                <p className="text-sm pl-3">{author}</p>
                <p className="pl-3">-</p>
                <p className="text-sm pl-3">{date}</p>
            </div>
        </div>
    );
}
import { cn } from "../../../lib/utils";
import { Marquee } from "../ui/Marquee";

const reviews = [
  {
    name: "Github",
    img: "/assets/tools/github.png",
  },
  {
    name: "Figma",
    img: "/assets/tools/figma.png",
  },
  {
    name: "Golang",
    img: "/assets/tools/golang.png",
  },
  {
    name: "NodeJS",
    img: "/assets/tools/nodejs.png",
  },
  {
    name: "NextJS",
    img: "/assets/tools/nextjs.png",
  },
  {
    name: "Tailwind",
    img: "/assets/tools/tailwind.png",
  },
  {
    name: "ReactJS",
    img: "/assets/tools/reactjs.png",
  },
  {
    name: "Wordpress",
    img: "/assets/tools/wordpress.png",
  },
  {
    name: "Postman",
    img: "/assets/tools/postman.png",
  },
  {
    name: "Javascript",
    img: "/assets/tools/js.png",
  },
  {
    name: "Python",
    img: "/assets/tools/python.png",
  },
  {
    name: "PostgreSQL",
    img: "/assets/tools/postgresql.png",
  },
  {
    name: "Git",
    img: "/assets/tools/git.png",
  },
  {
    name: "CSS",
    img: "/assets/tools/css.png",
  },
];

const shuffledReviews = [...reviews].sort(() => Math.random() - 0.5);

const chunkSize = Math.ceil(shuffledReviews.length / 3);

const firstRow = shuffledReviews.slice(0, chunkSize);
const secondRow = shuffledReviews.slice(chunkSize, chunkSize * 2);
const thirdRow = shuffledReviews.slice((chunkSize * 2) / 3);

const ReviewCard = ({ img, name, body }) => {
  return (
    <figure
      className={cn("relative  cursor-pointer overflow-hidden rounded-xl  p-4")}
    >
      <div className="flex flex-col items-center">
        <img width="50" alt="" src={img} />
        <div className="flex flex-col mt-4">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s]">
        {thirdRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}

import CurrentTime from "./TvTime";

export default function SwiperInfo({ title, link }) {
  return (
    <>
      <div className=" slideHeading z-40 relative bg-blue-900 bg-opacity-95 h-[25%] w-[90%]">
        <div className="DisplayTime">
          <CurrentTime />
          <h1 className="text-stone-100 text-2xl">PROJECTS</h1>
        </div>
        <div className="DisplayChannel">
          <h1 className="text-stone-300 bold text-2xl border-b px-2">
            {title}
          </h1>
          <p className="text-stone-300 flex gap-1 items-center hover:bg-blue-950 transition-colors duration-[0.5]">
            <span className="text-4xl text-green-400">•</span> GitHub Repo:
            <a
              href={link}
              target="blank"
              className="hover:text-stone-400 transition-all duration-[0.5]"
            >
              Click Here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

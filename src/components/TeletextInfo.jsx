import CurrentTime from "./TvTime";
export default function TeletextInfo() {
  return (
    <>
      <div className="w-full rounded-[60px] h-full bg-stone-900 flex flex-col px-5 gap-4">
        <div className="flex flex-row w-full px-10 items-center justify-between">
          <h1 className="text-stone-100 text-2xl bg-blue-900">TELETEXT</h1>
          <CurrentTime />
        </div>
        <div>
            <h1 className="text-yellow-400 text-7xl bg-blue-950">NEWS</h1>
            <p className="text-yellow-400 flex flex-row items-center gap-2">HEADLINES <div className="bg-red-700 w-[90%] h-1"></div></p>
        </div>
        <div>
            <h1 className="text-stone-100 text-2xl">ABOUT ME:</h1>
            <p  className="text-stone-100 text-2xl">Endrit Pali | Web Dev</p>
            <p  className="text-stone-100 ">I am a frontend Web developer</p>
                <h3 className="text-blue-900 text-2xl">My skillset is:</h3>
            <ul className="text-[18px] text-blue-900 grid grid-cols-2 list-disc  px-5">
                <li>Html</li>
                <li>Css</li>
                <li>Js(beginner)</li>
                <li>ReactJs(learning)</li>
                <li>Sass</li>
                <li>BEM methodology</li>
                <li>TailwindCss(learning)</li>
            </ul>
        </div>
      </div>
    </>
  );
}

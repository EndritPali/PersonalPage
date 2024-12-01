import { NAVTEXT } from "../Data";
import CurvedText from "./CurvedTextTest";


export default function Nav({handleSwitch}) {
  return (
    <div className="mt-2 border-4 rounded-md border-stone-950 bg-stone-950 bg-opacity-40 z-30 p-3   w-full   text-stone-100 ">
      <div className="flex flex-row  justify-between">
        <div className=" z-3 flex flex-col justify-center items-start">
          <p className=" text-6xl"> Endrit Pali.</p>
          <p className="px-1">Web Dev.</p>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center">
          <div className="line border-gray-400 border-2 border-dotted w-[400px] h-[10px] bg-stone-950"></div>
          <div className="line border-gray-400 border-2 border-dotted w-[400px] h-[10px] bg-stone-950"></div>
          <div className="line border-gray-400 border-2 border-dotted w-[400px] h-[10px] bg-stone-950"></div>
          <div className="line border-gray-400 border-2 border-dotted w-[400px] h-[10px] bg-stone-950"></div>
       
        </div>
        <div>
          <div className=" flex justify-center items-center">
            <ul className="buttons opacity-80 flex flex-row  gap-3">
              <li className="text-xl text-center hover:text-stone-600">
                <a href="#">
                  <CurvedText header={NAVTEXT[0].header} />
                </a>
                  <button  onClick={() => handleSwitch(1)} className=" indicator rounded-[50%] p-5 bg-stone-100 relative">
                  </button>
              </li>
              <li className="text-xl text-center  hover:text-stone-600">
                <a href="#">
                  <CurvedText header={NAVTEXT[1].header} />
                </a>
                  <button  onClick={() => handleSwitch(2)} className="indicator relative rounded-[50%]  p-5 bg-stone-100 ">
                    {/* <div className="bg-stone-900 w-[25px] h-[10px] mt-[-3px] absolute "></div> */}
                  </button>
              </li>
              <li className="text-xl text-center hover:text-stone-600">
                <a href="#">
                  <CurvedText header={NAVTEXT[2].header} />
                  <button  onClick={() => handleSwitch(3)}  className="indicator rounded-[50%]  relative p-5 bg-stone-100 ">
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

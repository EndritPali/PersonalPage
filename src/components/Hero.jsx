import backImage from "../assets/9bkzj8.gif";
import Projects from "./Projects";
export default function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${backImage})` }}
      className="heroWrapper flex justify-center items-center flex-col h-[100vh] bg-cover font-leagueSpartan "
    >
        {/* bg-stone-700 opacity-50 */}
      
        <Projects />
    </div>
  );
}

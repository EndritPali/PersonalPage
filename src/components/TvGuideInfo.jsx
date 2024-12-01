export default function TvGuideInfo() {
  return (
    <>
      <div className="h-full w-full rounded-[60px] bg-stone-950 flex flex-col justify-center gap-1  items-center py-3">
        <div className="flex flex-row z-40 w-[80%] bg-stone-900  p-3 border-2 justify-between items-start">
          <div>
            <h1 className="text-3xl text-stone-100">Tv Guide</h1>
            <p className="text-stone-100 text-2xl">Contact Me:</p>
          </div>
        </div>
        <div className="flex flex-row  w-[80%] gap-1  z-40">
          <div className="bg-blue-500 h-full w-[30%] border-2 flex  flex-col items-center justify-center">
            <div className="text-stone-100 flex flex-col w-full items-center gap-5 ">
              <div className="starburst gap-2">
                <i className="fab fa-instagram text-[20px] "></i>
                <a href="https://www.instagram.com/endritpali_/?next=%2F" target="blank" className="text-[20px] bold">CLICK HERE!!!</a>
              </div>
              <div className="starburst gap-2">
                <i className="fab fa-github text-[25px]"></i>
                <a href="https://github.com/EndritPali" target="blank" className="text-[20px] bold">CLICK HERE!!!</a>
              </div>
              <div className="starburst gap-2">
                <i className="fab fa-linkedin text-[25px]"></i>
                <a href="https://www.linkedin.com/in/endrit-pali-8510a82b1/" target="blank" className="text-[20px] bold">CLICK HERE!!!</a>
              </div>
            </div>
          </div>
          <div className="w-[70%] flex flex-col justify-start">
            <form className="flex flex-col gap-1" action="https://formspree.io/f/mjvnwkov" method="post">
              <div className="flex flex-row gap-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name.."
                  className="w-[50%] bg-stone-900  border-white border-2 p-2 hover:bg-stone-800 transition-colors duration-[0.5]"
                />
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name.."
                  className="w-[50%]  bg-stone-900  border-white border-2  p-2 hover:bg-stone-800 transition-colors duration-[0.5]"
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email..."
                  className="bg-stone-900  p-2 border-2 hover:bg-stone-800 transition-colors duration-[0.5]"
                />
                <textarea
                  name="textarea"
                  id="textarea"
                  placeholder="Enter Message..."
                  className="py-5 px-2 bg-stone-900  border-2 hover:bg-stone-800 transition-colors duration-[0.5]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-stone-900 border-2 hover:bg-stone-800 transition-colors duration-[0.5] text-stone-100 p-3"
              >
                {" "}
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

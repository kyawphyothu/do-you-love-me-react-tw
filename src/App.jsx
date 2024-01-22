import React, { useEffect, useState } from 'react'
import gifs from "./data/gifts"

export default function App() {
  const [noBtnPosition, setNoBtnPosition] = useState({position: "", top: "", left: ""})
  const [randomPicId, setRandomPicId] = useState(0)
  const [isYes, setIsYes] = useState(false)

  // const randomPicId = Math.ceil(Math.random()*7);
  // const tailwindCssClasses = ["1/2", "1/3", "1/4", "2/3", "2/4", "3/4"]
  const tailwindCssClasses = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,20,24,28, 32,36,40,44, 48,52]

  const handleClickNo = () => {
    setNoBtnPosition({position: "absolute", top: `${Math.floor(Math.random()*90)}%`, left: `${Math.floor(Math.random()*90)}%`});
  }

  const handleClickYes = () => {
    setIsYes(true)
  }

  useEffect(() => {
    setRandomPicId(Math.ceil(Math.random()*7));
  }, [])

  return (
    <>
      <div className="bg-gray-200 min-h-screen flex justify-center items-center relative">
        <div className='md:container mx-auto p-4 flex justify-center items-center flex-col'>
            <header className="absolute top-0 py-6 bg-gray-300 w-full text-center">
              <p className=" font-Pacifico text-3xl text-pink-600 font-bold ">Love Me</p>
            </header>

            <div className="font-Dancing-Script text-5xl font-semibold text-pink-600 text-center mb-6">Do You Love Me?</div>
            {
              gifs.filter(i => i.id===randomPicId).filter(i => i.type===(isYes?"done":"ask")).map(i => {
                return (
                  <img src={i.src} key={i.id} className="h-52 rounded-xl shadow-xl" />
                )
              })
            }
            {
              isYes ? (
                <>
                  <p className="font-Pacifico text-rose-500 text-3xl mt-6">I knew it</p>
                </>
              ):(
                <>
                  <div className="mt-6">
                    <button className=" font-Pacifico bg-pink-500 text-white text px-4 py-2 rounded-lg hover:bg-pink-600 mr-8" onClick={handleClickYes}>Yes</button>
                    <button className={`font-Pacifico bg-pink-500 text-white text px-4 py-2 rounded-lg hover:bg-pink-600`} style={noBtnPosition} onClick={handleClickNo}>No</button>
                  </div>
                </>
              )
            }

            <footer className=" absolute bottom-0 text-center text-gray-900 pb-3">
              <p className="font-mono">Make With 💗 by <a href='https://kyawphyothu.com' target='_blank' className="underline font-semibold decoration-dotted hover:decoration-solid">Kyaw Phyo Thu</a></p>
            </footer>
        </div>
      </div>
    </>
  )
}
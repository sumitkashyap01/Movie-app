import React from 'react'

const PlaceholderUI = () => {
  return (
    <>
      <div className="left flex gap-6 items-center">
        <div className="poster flex flex-col gap-5 justify-center shrink-0">
          <div className="w-70 h-100 rounded-2xl bg-(--surface) animate-pulse"></div>

          {/* <div className='flex gap-4'> */}
          {/* <div>
                  <p>{movieDetails?.runtime}m</p>
                  <p>Runtime</p>
                </div>
                <div></div> */}
          <div className="flex items-center  gap-5 bg-(--surface) rounded-2xl border-white/20 border-2 px-5 py-2">
            <div className="w-20 h-20 bg-(--surface) rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="info h-full flex-1 flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="w-25 h-12 rounded-4xl bg-(--surface) animate-pulse"></div>
              <div className="w-25 h-12 rounded-4xl bg-(--surface) animate-pulse"></div>
              <div className="w-25 h-12 rounded-4xl bg-(--surface) animate-pulse"></div>
            </div>
            <div className="w-75 h-20 bg-(--surface) rounded-xl"></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-10 w-1 bg-(--accent) "></div>
            
          </div>
          
          <hr className="" />
          <div className="flex justify-around ">
            <div className="flex flex-col ">
              
            </div>
            <div className="flex flex-col">
              
            </div>
            <div className="flex flex-col">

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaceholderUI

import React from "react";



export const ShowData = ({showUserData,index,setIndex}) => {

const handlePrevBtn =()=>{
    if(index>1)
    {
      setIndex(index-1)
    }
}

const handleNextBtn = ()=>{
   setIndex(index+1)
}

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="flex flex-wrap   gap-5 ">{showUserData}</div>

      <div className="flex gap-2 justify-center items-center pb-10 ">
        <button
          onClick={handlePrevBtn}
          className="bg-amber-300 active:scale-95 p-2 w-20 rounded text-black font-bold "
        >
          Prev
        </button>
        <h4>Page{index}</h4>
        <button
          onClick={handleNextBtn}
          className="bg-amber-300 active:scale-95 p-2 w-20 rounded text-black font-bold "
        >
          Next
        </button>
      </div>
    </div>
  );
};

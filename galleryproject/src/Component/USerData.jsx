import React from "react";

export const UserData = ({elem,idx})=>{
    return(
         <div key={idx} className="m-6">
          <a href={elem.url} target="_blank">
            <div className="h-40  w-44 overflow-hidden rounded-xl ">
              <img
                src={elem.download_url}
                className="h-full  w-full object-cover "
                alt=""
              />
            </div>
          </a>
          <h2 className="font-bold text-lg">{elem.author}</h2>
        </div>
    )
}
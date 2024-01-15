import React from "react";
import { Currency } from "@/types/types";


const PublicApi: React.FC<{ data: Currency }> = ({ data }) => {
  // console.log(data);
  return (
    <div className="flex flex-col justify-between p-4">
       <div>
          <h1>{data.code}</h1>
          <p>{data.rate}</p>
          <p>{data.description}</p>
        </div> 
    </div>
  )
};

export default PublicApi;

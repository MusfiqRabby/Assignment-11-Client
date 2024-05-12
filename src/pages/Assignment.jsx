import { useLoaderData } from "react-router-dom";
import CreateCard from "../components/CreateCard/CreateCard";
import { useState } from "react";

const Assignment = () => { 
   
   const newCreates = useLoaderData();

   const [creates, setCreates] = useState(newCreates)
   
    return (
        <div className="m-10">
            <h1 className="text-center font-poppins mb-4 text-5xl">All Assignment: {creates.length}</h1>
        <div className="grid grid-cols-3 gap-4">
            {
                creates.map(create => <CreateCard key={create._id}
                create={create}
                cards={creates}
                setCards={setCreates}>
                </CreateCard>)
            }
        </div>


        </div>
    );
};

export default Assignment;
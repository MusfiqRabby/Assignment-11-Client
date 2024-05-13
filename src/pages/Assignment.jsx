import { useLoaderData } from "react-router-dom";
import CreateCard from "../components/CreateCard/CreateCard";
import { useState } from "react";

const Assignment = () => { 
   const newCreates = useLoaderData();
   const [creates, setCreates] = useState(newCreates)
   
    return (
        <div className="m-10">
             <div>
            <select
              value=''
              name='category'
              id='category'
              className='border p-4 rounded-lg'
            >
              <option value=''>Assignment Difficulty Level</option>
              <option value='Easy'>Easy</option>
              <option value='Medium'>Medium</option>
              <option value='Hard'>Hard</option>
            </select>
          </div>
            
            
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
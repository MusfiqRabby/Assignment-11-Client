import { useLoaderData } from "react-router-dom";

const Assignment = () => { 
   
   const create = useLoaderData();

   
    return (
        <div>
            <h1 className="text-3xl">All Assignment: {create.length}</h1>
        </div>
    );
};

export default Assignment;
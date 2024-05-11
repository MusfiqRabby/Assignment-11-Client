import { useLoaderData } from "react-router-dom";
import CreateCard from "../components/CreateCard/CreateCard";

const Assignment = () => { 
   
   const creates = useLoaderData();

   
    return (
        <div className="m-10">
            <h1 className="text-center font-poppins text-4xl">All Assignment: {creates.length}</h1>
        <div className="grid grid-cols-3 gap-4">
            {
                creates.map(create => <CreateCard key={create._id}
                create={create}>

                </CreateCard>)
            }
        </div>


        </div>
    );
};

export default Assignment;
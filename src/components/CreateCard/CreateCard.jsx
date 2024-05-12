/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
 

    const CreateCard = ({create, cards, setCards}) => {
       const {user} = useContext(AuthContext)
    const {_id, title, image, category, marks, email} = create;

    const handleDelete = (_id) => {
      if(email !== user?.email){
        return  Swal.fire({
          icon: 'error',
          title: 'Oops..',
          text: 'This Assignment is no posted by you!'
        })
      }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           fetch(`http://localhost:5000/create/${_id}`, {
            method: 'DELETE'
           })
           .then(res => res.json())
           .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your assignment has been deleted.",
                    icon: "success"
                  });
            const remaining = cards.filter(cof => cof._id !== _id) 
            setCards(remaining);
            }
           })

            }
          });
    }



    return (
        <div>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-full h-[200px]" src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title font-poppins">
      {title}
    </h2>
    <div className="flex font-poppins">
    <p>Difficulty Level: {category}</p>
    <p>Marks: {marks}</p>
    </div>
    <div className="card-actions justify-end">
    
    <Link to={`/viewdetails/${_id}`}>
    <button className="btn btn-info">view</button>
    </Link>

    <Link to={`/updatepage/${_id}`}>
    <button className="btn bg-green-500">Update</button>
     </Link>
   
    <button onClick={() => handleDelete(_id)}
     className="btn bg-yellow-500">Delete</button>


    </div>
  </div>
</div>

     </div>
    );
};

export default CreateCard;
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const CreateCard = ({create}) => {

    const {title, image, category, marks} = create

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
    <button className="btn btn-info">view</button>
    <button className="btn bg-green-500">Update</button>
    <button className="btn bg-yellow-500">Delete</button>
    </div>
  </div>
</div>

     </div>
    );
};

export default CreateCard;
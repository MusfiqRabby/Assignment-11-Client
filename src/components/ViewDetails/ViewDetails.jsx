import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    
    const users = useLoaderData();

    const {_id, title, image, category, marks, description, date} = users;

    return (
       
        <div className='my-10 min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
      <div className='mx-auto bg-green-200 px-4 py-5 w-[600px] rounded-md shadow-md md:min-h-[370px]'>
      <div className='mx-auto rounded-lg overflow-hidden w-[500px] h-[300px]'>
              <img src={image} alt='' />
            </div>
        <div>
          <h1 className='mt-2 font-poppins text-3xl font-semibold text-gray-800 '>
            {title}
          </h1>
          <p className=' text-lg text-gray-600 '>
           {description}
          </p>
        <div className='flex gap-5 p-0'>
            <p className='mt-6 text-lg font-bold text-gray-600 '>
            Marks: {marks}
          </p>
          <p className='mt-6 text-lg font-bold text-gray-600 '> 
          Difficulty Level: {category}
            </p>
          <p className='mt-6 text-lg font-bold text-gray-600 '> 
             Date: {date}
            </p>
            </div> 
        </div>
        <div className="ml-96 my-3 ">
        <Link to={`/takeassignmet/${_id}`}>
        <button className="btn btn-active btn-secondary">Take Assignment</button>
        </Link>
        </div>
      </div>
    </div>
  )
};

export default ViewDetails;
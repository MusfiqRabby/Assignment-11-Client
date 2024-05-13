import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const CreateAssignment = () => {
   const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const handleCreateAssignment = event => {
    event.preventDefault()

    const form = event.target
    const title = form.title.value;
    const date = form.date.value;
    const image = form.image.value;
    const category = form.category.value;
    const marks = form.marks.value;
    const description = form.description.value;
    const email = user.email;
    const newCreate = {title, image, email, category, marks, date, description}
    console.log(newCreate)

    fetch('https://assignment-related-project-server.vercel.app/create',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCreate)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      navigate('/assignment')
      if(data.insertedId){
        Swal.fire({
          title: 'Success',
          text: 'User Create Assignment Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })


  }

  return (
        <div className="bg-red-200">
     <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-lg '>
        <h2 className='text-lg font-semibold text-gray-700 capitalize font-poppins'>
        Create Assignment
        </h2>

        <form onSubmit={handleCreateAssignment}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 '>
            <div>
              <label className='text-gray-700 ' htmlFor='job_title'>
              Assignment Title
              </label>
              <input
                name='title'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 ' htmlFor=''>
              thumbnail Image URL
              </label>
              <input
                name='image'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700 ' htmlFor='category'>
              assignment difficulty level
              </label>
              <select
                name='category'
                className='border p-2 rounded-md'
              >
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
              </select>
            </div>
            <div>
              <label className='text-gray-700 ' htmlFor='marks'>
              Marks
              </label>
              <input
                name='marks'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700' htmlFor='date'>Date</label>
              <input type="date" name='date' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
  
            </div>
          </div>
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 ' htmlFor='description'>
              Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
            ></textarea>
          </div>
          <div className='flex justify-end mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
        </div>
    );
};

export default CreateAssignment;
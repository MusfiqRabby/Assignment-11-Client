import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";



const TakeAssignment = () => {
  const {user} = useContext(AuthContext)
  
  const handleFormSubmission = event => {
    event.preventDefault()
    const form = event.target;
    const pdf = form.pdf.value;
    const bio = form.bio.vlaue;
    const email = user?.email;
    const status = 'Pending';
    const docData = {
        pdf, bio, email, status, 
    }
    console.table(docData)
  }
  
  
    return (
        <div>
        <div className="card my-5 ml-96 w-96 shadow-2xl bg-gray-100">
      <form onSubmit={handleFormSubmission} className="card-body  ">
        <div >
        <label className="label">
            <span className="label-text">Pdf Link</span>
          </label>
          <input type="text" name="pdf" id="pdf" placeholder=" your assignment pdf" className="input input-bordered w-full max-w-xs" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Please writing some bio</span>
          </label>
          <textarea type="text" name="bio" id="bio" placeholder="Bio" className="textarea textarea-bordered textarea-sm w-full max-w-xs" required></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent">Submit</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default TakeAssignment;


const TakeAssignment = () => {
    return (
        <div>
        <div className="card my-5 ml-96 w-96 shadow-2xl bg-gray-100">
      <form className="card-body  ">
        <div >
          <input type="email" placeholder=" your assignment pdf" className="input input-bordered w-full max-w-xs" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <textarea placeholder="Bio" className="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>
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
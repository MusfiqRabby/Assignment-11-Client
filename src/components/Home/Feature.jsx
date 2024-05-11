
const Feature = () => {
    return (
        <div >
      <div className="mt-16 font-bold text-center hover:underline font-poppins text-4xl mb-8">
        <h2>Highlighted <span className="text-red-500">Features</span></h2>
     </div>
     <div className="flex gap-16 mt-4 mb-16  ">
    <div className="card w-96 bg-grray-100 shadow-xl hover:scale-[1.05] transition-all">
  <figure>
    <img src="https://i.ibb.co/Khn8VYm/back-school-concept-with-slate-leaning-against-wall.jpg" alt="" />
    </figure>
  <div className="card-body">
    <h2 className="card-title">
      Presentation!
    </h2>
    <p>Join us for an engaging presentation exploring the future of renewable energy. Discover the latest advancements in sustainable technologies and their impact on global energy transition.</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Study</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    <div className="card w-96 bg-base-100 shadow-xl hover:scale-[1.05] transition-all">
  <figure>
    <img  src="https://i.ibb.co/DMNxtD4/paperwork.jpg" alt="" />
    </figure>
  <div className="card-body">
    <h2 className="card-title">
    Plan Your Report
    </h2>
    <p>Outline the structure of your report, including sections such as Introduction, Methodology if applicable Findings, Discussion, and Conclusion.</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">metting</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    <div className="card w-96 bg-base-100 shadow-xl hover:scale-[1.05] transition-all">
  <figure>
    <img src="https://i.ibb.co/LgtCGy2/close-up-still-life-hard-exams.jpg" alt="" />
    </figure>
  <div className="card-body">
    <h2 className="card-title">
    Read Instructions Carefully
    </h2>
    <p>Before starting the test, carefully read through all instructions and questions. Allocate your time wisely, focusing on questions you feel confident about first before tackling more challenging ones</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Group</div> 
      <div className="badge badge-outline">Discuss</div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Feature;
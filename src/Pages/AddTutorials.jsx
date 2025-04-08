import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import Swal from "sweetalert2";

const AddTutorials = () => {
  const { user } = useContext(AuthContext);
  const name = user?.displayName;
  const email = user?.email;

  const handleAddTutorials = e =>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const addData = Object.fromEntries(formData.entries())
    addData.TutorImage = user?.photoURL
    addData.review = parseInt(addData.review) 
    console.log(addData)
    fetch('https://assignment-11-server-six-gamma.vercel.app/',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(addData)

    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: "Success!",
          text: "Tutorial added successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        e.target.reset()
      }
    }

  
  )}

  return (
    <div className="w-9/12 mx-auto">
      <h1 className="text-3xl font-bold uppercase text-center py-5">add tutorial</h1>

      <div>
        <form onSubmit={handleAddTutorials} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
          <label className="fieldset-label">Name</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Your Name"
            value={name}
            
readOnly
            
          />
          </div>
          <div>
          <label className="fieldset-label">Email</label>
          <input
            type="email"
            name="tutor_email"
            className="input w-full"
            placeholder="Email"
            value={email}
            readOnly
            
          />
          </div>
        <div>
        <label className="fieldset-label">Tutorial Image</label>
          <input
            type="url"
            name="image"
            className="input w-full"
            placeholder="Tutorial Photo Url"
          />
        </div>
        <div>
        <label className="fieldset-label">Language</label>
        <select
            defaultValue="Pick a Language"
            name="language"
            className="select"
            required
          >
            <option disabled={true}>Pick a Language</option>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
            <option>Chinese</option>
            <option>Japanese</option>
            <option>Korean</option>
            <option>Italic</option>
            <option>Arabic</option>
          </select>
        </div>
        <div>
        <label className="fieldset-label">Price</label>
          <input
            type="number"
            name="price"
            className="input w-full"
            placeholder="Input Price"
          />
        </div>
        <div>
        <label className="fieldset-label">Review</label>
          <input
            type="number"
            name="review"
            className="input w-full"
            placeholder="Input Review"
            value={0}
            readOnly
          />
        </div>
    <div className="col-span-full">
    <label className="fieldset-label">Description</label>
          <textarea name="description" className="w-full h-50 border-2 p-3 border-gray-400" placeholder="Write Tutorial Description"></textarea>

    </div>

    <button type="submit" className="btn col-span-1 text-white md:col-span-2 lg:col-span-3 w-full bg-[#ff006e] hover:bg-[#ff0095]">Submit</button>

        </form>
      </div>
    </div>
  );
};

export default AddTutorials;

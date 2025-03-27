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
      }
    }

  
  )}

  return (
    <div>
      <h1>add tutorials</h1>

      <div>
        <form onSubmit={handleAddTutorials} className="fieldset">
          <label className="fieldset-label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your Name"
            value={name}
readOnly
            
          />
          <label className="fieldset-label">Email</label>
          <input
            type="email"
            name="tutor_email"
            className="input"
            placeholder="Email"
            value={email}
            readOnly
            
          />
          <label className="fieldset-label">Tutorial Image</label>
          <input
            type="url"
            name="image"
            className="input"
            placeholder="Tutorial Photo Url"
          />
          <label className="fieldset-label">Language</label>
          <input
            type="text"
            name="language"
            className="input"
            placeholder="Input Language"
          />
          <label className="fieldset-label">Price</label>
          <input
            type="number"
            name="price"
            className="input"
            placeholder="Input Price"
          />
          <label className="fieldset-label">Price</label>
          <textarea name="description" className="w-100 h-50 border-2 border-black" placeholder="Write Tutorial Description"></textarea>
          <label className="fieldset-label">Review</label>
          <input
            type="number"
            name="review"
            className="input"
            placeholder="Input Price"
            defaultValue={0}
          />
          <button type="submit" className="btn btn-ghost">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddTutorials;

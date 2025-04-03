
import AuthContext from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';

const UpdateTutorial = () => {

    
    const oldTutorial = useLoaderData()

    const {_id, name, tutor_email, image, language, price, description, review, TutorImage}= oldTutorial

    const handleUpdateTutorials = e =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const updateData = Object.fromEntries(formData.entries())
        console.log(updateData)
        updateData.TutorImage = TutorImage
        updateData.review = parseInt(updateData.review)
        fetch(`https://assignment-11-server-six-gamma.vercel.app/tutor/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
    
        })
        .then((res)=>res.json())
        .then((data)=>{
          if(data.modifiedCount > 0){
            Swal.fire({
              title: "Success!",
              text: "Tutorial Updated successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        }
    
      
      )}
    return (
        <div className='w-9/12 mx-auto'>
            <h1 className="text-3xl font-bold uppercase text-center py-5">Update tutorial</h1>
            <div>
            <form onSubmit={handleUpdateTutorials} className="fieldset grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
            value={tutor_email}
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
            defaultValue={image}
          />
      </div>
      <div>
      <label className="fieldset-label">Language</label>
          <input
            type="text"
            name="language"
            className="input w-full"
            placeholder="Input Language"
            defaultValue={language}
          />
      </div>
<div>
<label className="fieldset-label">Price</label>
            <input
              type="number"
              name="price"
              className="input w-full"
              placeholder="Input Price"
              defaultValue={price}
            />
</div>
<div>
<label className="fieldset-label">Review</label>
          <input
            type="number"
            name="review"
            className="input w-full"
            placeholder="Input Price"
            value={review}
            readOnly
          />
</div>
<div className='col-span-full'> 
<label className="fieldset-label ">Description</label>
<textarea name="description" defaultValue={description} className="w-full h-50 p-3 border-2 border-black" placeholder="Write Tutorial Description"></textarea>
</div>

<button type="submit" className="btn col-span-1 text-white md:col-span-2 lg:col-span-3 w-full bg-[#ff006e] hover:bg-[#ff0095]">Update</button>
        </form>
            </div>
        </div>
    );
};

export default UpdateTutorial;
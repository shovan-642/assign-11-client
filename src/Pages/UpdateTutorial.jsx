
import AuthContext from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const UpdateTutorial = () => {

    
    const oldTutorial = useLoaderData()

    const {_id, name, tutor_email, image, language, price, description, review, TutorImage}= oldTutorial

    console.log(oldTutorial)







    const handleUpdateTutorials = e =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const updateData = Object.fromEntries(formData.entries())
        console.log(updateData)
        fetch(`https://assignment-11-server-six-gamma.vercel.app/tutor/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
    
        })
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data)
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
        <div>
            <h1>Update Tutorial</h1>
            <div>
            <form onSubmit={handleUpdateTutorials} className="fieldset">
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
            value={tutor_email}
            readOnly
            
          />
          <label className="fieldset-label">Tutorial Image</label>
          <input
            type="url"
            name="image"
            className="input"
            placeholder="Tutorial Photo Url"
            defaultValue={image}
          />
          <label className="fieldset-label">Language</label>
          <input
            type="text"
            name="language"
            className="input"
            placeholder="Input Language"
            defaultValue={language}
          />
          <label className="fieldset-label">Price</label>
          <input
            type="number"
            name="price"
            className="input"
            placeholder="Input Price"
            defaultValue={price}
          />
          <label className="fieldset-label">Price</label>
          <textarea name="description" defaultValue={description} className="w-100 h-50 border-2 border-black" placeholder="Write Tutorial Description"></textarea>
          <label className="fieldset-label">Review</label>
          <input
            type="number"
            name="review"
            className="input"
            placeholder="Input Price"
            value={review}
            readOnly
          />
          <button type="submit" className="btn btn-ghost">Submit</button>
        </form>
            </div>
        </div>
    );
};

export default UpdateTutorial;
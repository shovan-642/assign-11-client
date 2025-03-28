
import { useLoaderData,  } from 'react-router-dom';
import Tutor from '../Component/Tutor';

const FindTutors = () => {

        const categoryTutor = useLoaderData()


    return (
        <div>
            {
                categoryTutor.map((tutor, idx)=><Tutor key={idx} tutor={tutor}></Tutor>)
            }
        </div>
    );
};

export default FindTutors;

import { useLoaderData,  } from 'react-router-dom';

const FindTutors = () => {

        const categoryTutor = useLoaderData()

    return (
        <div>
            {
                categoryTutor.map((tutor, idx)=><h1 key={idx}>{tutor.name}</h1>)
            }
        </div>
    );
};

export default FindTutors;
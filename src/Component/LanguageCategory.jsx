import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaBookOpen, FaGlobeAmericas, FaWineGlass, FaLandmark, FaPagelines, FaToriiGate, FaHeadphones, FaPizzaSlice, FaLanguage } from "react-icons/fa";
import { Link } from "react-router-dom";

const category = [
  { title: "English Tutors", language: "English", logo: <FaBookOpen />, total_tutors: 32 },
  { title: "Spanish Tutors", language: "Spanish", logo: <FaGlobeAmericas />, total_tutors: 19 },
  { title: "French Tutors", language: "French", logo: <FaWineGlass />, total_tutors: 14 },
  { title: "German Tutors", language: "German", logo: <FaLandmark />, total_tutors: 10 },
  { title: "Chinese Tutors", language: "Chinese", logo: <FaPagelines />, total_tutors: 9 },
  { title: "Japanese Tutors", language: "Japanese", logo: <FaToriiGate />, total_tutors: 18 },
  { title: "Korean Tutors", language: "Korean", logo: <FaHeadphones />, total_tutors: 7 },
  { title: "Italian Tutors", language: "Italian", logo: <FaPizzaSlice />, total_tutors: 20 },
  { title: "Arabic Tutors", language: "Arabic", logo: <FaLanguage />, total_tutors: 13 }
];
  

const LanguageCategory = () => {
  return (
    <div className="w-8/12 mx-auto py-14">
      <div className="cart-container grid grid-cols-3 gap-5">
        {
            category.map((cat,idx)=>(
                <div key={idx} className="card bg-base-100 card-xs shadow-2xl">
                <div className="card-body text-center">
                    <div className="mx-auto text-3xl border border-[#ff006e] p-3 rounded-xl text-[#ff006e]">{cat.logo}</div>
                  <h2 className="card-title font-light text-2xl mx-auto">{cat.title}</h2>
                  <p className="text-gray-500 text-base">
                    {cat.total_tutors} Tutors
                  </p>
                  <div className="justify-end card-actions">
                    <Link to={`/find-tutors/${cat.language}`}><button className="btn btn-primary bg-[#ff006e] border-0"><FaChevronRight /></button></Link>
                  </div>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default LanguageCategory;

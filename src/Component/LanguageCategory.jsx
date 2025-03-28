import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaBookOpen, FaGlobeAmericas, FaWineGlass, FaLandmark, FaPagelines, FaToriiGate, FaHeadphones, FaPizzaSlice, FaLanguage } from "react-icons/fa";
import { Link } from "react-router-dom";

const category = [
    { title: "English Tutors", language: "English", logo: <FaBookOpen /> },
    { title: "Spanish Tutors", language: "Spanish", logo: <FaGlobeAmericas /> },
    { title: "French Tutors", language: "French", logo: <FaWineGlass /> },
    { title: "German Tutors", language: "German", logo: <FaLandmark /> },
    { title: "Chinese Tutors", language: "Chinese", logo: <FaPagelines /> },
    { title: "Japanese Tutors", language: "Japanese", logo: <FaToriiGate /> },
    { title: "Korean Tutors", language: "Korean", logo: <FaHeadphones /> },
    { title: "Italian Tutors", language: "Italian", logo: <FaPizzaSlice /> },
    { title: "Arabic Tutors", language: "Arabic", logo: <FaLanguage /> }
  ];
  

const LanguageCategory = () => {
  return (
    <div>
      <div className="cart-container">
        {
            category.map((cat,idx)=>(
                <div key={idx} className="card w-96 bg-base-100 card-xs shadow-sm">
                <div className="card-body">
                    <div>{cat.logo}</div>
                  <h2 className="card-title">{cat.title}</h2>
                  <p>
                    A card component has a figure, a body part, and inside body there
                    are title and actions parts
                  </p>
                  <div className="justify-end card-actions">
                    <Link to={`/find-tutors/${cat.language}`}><button className="btn btn-primary"><FaChevronRight /></button></Link>
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

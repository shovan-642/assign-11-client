import { key } from "localforage";
import React from "react";
import { FaBookOpen, FaFacebook, FaGlobeAmericas, FaHeadphones, FaInstagram, FaLandmark, FaLanguage, FaPagelines, FaPizzaSlice, FaToriiGate, FaWineGlass, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";



const category = [
  { title: "English Tutors", language: "English", logo: <FaBookOpen />, total_tutors: 32 },
  { title: "Spanish Tutors", language: "Spanish", logo: <FaGlobeAmericas />, total_tutors: 19 },
  { title: "French Tutors", language: "French", logo: <FaWineGlass />, total_tutors: 14 },
  { title: "German Tutors", language: "German", logo: <FaLandmark />, total_tutors: 10 },
  { title: "Chinese Tutors", language: "Chinese", logo: <FaPagelines />, total_tutors: 9 },
  { title: "Japanese Tutors", language: "Japanese", logo: <FaToriiGate />, total_tutors: 18 },
  { title: "Korean Tutors", language: "Korean", logo: <FaHeadphones />, total_tutors: 7 },
  { title: "Italian Tutors", language: "Italic", logo: <FaPizzaSlice />, total_tutors: 20 },
  { title: "Arabic Tutors", language: "Arabic", logo: <FaLanguage />, total_tutors: 13 }
];

const Footer = () => {

    



  return (
    <div className="pt-24">
      <div className="footer-container">
        <footer className="footer sm:footer-horizontal bg-[#323F44] text-white p-10">
          <aside>
          <a className="btn btn-ghost text-2xl text-[#ff006e]">EduSync</a>
            <p>
              A Language Tutor Webiste
              <br />
              Providing reliable tutor since 2007
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Tutors</h6>
            {category.map((cat, idx) => (
              <Link key={idx} className="font-bold hover:underline" to={`/find-tutors/${cat.language}`}>{cat.language} Tutors</Link>
            ))}

          </nav>
          <nav>
            <h6 className="footer-title">Follow Us</h6>
            <a href="http://www.facebook.com" target="blank" className="link link-hover flex gap-2 items-center"><FaFacebook className="text-[#ff006e] text-base"></FaFacebook> <span>Facebook</span></a>
            <a href="http://www.youtube.com" target="blank" className="link link-hover flex gap-2 items-center"><FaYoutube className="text-[#ff006e] text-base"></FaYoutube> <span>Youtube</span></a>
            <a href="http://www.x.com" target="blank" className="link link-hover flex gap-2 items-center"><FaX className="text-[#ff006e] text-base"></FaX> <span>X</span></a>
            <a href="http://www.instragram.com" target="blank" className="link link-hover flex gap-2 items-center"><FaInstagram className="text-[#ff006e] text-base"></FaInstagram> <span>Instragram</span></a>

          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

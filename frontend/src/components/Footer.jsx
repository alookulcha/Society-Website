import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center w-full mb-10">
      <footer className="bg-white text-black pt-10 pb-6 border-2 border-gray-300 rounded-3xl w-[90%] md:w-[80%] mt-10 p-6 md:p-10">
        <div className="flex flex-col md:flex-row w-full justify-between items-center mb-10 md:mb-20">
          <div className="flex gap-4 mb-6 md:mb-0">
            <img
              src={logo}
              onClick={() => navigate('/')}
              alt="GDSC Thapar Logo"
              className="h-6 cursor-pointer"
            />
            <h2 className="font-bold text-gray-800">GDSC Thapar</h2>
          </div>
          <button
            className="bg-black text-white px-6 md:px-8 py-2 rounded-3xl hover:text-black hover:bg-white transition-all hover:border-2 hover:border-black"
            onClick={() => {
              document.querySelector("#form").scrollIntoView({ behavior: "smooth" });
            }}
          >
            FORM LINK
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-5 gap-2 w-full md:w-[60%] mb-6">
          <div>
            <h1 className="text-gray-600 font-bold lg:mb-4">PROJECTS</h1>
            <div className="lg:block hidden">
              <div className="text-sm font-semibold text-gray-500">
                <a href="#">PROJ1</a>
              </div>
              <div className="text-sm font-semibold text-gray-500">
                <a href="#">PROJ2</a>
              </div>
              <div className="text-sm font-semibold text-gray-500">
                <a href="#">PROJ3</a>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-gray-600 font-bold">DEPARTMENTS</h1>
          </div>
          <div>
            <h1 className="text-gray-600 font-bold">EVENTS</h1>
          </div>
          <div>
            <h1 className="text-gray-600 font-bold">ALUMNI</h1>
          </div>
          <div>
            <h1 className="text-gray-600 font-bold">TEAM</h1>
          </div>
        </div>
        <p className="text-gray-500 text-xs  lg:text-sm font-medium text-center md:text-left">
          Developed by GDSC Thapar.<p> Copyright by GDSC Thapar</p>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
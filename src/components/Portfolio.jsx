import React from "react";
import birthday from "../assets/birthdayAlerts.jpg";
import training   from "../assets/books.jpg";
import frontrol from "../assets/frontrol.PNG"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: birthday,
      link:"",
    },
    {
      id: 2,
      src: training,
      link:"https://training-management.onrender.com/",
    },
    {
      id: 3,
      src: frontrol,
      link:"https://webapp-frontend-aecom-p1w2.azurewebsites.net/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=>{window.open(`${link}`,"self")}}>
                  Open            
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

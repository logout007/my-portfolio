import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({setShowtoast}) => {
  const form = useRef();


const onSend = (e)=>{
  const serviceID = 'default_service';
  const templateID = 'template_fuyikff';
  const publicID = 'xecY9UcmX9PNv9OAp';

  e.preventDefault();
  let input1 = document.getElementById('input1');
  let input2 = document.getElementById('reply_to');
  let input3 = document.getElementById('input3');

  emailjs.sendForm(serviceID, templateID, form.current, publicID)
    .then((result) => {
        console.log(result.text);
        setShowtoast(true)
        window.scrollTo({  top:0,
          behavior: 'smooth',}); 
        input3.value = "";
        input2.value = "";
        input1.value = "";
    }, (error) => {
        console.log(error.text);
    });
}


  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
          ref={form}
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              id='input1'
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="reply_to"
              id="reply_to"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              id='input3'
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" onClick={onSend}>
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

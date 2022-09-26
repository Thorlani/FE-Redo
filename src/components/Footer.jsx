import React from "react";
import { Link } from "react-router-dom";
import twitter from "../assets/twitter.svg"
import whatsapp from "../assets/whatsapp.svg"
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[1px] bg-black"></div>
      <div className="w-full h-fit px-[8%] py-[4%] flex flex-col md:flex-row justify-between items-center">
        <div className='w-[25%]'>
          <Link to={'/'}>
            <img src={Logo} width={250} height={250} alt="Belovedthorlani" className='rounded-[50%] object-cover' />
          </Link>
        </div>
        <div className='w-full md:w-[25%]'>
          <ul className="mt-[40px] md:mt-0">
            <li className='font-medium text-base md:text-2xl text-center'>
              Company
            </li>
            <li className='mt-[25px] text-center'>
              <Link to={'/about'}>
                About Us
              </Link>
            </li>
            <li className='mt-[25px] text-center'>
              <Link to={'/contact'}>
                Contact Us
              </Link>
            </li>
            <li className='mt-[25px] text-center'>
              <Link to={'/privacy'}>
                Privacy Policies
              </Link>
            </li>
            <li className='mt-[25px] text-center'>
              <Link to={'/terms'}>
                Terms and Condition
              </Link>
            </li>
            <li className='mt-[25px] text-center'>
              © Copyright 2022, All Rights Reserved
            </li>
          </ul>
        </div>
        <div className='w-full md:w-[25%]'>
          <p className='text-center lg:text-left my-[15px] w-[100%] break-words'>For any complaint, collaboration or support contact our admin via our mail davidthorlani@gmail.com</p>
          <div className='flex justify-center lg:justify-start'>
              <div className='flex justify-between place-items-center w-[100px]'>
                <a href='https://wa.me/+2348096551572?text=Hello%2C%20I%20am%20messaging%20from%20Belovedthorlani.'>
                  <img src={whatsapp} width={30} height={30} alt="WhatsApp" className='cursor-pointer' />
                </a>
                <a href='https://twitter.com/Thorlanii'>
                  <img src={twitter} width={30} height={30} alt="Twitter" className='cursor-pointer' />
                </a>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
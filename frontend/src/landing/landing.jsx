import React, { useState, useEffect } from 'react';
import { BsFillSunFill, BsMoonFill, BsCheck } from 'react-icons/bs';
import GirlImg from '../assets/img/girl.png';

const Hero = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector('html');
    if (localStorage.getItem('theme') === 'dark') {
      html.classList.add('dark');
      setTheme('dark');
    } else {
      html.classList.remove('dark');
      setTheme('light');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (localStorage.getItem('theme') === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <section className='min-h-[740px] w-full bg-heroLight bg-cover bg-center bg-no-repeat overflow-hidden dark:bg-heroDark'>
       
      <div className='container mx-auto px-4 lg:px-0'>
       
        <header className='flex items-center justify-between py-8'>
        <div></div>
          <button
            onClick={handleThemeSwitch}
            className='p-4 bg-accent text-white rounded-full w-12 h-12 flex justify-center items-center'
          >
            {theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />}
          </button>
        </header>
        <div className='flex flex-col items-center lg:flex-row min-h-[740px]'>
          <div className='flex-1 flex flex-col justify-center items-start'>
            <h1 className='text-5xl text-primary font-bold mb-6 leading-[60px] dark:text-white'>
              <br />
              <span className='text-accent'>Study Repo</span>
            </h1>
            <p className='font-light text-grey mb-12 max-w-[597px] dark:text-white'>
            Study repo is a great way for teachers to share their resources with students and for students to get the help they need to succeed in their exams.            </p>
            <div className='flex flex-col gap-y-6 mb-12'>
              <div className='flex items-center gap-x-2'>
                <div >
                </div>
               
              </div>
              <div className='flex items-center gap-x-2'>
                <div >
                </div>
               
              </div>
            </div>
            <button className='btn'>Start Learning!</button>
          </div>
          <div className='hidden lg:flex self-end'>
            <img src={GirlImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
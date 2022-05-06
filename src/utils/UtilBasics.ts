import { useState, useEffect } from 'preact/hooks';

const useStringStep = (str: string, num: number) => {
  const [ word, setWord ] = useState(str);
  const [ letter, setLetter ] = useState('');

  useEffect(() => {
    let count = 0; 
    const size = word.length;
    setLetter('');

    const initStep = setInterval(() => {
      // check 
      if(size === count){
       count = 0;
       setLetter('');
      }else{
        setLetter((prev) => prev + word[count]);
        count++;
      }
    }, num);

    return () => clearInterval(initStep); 
  }, [word]);

  return { setWord, letter };
};

const useScrollY = (offset = 0) => {
  const [ scroll, setScroll ] = useState(false);

  useEffect(() => {
    const scrollBtn = () => {
      const dirY = window.scrollY;
      if(dirY > offset) setScroll(true);
      else setScroll(false);
    };

    document.addEventListener('scroll', scrollBtn, {passive: true});
    return () => document.removeEventListener('scroll', scrollBtn);
  }, []);

  return scroll;
};

const addClassTheme = (value) => {
  value && (document.body.classList.remove('dark'), 
            localStorage.setItem('theme','light'));
  !value && (document.body.classList.add('dark'),
            localStorage.setItem('theme','dark'));
};

const checkLocalTheme = () => {
  if(!localStorage.getItem('theme')) localStorage.setItem('theme','light');
  return (localStorage.getItem('theme') === 'light');
};


export { useStringStep, useScrollY,
         addClassTheme, checkLocalTheme }
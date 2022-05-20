import { useState, useEffect } from 'preact/hooks';

import SVGComponent from './../assets/Assets';
import { BtnCV } from './../components/require/MiniReusable';
// import BtnCV from './../components/require/BtnCV';
import { useStringStep } from './../utils/UtilBasics';

const wordArray = ['Creando nuevas soluciones. ',
                   'Basado en componentes dinámicos. ',
                   'Modular, Reactivo y Progresivo. ' ];

export default function TheHome() {

  const [ index, setIndex  ] = useState(0);
  const { setWord, letter } = useStringStep(wordArray[index], 250);

  useEffect(() => {
    const currentWord = wordArray[index];

    if (currentWord === letter) setIndex((prev) => {
      const sum = prev + 1;
      const res = (wordArray.length === sum) ? 0 : sum;
      setWord(wordArray[res]);

      return res;
    });

  }, [index, letter, setWord]);

  const [ number, setNumber ] = useState(0);
  const classActive = (st, num) => st === num ? 'active' : null; 

  useEffect(() => {
    const init = setInterval(() => {
      if(number === 3) setNumber(0);
      else setNumber((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(init);
  },[number]);

  return <div className="h-full grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
          <figure className="relative">

            <picture className="home-svg-main flex overflow-hidden">
              <SVGComponent name="DevSVG" />
            </picture>

            <figcaption className="absolute inset-y-0 g hidden md:flex -ml-4 lg:ml-6 xl:ml-10 h-full w-[8rem] items-center justify-center flex-col space-y-3">

              <button className={`btn btn-outline btn-show translate-x-3 ${classActive(number, 0)}`}>
                <i class="ri-terminal-line ri-fw" />
                <span className="ml-2"> Despliegue </span>
              </button>

              <button className={`btn btn-outline btn-show -translate-x-6 ${classActive(number, 1)}`}>
                <i class="ri-share-circle-line ri-fw" />
                <span className="ml-2"> Integracion </span>
              </button>

              <button className={`btn btn-outline btn-show -translate-x-2  ${classActive(number, 2)}`}>
                <i class="ri-device-line ri-fw" />
                <span className="ml-2"> Adaptativo </span>
              </button>

              <button className={`btn -translate-x-6 btn-outline btn-show ${classActive(number, 3)}`}>
                <i class="ri-shield-star-line ri-fw" />
                <span className="ml-2"> Seguridad </span>
              </button>

            </figcaption>
            <div className="absolute left-6 flex flex-col top-[30%] sm:hidden space-y-4"> 
              <button className="btn-icon btn-outline">
                <i className="ri-linkedin-line ri-fw" />
              </button>
                
              <button className="btn-icon btn-outline">
                <i className="ri-github-line ri-fw" />
              </button>

              <button className="btn-icon btn-outline">
                <i className="ri-codepen-line ri-fw" />
              </button>
            </div>
          </figure>

          <div className="text-skin-base-sub text-center sm:text-left ml-0 -mt-[2%] xs:-mt-[7%] sm:-ml-4 md:ml-1 lg:ml-8 xl:ml-8">
            <h4 className="home-text-logo font-major">ANTIK</h4>
            <div className="my-7 sm:my-4 lg:my-5 xl:my-7">
              <div className="text-slogan font-thin">
                <p>Desarrollo de <span className="inline-flex sm:hidden md:inline-flex">Sitios Web y </span> <span className="bg-text hidden xl:inline-flex"> Aplicaciones Web </span> 
                <span className="bg-text inline-flex sm:hidden md:inline-flex xl:hidden"> Web Apps</span>
                <span className="bg-text hidden sm:inline-flex md:hidden"> Aplicaciones Web</span>
                </p>
                <p>
                  <span className="bg-text"> progresivas</span>, <span className="inline-flex sm:hidden md:inline-flex">multiplataforma </span> para </p>
                <p>diferentes <span className="bg-text">dispositivos</span>.</p>
              </div>

              <div className="home-type-writer bg-skin-alpha text-skin-base">
                <i class="ri-arrow-right-s-line align-middle" />
                <span className="text-sm sm:text-xs lg:text-base animate-blink border-r-2 border-skin-third pl-1">{ letter }</span>
              </div>
            </div>

            <div>
              <BtnCV />
            </div>
          </div>
        </div>
}
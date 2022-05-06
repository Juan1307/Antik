import { useState, useEffect } from 'preact/hooks';

import Assets from './../assets/Assets';
import BtnCV from './../components/require/BtnCV';

import { useStringStep } from './../utils/UtilBasics'

const SVGComponent = ({name}) => {
  const Component = Assets[name];
  return <Component />
};

const wordArray = ['Creando optimas y nuevas soluciones. ',
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

  return <div className="grid grid-cols-2 gap-5 items-center">
          
          <figure className="relative">
            <picture className="flex overflow-hidden pl-28 scale-[1.3]">
              <SVGComponent name="DevSVG" />
            </picture>

            <figcaption className="absolute inset-y-0 ml-10 h-full w-[8rem] items-center justify-center flex flex-col space-y-3">

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
          </figure>

          <div className="text-skin-base-sub ml-4 xl:ml-8">
            <h4 className="text-4xl lg:text-6xl xl:text-7xl  font-major">ANTIK</h4>
            <div className="my-3 lg:my-4 xl:my-7">
              <div className="text-slogan font-thin">
                <p>Desarrollo de WebApps y <span className="bg-text">Aplicaciones Web</span>
                </p>
                <p>
                  <span className="bg-text">
                    progresivas</span>,
                  multiplataforma para </p>
                <p>diferentes <span className="bg-text">dispositivos</span>.</p>
              </div>

              <div className="mt-6 w-[23rem] bg-skin-alpha p-1 text-skin-base">
                <i class="ri-arrow-right-s-line align-middle" />
                <span className="animate-blink border-r-2 border-skin-third pl-1">{ letter }</span>
              </div>
            </div>

            <div>
              <BtnCV />
            </div>
          </div>
        </div>
}
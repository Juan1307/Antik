import { useState, useEffect, useMemo } from 'preact/hooks';
// import { useState, useEffect } from 'preact/hooks';
import { Suspense, lazy } from 'preact/compat';

import Canvas from './components/Canvas';
import Loader from './components/Loader';
import { BtnCV } from './components/require/MiniReusable';
import MenuBar from './pages/require/MenuBar';
import NavBar from './pages/require/NavBar';
import { useScrollY } from './utils/UtilBasics'

const TheHome = lazy(() => import('./pages/TheHome'));
const TheAbout = lazy(() => import('./pages/TheAbout'));
const ThePortfolio = lazy(() => import('./pages/ThePortfolio'));
const TheContact = lazy(() => import('./pages/TheContact'));

const scrollToTop = (num) => window.scrollTo({top:num, behavior:'smooth'});

const ButtonUp = () => {
  const scrollState = useScrollY(100);
  const classScroll = (st) => st ? 'translate-x-0 opacity-100' : 'translate-x-[400%] opacity-0';

  return <div className={`fixed right-5 sm:right-12 sm:right-[6%] bottom-[5%] sm:bottom-[7.5%] 
    transition-visible-in ease-in-out ${ classScroll(scrollState)}`}>
          <button className="px-3 py-1 text-icon btn-filled" 
                  onClick={() => scrollToTop(0) }>
            <i class="ri-arrow-up-s-line" />
          </button>
        </div>
};

export default function App() {

  const [ layerBox, setLayerBox ] = useState(false);
  const currrentYear = new Date().getFullYear();

  const [ currentPath, setCurrentPath ] = useState('home');
  const [ currentTheme, setCurrentTheme ] = useState(null);
  const [ burger, setCurrentBurger ] = useState(null);

  const handleCallbackPath = (path) => (setCurrentPath(path), scrollToTop(0));
  const handleCallbackTheme = (value) => setCurrentTheme(value);
  const handleCallbackBurger = (value) => setCurrentBurger(value);

  const canvasMemorized = useMemo(() => <Canvas currentTheme={currentTheme} />, [currentTheme]);

  useEffect(() => setLayerBox(true), [layerBox]);

  const classBurger = (st) => st ? 'translate-y-full opacity-100 ' : 'opacity-0 sm:opacity-100';
  const classCv = (st) => st !== 'home' ? 'translate-x-0 opacity-100' : '-translate-x-[400%] opacity-0';

  return (
    <main className="relative">
      <main className={`intro-content flex flex-col justify-between px-[5%] pt-[4rem] xs:pt-[3.6rem] sm:pt-[3.4rem] lg:pt-[4.4rem] ${layerBox && 'opacity-100'}`}>
        { canvasMemorized }
        <NavBar callback={handleCallbackTheme} subcallback={handleCallbackBurger} />
        {/*h-full sm:h-auto lg:*/}
        <section className={`content-main ${currentPath === 'home' && 'my-auto'} sm:my-auto h-auto`}>
          <div className="basis-12/12 sm:basis-[23%] md:basis-[20%] lg:basis-2/12" />
          <div className="basis-12/12 sm:basis-[77%] md:basis-[80%] lg:basis-10/12 p-[2%] h-full text-normal border-0 sm:border-l border-skin-primary">
            <Suspense fallback={<Loader text="Cargando sección" add="loader-class" />}>
              { 
                currentPath === 'home' ? <TheHome /> :  
                currentPath === 'about' ? <TheAbout /> : 
                currentPath === 'portfolio' ? <ThePortfolio /> : 
                currentPath === 'contact' ? <TheContact /> : <div>aaaa 494</div> 
              }
            </Suspense>
          </div>
        </section>
        <footer className="sm:mx-[1.2%] border-t border-skin-primary mt-8 sm:mt-0 flex flex-col items-center justify-center h-max pt-3 pb-2">
          <div>
            ANTIK - Desarrollador Web -
            <span> { currrentYear }</span>
          </div>
          <div className="text-icon space-x-3">
            <i class="bx bxl-html5 bx-fw" />
            <i class="bx bxl-tailwind-css bx-fw" />
            <i class="bx bxl-react bx-fw" />
          </div>
        </footer>

        <ButtonUp />
        <div className={`fixed left-5 sm:left-12 sm:left-[6%] bottom-[5%] sm:bottom-[7.5%] 
          transition-visible-in ease-in-out ${ classCv(currentPath)}`}>
          <BtnCV />
        </div>

        {/*{ inset-x-0 -top-20 ${ classBurguer(burguer) }}*/}
        <div className={`fixed left-[5%] right-[5%] sm:left-[5%] md:left-[6%] lg:left-[7%] sm:right-auto sm:top-1/2 sm:-translate-y-1/2 transition-menu ease-in-out bg-skin-secondary sm:bg-transparent -top-10 ${classBurger(burger)} `}>
          <MenuBar callback={handleCallbackPath} />
        </div>

        <div className={`fixed z-10 pointer-events-none left-[7%] top-1/2 -translate-y-1/2 sm:inline-block ${currentPath !== 'home' && 'hidden'}`}>
          <span className="bg-skin-alpha px-2 inline-block whitespace-nowrap origin-left -rotate-90 translate-y-[610%] uppercase text-normal text-skin-muted">
            <span>
              DESARROLLO <span className="inline-block sm:hidden lg:inline-block"> WEB </span> -&nbsp; 
            </span>
            FRONT END - BACK END
          </span>
        </div>
      </main>
      
      <section className="box-intro-element">
        <div className={`box-intro bg-skin-primary-sub ${layerBox && '-translate-y-full opacity-100'}`} />
        <div className={`box-intro bg-skin-secondary-sub ${layerBox && 'translate-y-full opacity-100'}`} />
      </section>
    </main>
  )
}

// import { useState, useEffect, useMemo } from 'preact/hooks';
import { useState, useEffect } from 'preact/hooks';
import { Suspense, lazy } from 'preact/compat';


// import Canvas from './components/Canvas';
import LoaderPage from './components/LoaderPage';
import BtnCV from './components/require/BtnCV';
import MenuBar from './pages/require/MenuBar';
import NavBar from './pages/require/NavBar';
import { useScrollY } from './utils/UtilBasics'


const TheHome = lazy(() => import('./pages/TheHome'));
const TheAbout = lazy(() => import('./pages/TheAbout'));
const ThePortfolio = lazy(() => import('./pages/ThePortfolio'));
const TheContact = lazy(() => import('./pages/TheContact'));

const ButtonUp = () => {
  const scrollState = useScrollY(100);
  const classScroll = (st) => st ? 'translate-x-0 opacity-100' : 'translate-x-[400%] opacity-0';

  return <div className={`fixed right-12 lg:right-16 bottom-4 lg:bottom-9 
    transition-visible-in ease-in-out ${ classScroll(scrollState)}`}>
          <button className="px-3 py-1 text-icon btn-filled" 
                  onClick={() => window.scrollTo({top:0, behavior:'smooth'}) }>
            <i class="ri-arrow-up-s-line" />
          </button>
        </div>

};

const ButtonCV = () => {
  const scrollState = useScrollY(100);
  const classScroll = (st) => st ? 'translate-x-0 opacity-100' : '-translate-x-[400%] opacity-0';

  return <div className={`fixed left-12 lg:left-16 bottom-4 lg:bottom-10 
    transition-visible-in ease-in-out ${ classScroll(scrollState)}`}>
          <BtnCV />
        </div>
};

export default function App() {

  const [ layerBox, setLayerBox ] = useState(false);
  
  const [ currentPath, setCurrentPath ] = useState('home');
  const [ , setCurrentTheme ] = useState(null);

  const handleCallbackPath = (path) => setCurrentPath(path);
  const handleCallbackTheme = (value) => setCurrentTheme(value);

  // const canvasMemorized = useMemo(() => <Canvas currentTheme={currentTheme} />, [currentTheme]);

  useEffect(() => setLayerBox(true), [layerBox]);

  return (
    <main className="relative">
      <main className={`intro-content flex flex-col justify-center px-[5%] py-[2%] ${layerBox && 'opacity-100'}`}>
        {/*{ canvasMemorized }*/}
        <NavBar callback={handleCallbackTheme} />
        
        <section className="flex">
          <div className="basis-3/12 lg:basis-2/12 mt-[40vh]" />
          <div className="basis-9/12 lg:basis-10/12 mt-[15vh] p-[2%] text-normal border-l border-skin-primary">
            <Suspense fallback={<LoaderPage />}>
              { 
                currentPath === 'home' ? <TheHome /> :  
                currentPath === 'about' ? <TheAbout /> : 
                currentPath === 'portfolio' ? <ThePortfolio /> : 
                currentPath === 'contact' ? <TheContact /> : <div>aaaa 494</div> 
              }
            </Suspense>
          </div>
        </section>

        <ButtonUp />
        <ButtonCV />

        <div className="fixed left-18 top-1/2 -translate-y-1/2">
          <MenuBar callback={handleCallbackPath} />
        </div>

        <div className="fixed -z-10 left-18 top-1/2 -translate-y-1/2">
          <span className="inline-block whitespace-nowrap origin-left -rotate-90 translate-y-[610%] uppercase text-normal text-skin-muted">
            <span className="hidden sm:inline-block">
              DESARROLLO <span className="hidden lg:inline-block"> WEB </span> -&nbsp; 
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

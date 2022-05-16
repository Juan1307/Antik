import { useState, useEffect } from 'preact/hooks';
import { useScrollY, addClassTheme, checkLocalTheme } from './../../utils/UtilBasics'

export default function NavBar({callback, subcallback}){

  const [ theme, setTheme ] = useState(checkLocalTheme);
  const [ burguer, setBurguer ] = useState(false);
  const scrollState = useScrollY(50);

  const handleOnClickTheme = (value) => {
    setTheme(value);
    addClassTheme(value);
    
    return callback(value);
  };
  useEffect(() => callback(theme), []);

  const handleClickBurguer = () => {
    setBurguer(!burguer);
      
    return subcallback(!burguer);
  }

  return <div className={`nav ${(scrollState || burguer) && 'active'} `}>
    <div className="font-major text-3xl sm:text-xl lg:text-3xl"> ATK </div>
    <div className="hidden sm:inline-flex space-x-3"> 
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
    <div className={`fixed right-[9%] transition ${burguer ? 'top-24 opacity-100' : '-top-10 opacity-0 sm:opacity-100'}

      sm:relative sm:inset-0 sm:inline-flex space-x-1`}>
      <span className="text-normal">Modo:</span>
      <button className={`btn-theme ${ theme && 'active' }`}>
        <span onClick={() => handleOnClickTheme(false) }>
          <i className="ri-moon-line ri-fw" />
        </span>
        <span onClick={() => handleOnClickTheme(true) }>
          <i className="ri-sun-line ri-fw" />
        </span>
      </button>
    </div>
    {/*// <div className="" onClick={() => handleClickBurguer() }>*/}
    <div className={`sm:hidden flex burguer ${burguer && 'active'} `} 
        onClick={() => handleClickBurguer() }>
      <span className="burguer-line" />
      <span className="burguer-line" />
      <span className="burguer-line" />
      <span className="burguer-line" />
    </div>
  </div>
}
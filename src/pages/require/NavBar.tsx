import { useState, useEffect } from 'preact/hooks';
import { useScrollY, addClassTheme, checkLocalTheme } from './../../utils/UtilBasics'

export default function NavBar({callback}){
  const [ theme, setTheme ] = useState(checkLocalTheme);
  const scrollState = useScrollY(50);

  const handleOnClickTheme = (value) => {
    setTheme(value);
    addClassTheme(value);
    
    return callback(value);
  };
  useEffect(() => callback(theme), []);

  return <div className={`nav ${scrollState && 'active'} `}>
    <div className="font-major text-xl lg:text-3xl"> ATK </div>
    <div className="space-x-3"> 
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
    <div className="space-x-1">
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
  </div>
}
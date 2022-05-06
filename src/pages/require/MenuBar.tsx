import { useState } from 'preact/hooks';

const arrayItems = [ { text:'Inicio', key:'home' },
                     { text:'Sobre mi', key:'about' },
                     { text:'Portfolio', key:'portfolio' },
                     { text:'Contacto', key:'contact' } ];

export default function MenuBar({callback}) {
  const [ navActive, setNavActive ] = useState(0);
  const handleOnClickItem = (index) => {
    const { key } = arrayItems[index];
    
    setNavActive(index);
    callback(key);
  };
  const classActive = (index) => index === navActive && 'active';

  return  <ul className="menu-list text-normal">
           {
            arrayItems.map(({text}, index) => {
              return <li key={index}>
                <a className={`menu-list-item ${classActive(index)}`} 
                   onClick={() => handleOnClickItem(index)}> 
                  { text } 
                  <span className="menu-item-back" />
                </a>
              </li>
            })
           }
          </ul>
}
import { useEffect, useState } from 'preact/hooks';

import { TitleContent } from './../components/require/MiniReusable';
import PortfolioData from './extend/PortfolioData';
import { CardModalProvider, useModalContext, useToggleContext } from './extend/PortfolioContext';

type CardBoxItemProps = {
  title:string,
  text:string,
  src:string | string[],
  icons?:string[],
  address?:string,
  link?:string
};

// const mode = (import.meta.env.MODE === 'development') ? '/' : '/Antik/';
const CardIcons = ({data}) => {
    return <div className="portfolio-icons">
              {
                data.map((elem, idx) => {
                  return <div key={idx} className="portfolio-icons-btn">
                          <i className={`bx bxl-${elem}`} />
                        </div>
                })
              }
            </div>
};

const CardExpand = ({index}) => {
  const { toggleModal, setIndex } = useToggleContext();

  const handleClickMore = () => {
    toggleModal();
    setIndex(index);
  };

  return  <div className="portfolio-more overflow-hidden">
            <button className="portfolio-more-btn" onClick={handleClickMore}>
              <i className="ri-fullscreen-line align-middle" /> Ver más
            </button>
          </div>
}

const CardBoxItem = ({data, index}: { data: CardBoxItemProps, index:number }) => {
  const { title, text, src,
          icons, address, link } = data;
 
  const btnExpand = Array.isArray(src);
  const srcFile = btnExpand ? src[0] : src;

  return <div className="portfolio-box">
            <picture className="portfolio-box-img h-full w-full"> {/*h-full*/}
              <img className="object-cover object-center w-full h-40" 
                  src={`/Antik/imgs/${srcFile}`} alt={srcFile} />
              
              { btnExpand && <CardExpand index={index} /> }
              { icons && <CardIcons data={icons} /> }
            </picture>
            
            <article className="portfolio-box-text">
              <div className="flex justify-between">
                <span className="uppercase underline underline-offset-4">
                  { title }
                </span>

                { link && <a href={link} target="_blank" rel="noopener noreferrer" className="font-bold text-sky-600">
                <i className="ri-arrow-right-s-line align-middle" /> 
                <span className="hover:underline decoration-2 hover:underline-offset-4">
                  Demo
                </span>
                </a> }
              </div>
              {
                address &&             
                <span className="text-xs uppercase"> {address} </span>
              }
              <p>{ text }</p>
            </article>
          </div>
};

const itemsArray = ['Proyectos','Plataformas','Temas y Scripts'];

const CardModalContent = ({list}) => {
  const { modal, index } = useModalContext();
  const { setIndex, toggleModal } = useToggleContext();
    
  const { src: currentArray } = list[index] ?? list[0];

  const [ currentIndex, setCurrentIndex ] = useState(0);  
  const [ currentSrc, setCurrentSrc ] = useState(currentArray[0]);  

  const handleOnClickSrc = (curridx) => {
    if(curridx < 0 ) return;
    if(curridx > (currentArray.length - 1)) return;

    setCurrentIndex(curridx);
    setCurrentSrc(currentArray[curridx]);
  };

  useEffect(() => setIndex(0), [list, setIndex]);
  useEffect(() => {
    setCurrentIndex(0);
    setCurrentSrc(currentArray[0])
  }, [currentArray]); //index - optional

  return <div className={`portfolio-modal-bg ${modal && 'active'}`}>
            <div className="portfolio-modal h-1/5 sm:h-4/5 w-4/5">
              {/*{ modal, index }*/}
              <picture className="flex h-full w-full">
                <img className={`h-full object-contain m-auto transition-visible-in ease-in-out scale-0 ${modal && 'scale-100'}`} 
                    loading="lazy" src={`/Antik/imgs/${currentSrc}`} alt={currentSrc} />
              </picture>

              <div className="portfolio-modal-buttons">
                <button type="button" className="portfolio-modal-btn" 
                  onClick={() => handleOnClickSrc(currentIndex - 1) }>
                  <i className="ri-arrow-left-s-line ri-fw" />    
                </button>
                <button type="button" className="portfolio-modal-btn" 
                  onClick={() => handleOnClickSrc(currentIndex + 1) }>
                  <i className="ri-arrow-right-s-line ri-fw" />    
                </button>
              </div>

              <button className="text-white absolute -top-8 right-0" 
                      onClick={() => toggleModal()}>
                <i className="ri-close-line ri-fw text-4xl" />
              </button>
            </div>
          </div>
}

export default function ThePortfolio() {

  const [ listIndex, setListIndex ] = useState(0)
  const [ currentList, setCurrentList ] = useState(PortfolioData[0]);

  const handleClickItems = (index) => {
    setListIndex(index);
    setCurrentList(PortfolioData[index]);
  };

  const classActive = (index) => (index === listIndex) && 'active'; 

  return  <CardModalProvider>
            <div className="h-full">

              <TitleContent title="PORTFOLIO" />

              <CardModalContent list={currentList} />

              <ul className="portfolio-nav">
                {
                  itemsArray.map((item, index) => {
                    return <li key={index} className={`portfolio-nav-item ${classActive(index)}`} 
                      onClick={() => handleClickItems(index)}>
                      <i className="ri-arrow-right-s-line ri-fw align-middle" />
                      <span>{item}</span>
                  </li>
                  })
                }
              </ul>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-3 md:gap-4 xl:gap-6">
                {
                  currentList.map((props, idx) => <CardBoxItem key={idx}
                                                   data={props}
                                                   index={idx} />)
                }
              </div>
            </div>
          </CardModalProvider>

}
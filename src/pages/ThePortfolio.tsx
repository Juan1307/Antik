import { useState } from 'preact/hooks';

import PortfolioData from './extend/PortfolioData';

type CardBoxItemProps = {
  title:string,
  text:string,
  src:string,
  icons?:string[],
  address?:string,
  link?:string
};

const CardBoxItem = ({data, index}: { data: CardBoxItemProps, index:number }) => {
  const { title, text, src,
          icons, address, link } = data;

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

  return <div className="portfolio-box">
            <picture className="portfolio-box-img">
              <img className="object-cover object-center w-full h-38" 
                  src={`/imgs/${src}`} alt="section-img" />
              
              <div className="portfolio-more overflow-hidden">
                <button className="portfolio-more-btn">
                  <i className="ri-fullscreen-line align-middle" /> {index} Ver más
                </button>
              </div>

              { icons && <CardIcons data={icons} /> }
            </picture>
            
            <article className="portfolio-box-text">
              <div className="flex justify-between">
                <span className="uppercase underline underline-offset-4">
                  { title }
                </span>

                { link && <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-filled">ir aqui</a> }
              </div>
              {
                address &&             
                <span className="text-xs uppercase"> {address} </span>
              }
              <p>{ text }.</p>
            </article>
          </div>
};

const itemsArray = ['Proyectos','Plataformas','Temas y Scripts'];

export default function ThePortfolio() {

  const [ listIndex, setListIndex ] = useState(0)
  const [ currentList, setCurrentList ] = useState(PortfolioData[0]);

  const handleClickItems = (index) => {
    setListIndex(index);
    setCurrentList(PortfolioData[index]);

    console.log(index);
  };

  const classActive = (index) => (index === listIndex) && 'active'; 

  return <div className="space-y-10">
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
          <div className="grid grid-cols-3 gap-6">
            {
              currentList.map((props, idx) => <CardBoxItem key={idx}
                                               data={props}
                                               index={idx} />)
            }
          </div>
        </div>
}
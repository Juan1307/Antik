import { TitleContent } from './../components/require/MiniReusable';
import SVGComponent from './../assets/Assets';

type BoxIconProps = {
  icon: string,
  text?: string
};

const BoxIcon = ({icon, text}: BoxIconProps) => {
  return <div className="about-box-icon">
            <span className={`bx ${icon}`} />
            {
              text && <span className="ml-1">{text}</span>
            }
          </div>
};

const iconsData = {
  front:[ {text:'HTML', icon:'bxl-html5'},
          {text:'CSS', icon:'bxl-css3'},
          {text:'JS', icon:'bxl-javascript'},
          {text:'React', icon:'bxl-react'},
          {text:'Vue', icon:'bxl-vuejs'},
        ],

  back:[ {text:'PHP', icon:'bxl-php'},
         {text:'Node JS', icon:'bxl-nodejs'},
         {text:'Postgre SQL', icon:'bxl-postgresql'},
         {text:'MySql', icon:'bx-data'},
        ],

  tools:[ {text:'Github', icon:'bxl-github'},
          {text:'Heroku', icon:'bxl-heroku'},
          {text:'Trello', icon:'bxl-trello'},
          {text:'StarUML', icon:'bx-category-alt'} ]
};

export default function TheAbout() {
  const { front, back, tools } = iconsData;

  return <div className="h-full about-content">
          <div className="items-center grid grid-cols-7 gap-0 lg:gap-10">
            <div className="col-span-7 sm:col-span-4">
              
              <TitleContent title="SOBRE MI" />

              <article className="mb-5 mt-3 lg:mb-8 sm:mt-0 space-y-3 text-justify">
                <p className="first-letter:text-2xl first-letter:font-bold first-letter:mr-1">
                  Hola, soy Juan Cabanillas, Desarrollador de Aplicaciones Web de alta, media y pequeña demanda, aplicando soluciones solidas y utilizando modernas tecnologias.
                </p>

                <p>
                  Mi objetivo es mejorar profesionalmente, colaborando y aportando nuevas soluciones en los retos que hay por descubrir en esta Industria. 
                </p>
              </article>
              <div className="inline-grid sm:hidden md:inline-grid grid-cols-3 gap-2 w-full">
                <div className="text-center">
                  <p className="text-2xl">+ 6</p>
                  <p>Aplicaciones</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl">+ 4</p>
                  <p>Plataformas</p>
                </div>

                <div className="text-center">
                  <p className="text-2xl">+ 8</p>
                  <p>Demo Apps</p>
                </div>
              </div>
            </div>

            <figure className="col-span-3 hidden sm:inline-flex about-svg relative">
              <picture className="about-svg-frame">
                <SVGComponent name="InnovationSVG" />
              </picture>
              <figcaption className="about-svg-items">
                <span className="inline-block whitespace-nowrap origin-right -rotate-90">
                  <span className="bg-skin-alpha px-2 py-1 text-skin-muted">DESARROLLADOR WEB</span>
                  
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-3 lg:gap-5">
            <div className="about-box">
              <div className="about-box-list">
                {
                  front.map(({text,icon}, idx) => <BoxIcon key={idx} icon={icon} text={text} /> )
                }
              </div>
              <span className="about-box-title">
                <span className="text-skin-inverted text-sm">FRONT-END</span>
              </span>
            </div>
            
            <div className="about-box">
              <div className="about-box-list">
                {
                  back.map(({text,icon}, idx) => <BoxIcon key={idx} icon={icon} text={text} /> )
                }
              </div>
              <span className="about-box-title">
                <span className="text-skin-inverted text-sm">BACK-END</span>
              </span>
            </div>

            <div className="about-box">
              <div className="about-box-list">
                {
                  tools.map(({text,icon}, idx) => <BoxIcon key={idx} icon={icon} text={text} /> )
                }
              </div>
              <span className="about-box-title">
                <span className="text-skin-inverted text-sm">HERRAMIENTAS</span>
              </span>
            </div>

          </div>

        </div>
}
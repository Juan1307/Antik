const BtnCV = () => {
  return  <div className="flex justify-center sm:justify-start">
            <a href="/Antik/CV-JUAN-ANTONI-CABANILLAS-CHUQUIRUNA.pdf" target="_blank" rel="noreferrer noopener"
              className="px-3 py-1 text-icon btn-filled">
              <span>Descargar CV</span>
            </a>
          </div>
};

const BtnSocial = () => {
  return <>
          <a href="https://www.linkedin.com/in/juan-antoni-cabanillas-chuquiruna-20a449174/" 
            target="_blank" rel="noreferrer noopener" 
            className="btn-icon btn-outline">
            <i className="ri-linkedin-line ri-fw" />
          </a>
            
          <a href="https://github.com/Juan1307" 
            target="_blank" rel="noreferrer noopener"
            className="btn-icon btn-outline">
            <i className="ri-github-line ri-fw" />
          </a>

          <a href="https://codepen.io/antik133up" 
            target="_blank" rel="noreferrer noopener" 
            className="btn-icon btn-outline">
            <i className="ri-codepen-line ri-fw" />
          </a>
         </>
};

const TitleContent = ({title}) => {
  return <div className="justify-center flex w-full sm:hidden">
      <span className="font-bold underline underline-offset-4"> 
        <span className="text-lg">{title}</span> 
      </span>
    </div>
};

export { BtnCV, BtnSocial, TitleContent };
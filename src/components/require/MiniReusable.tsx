const BtnCV = () => {
  return  <button className="px-3 py-1 text-icon btn-filled">
            <span>Descargar CV</span>
          </button>
};

const TitleContent = ({title}) => {
  return <div className="justify-center flex w-full sm:hidden">
      <span className="font-bold underline underline-offset-4"> 
        <span className="text-lg">{title}</span> 
      </span>
    </div>
};

export { BtnCV, TitleContent };
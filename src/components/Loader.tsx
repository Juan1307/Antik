import { useStringStep, addClassTheme, checkLocalTheme } from './../utils/UtilBasics';

export default function Loader () {
  addClassTheme(checkLocalTheme()); //set local theme
  
  const { letter: points } = useStringStep('...', 400);

  return <div className="h-screen flex bg-skin-secondary">
          <div className="m-auto w-52 space-y-1">
            <div className="flex justify-between items-center text-normal text-skin-base-sub">
              <span>Cargando página </span> 
              <span className="w-7">
                <span className="h-4 font-black">
                  { points }
                </span>
              </span>
            </div>
            <div className="h-1 rounded-md bg-skin-secondary-sub">
              <div className="h-full w-full loader rounded-md" />
            </div>
          </div>
         </div>
}
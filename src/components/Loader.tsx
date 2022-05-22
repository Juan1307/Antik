import { useStringStep } from './../utils/UtilBasics';

type LoaderProps = {
  text?:string,
  add?:string
};

export default function Loader({text, add}: LoaderProps) {
  const { letter: points } = useStringStep('...', 400);
  
  const currentText =  text ?? 'Cargando página';
  const currentClass = add ?? 'h-screen bg-skin-secondary';
  
  return <div className={` ${currentClass} flex`}>
          <div className="m-auto w-52 space-y-1">
            <div className="flex justify-between items-center text-normal text-skin-base-sub">
              <span>{ currentText }</span> 
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
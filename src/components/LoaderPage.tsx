import { useStringStep } from './../utils/UtilBasics';

export default function LoaderPage(text?: string) {

  const { letter: points } = useStringStep('...', 400);
  const currentText =  text ?? 'Cargando sección';

  return <div className="h-[80vh] flex">
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
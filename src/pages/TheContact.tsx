import { useState } from 'preact/hooks';

import SVGComponent from './../assets/Assets';
import { TitleContent } from './../components/require/MiniReusable';

const focusIdElement = (id) => setTimeout(() => document.getElementById(id).focus(), 150);
const MessageError = ({msg}) => <small class="text-red-500">{msg}</small>;

const patterns = { user: /^[a-zA-Z\s]{2,30}$/, 
                   email: /^\S+@\S+\.\S+$/,
                   description: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.+_#/()?-\s]{2,120}$/ };

export default function TheContact() {

  const [ valid, setValid ] = useState([false, false, false]);
  
  const valUser = valid[0]; 
  const valMail = valid[1]; 
  const valDesc = valid[2];

  const sendFormEmail = (data) => {
    const { user, email, description } = data
    //buil body message
    const staticEmail = 'antoni_cabanillas_2000@hotmail.com';
    const staticSubject = `OFERTA LABORAL - ${user}`;
    const staticMessage = `${description} - ${email}`;

    window.open(`mailto:${staticEmail}?subject=${staticSubject}&body=${staticMessage}`,'_self');
  };

  const showSetErrorForm = (key?: number) => {
    setValid((prev) => {
      const currentState = Number.isInteger(key) ? prev.map((ele, idx) => (idx === key)) :
                                                   prev.map(() => false);
      return currentState;
    });
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    
    const form = new FormData(evt.target);
    const formValues = Object.fromEntries(form);
    const formKeys = Object.keys(formValues);

    const currentKey = formKeys.findIndex((key) => !(patterns[key].test(formValues[key]) ));

    if(currentKey >= 0) {
      showSetErrorForm(currentKey);
      return focusIdElement(formKeys[currentKey]);
    }
    // send email an reset
    showSetErrorForm();
    sendFormEmail(formValues);
  };

  return <div className="h-full">
            <TitleContent title="CONTACTO" />
            <div className="mt-3 sm:mt-0 grid items-center grid-cols-1 sm:grid-cols-8 sm:gap-2 lg:gap-5">
              <form className="sm:col-span-4 md:col-span-5 xl:col-span-4 mx-1" onSubmit={handleSubmitForm}>
                <p className="text-justify mb-2">Recuerda que también tienes mis redes, si deseas contactarme.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
                  <div className="contact-input-group">
                    <label htmlFor="user">Usuario/entidad</label>
                    <input type="text" name="user" id="user" className="input-form" placeholder="Ingrese usuario/entidad" maxlength="30" />
                    { valUser && <MessageError msg="Oops datos inválidos." /> }
                  </div>
                  <div className="contact-input-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" id="email" className="input-form" placeholder="Ingrese e-mail" maxlength="70" />
                    { valMail && <MessageError msg="Oops e-mail inválido." /> }
                  </div>
                </div>
                <div className="contact-input-group">
                  <label htmlFor="description">Mensaje</label>
                  <textarea cols="15" name="description" id="description" className="input-form" placeholder="Ingrese Mensaje" maxlength="120" />
                    { valDesc && <MessageError msg="Oops mensaje inválido." /> }
                </div>

                <button type="submit" className="mt-2 py-1 btn w-1/2 btn-filled">
                  <i class="ri-send-plane-2-line align-middle mr-1" />
                  <span>Enviar</span>
                </button>
              </form>
              <picture className="contact-img sm:col-span-4 md:col-span-3 xl:col-span-4 overflow-hidden">
                <SVGComponent name="MailSVG" />
              </picture>
            </div>
         </div>
}
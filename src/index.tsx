import { render } from 'preact';
import { Suspense, lazy } from 'preact/compat';
import './index.css';

import { addClassTheme, checkLocalTheme } from './utils/UtilBasics';
import Loader from './components/Loader';

// console.log(import.meta.env.MODE); mode in deployment

addClassTheme(checkLocalTheme()); //set local theme
// console.log('hola mi pana')
const App = lazy(() => import('./App'));

// const App = lazy(() => {  
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import('./App')), 1200);
//   });
// });

render( <Suspense fallback={<Loader />} >
          <App />
        </Suspense>, document.getElementById('app')!);

import { render } from 'preact';
import { Suspense, lazy } from 'preact/compat';
import './index.css';

import Loader from './components/Loader';
// const App = lazy(() => import('./App'));
const App = lazy(() => {  
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./App')), 1200);
  });
});

render( <Suspense fallback={<Loader />} >
          <App />
        </Suspense>, document.getElementById('app')!);

import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig( ({mode}) => {
  // console.log(command);
  const currentMode = mode === 'production';

  return {
    plugins: [ preact(), eslintPlugin({ cache: false }) ],
    base: currentMode ? '/Antik/' : '/',
    build:{
      outDir: 'docs', // folder output
      sourcemap: true
    }
  }
});

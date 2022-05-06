# Web Page

Configuración y anotaciones acerca de la página en fase de desarrollo :

### 1.- Config - ESLINT
```
// package.json - soporte para js y ts
"lint": "eslint src/**/*.{js.jsx,ts,tsx}"
"lint.fix": "eslint --fix src/**/*.{js.jsx,ts,tsx}"
```

Nota: Para migrar: [ts y js](https://stackoverflow.com/questions/62953124/configure-eslint-to-parse-ts-and-tsx-as-typescript-and-js-and-jsx-as-ecmascr). 

### 2.- Config - TAILWIND CSS

- Para las fuentes tener en cuenta lo siguiente:
```
// tailwind.css or index.css

// Don't work
  @font-face {
    font-family: Maven Pro, sans-serif; /*no sans-serif*/
    src: local('Maven Pro'), url(/fonts/MavenPro-Regular.ttf) format('ttf'); /*no ttf format*/
  }

// That's work
  @font-face {
    font-family: Maven Pro;
    src: local('Maven Pro'), url(/fonts/MavenPro-Regular.ttf);
  }
```

```
// tailwind.config.js

  theme: {
    extend: {
      fontFamily: {
        sans: ['"Maven Pro"','sans-serif'] // here set sans-serif
      }
    },
  },

// optionally if you want set defaultTheme for fonts

const defaultTheme = require('tailwindcss/defaultTheme');

  theme: {
    extend: {
      fontFamily: {
        sans: ['"Maven Pro"',...defaultTheme.fontFamily.sans] // here set themefont
      }
    },
  },


```


# Vite example

## Create project step

### STEP1 create project

https://vitejs.dev/guide/#scaffolding-your-first-vite-project

```shell
npm create vite@latest
```

Select `vanilla` project template.  
Select `JavaScript` language.

### STEP2 Install dependencies

```shell
npm install
```

and `npm link`

```shell
cd pkg
npm link
```

next

```shell
cd example/vite-vanilla-javascript
npm link hello-wasm-tutorial
```

### STEP3 Support wasm

Install dependencies.

- [vite-plugin-wasm](https://github.com/Menci/vite-plugin-wasm)
- [vite-plugin-top-level-await](https://github.com/Menci/vite-plugin-top-level-await)

Create to project root `vite.config.js`.

```js
import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  plugins: [wasm(), topLevelAwait()],
});
```

### STEP3 Edit `main.js`

```js
    import './style.css'
    import javascriptLogo from './javascript.svg'
    import viteLogo from '/vite.svg'
    import { setupCounter } from './counter.js'
+   import { greet } from 'hello-wasm-tutorial';

+   greet("Daiki");

    document.querySelector('#app').innerHTML = `
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="${viteLogo}" class="logo" alt="Vite logo" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
        </a>
        <h1>Hello Vite!</h1>
        <div class="card">
          <button id="counter" type="button"></button>
        </div>
        <p class="read-the-docs">
          Click on the Vite logo to learn more
        </p>
      </div>
    `

    setupCounter(document.querySelector('#counter'))
```

### STEP4 Start local server

```shell
npm run dev
```

![success](/success-localserver.png)

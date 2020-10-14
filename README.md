# Gatsby Starter

Kick off your project with this boilerplate. This starter ships with:
- Typescript
- Tests
- Tailwind
- Storybook

---

_Installing the dependencies:_
```
yarn
```
_Running the project:_
```
yarn start
```
_Running tests:_
```
yarn test
```
_Running Storybook:_
```
yarn storybook
```

---

<h2 align="center">
  <a href="https://www.gatsbyjs.com/docs/typescript/">Typescript & Gatsby</a>
</h2>

<p> <a href="https://www.typescriptlang.org/">Typecript</a> is a superset of JavaScript which primarily provides optional static typing, classes, and interfaces. TypeScript lets you catch bugs early thereby making you a more efficient developer, while at the same time leveraging the already existing JavaScript community.</p>

### Adding Typescript to Gatsby

1. Install Typescript, the gatsby plugin for Typescript support and typing for React:
```
yarn add typescript gatsby-plugin-typescript
```
```
yarn add -D @types/react
```

2. Add the plugin to **gatsby-config.js**:
```
module.exports = {
   // ...,
   plugins: [...`gatsby-plugin-typescript`],
}
```

3. Create a **tsconfig.json** file. (Example on the root directory)

4. Great! Your project works with Typescript. 

---

<h2 align="center">
  <a href="https://www.gatsbyjs.com/docs/tailwind-css/">Tailwind & Gatsby</a>
</h2>

<p>Tailwind is a utility-first CSS framework for rapidly building custom user interfaces.</p>
<p>On Gatsby Documentation, you can learn how to use Tailwind in three ways. In this project, we are using the first one: PostCSS.</p>

### Adding Tailwind to the project

1. Install the dependencies:
```
yarn add tailwindcss gatsby-plugin-postcss
```

2. Add the plugin to **gatsby-config.js**:
```
module.exports = {
   // ...,
   plugins: [...`gatsby-plugin-postcss`],
}
```

3. Generate tailwind config file:
```
npx tailwindcss init
```

4. Add a **postcss.config.js** file. (Example on the root directory)

5. Edit the **gatsby-browser.js** file with the following code:
```
import './src/styles/tailwind.css'
```

6. Create a **styles** directory with a **tailwind.css** file. (Example on the src directory)

7. Alright. Tailwind is working.

---

<h2 align="center">
  <a href="https://www.gatsbyjs.com/docs/unit-testing/#other-resources">Tests & Gatsby</a>
</h2>

<p>Unit testing is a great way to protect against errors in your code before you deploy it.</p>
<p>The <a href="(https://github.com/testing-library/react-testing-library">@testing-library/react</a> by Kent C. Dodds has risen in popularity since its release and is a great replacement for enzyme. You can write unit and integration tests and it encourages you to query the DOM in the same way the user would. Hence the guiding principle:</p>

> The more your tests resemble the way your software is used, the more confidence they can give you.

### Setting up Tests with Gatsby

1. Install the dependencies:
```
yarn add -D jest babel-jest @babel/preset-typescript react-test-renderer babel-preset-gatsby identity-obj-proxy @testing-library/react @testing-library/jest-dom
```

2. Create a configuration file for Jest: **jest.config.js** and a file to transform [js, jsx, ts, tsx] files: **jest-preproccess.js**. (Both examples on the root directory)

3. Create a directory called __mocks__ and add two files to it: **file-mock.js** and **gatsby.js**. (Example on the mocks directory)    

4. Create a file called: **loadershim.js**. (Example on the root directory)

5. Create a file called: **setup-test-env.js**. (Example on the root directory)

6. Open your **jest.config.js** and add this entry to the bottom after 'setupFiles': 
```
setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
```

7. Start with a simple test just to see if it works. Create a __tests__ directory and create a file **example.js**. (Example on the tests directory with two basic tests)

8. Ok. Your project runs tests!

---

<h2 align="center">
  <a href="https://storybook.js.org/">Storybook</a>
</h2>

> _Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular. It makes building stunning UIs organized and efficient._ - Storybook Website.
<p>Storybook allows us to create and test (visually) components in isolation. It can be a great way to both document all of your components but also speed up development as all you need to focus on is one component at a time.</p>

### Adding Storybook to the project

1. Install Storybook:
```
npx sb init
```

2. Edit the **main.js** file generated in the **.storybook** directory. (Example on the .storybook directory)

3. Add the files: **preview-head.html**. **preview.js** e **webpack.config.js** files to the **.storybook** directory. (Example on the .storybook directory)

4. All set! Storybook is working. 

---

<h4 align="right">
<a href="https://haseebmajid.dev/blog/storybook-gatsby-babel-tailwind-typescript">Helpful example</a>
</h4>


1. Always make sure to name your repo in lowercase `netflix-landing-page`
2. Remove unused css files
3. In the component `@feature.jsx` make sure wheever defining a constant array always define them with uppercase fix this across whole codebase

```
const MOVIES={}
```

4. Also in newer versions of react you dont need to `import React from 'react'`
5. Always make sure to use function declaration instead of arrow function for example:

```jsx
const toggleFaq = (index) => {
  setActiveIndex(activeIndex == index ? null : index);
};

function toggleFaq() {}
```

fix this across the whole codebase

6. No need to add a seperate line to export component you can straight refactor all component like this

```jsx
export default function frequency() {}
```

7. Also learn the difference between default export when and where is it used and refactor the changes accordingly
8. Fix your component naming the component name Frequency doesnt match or explain what the component does also make sure the file name and the component name should mathc here you have a `footer.jsx` but it exports a component `frequency` similarly component `homebanner` should be `homepageBanner` be a little verbose with your variable naming
9. For the icons we usually use `lucide-react` generally so update that as well
10. Install the vscode extension for eslint
11. install vscode extension for prettier and update vscode settings (default formatter -> select prettier)

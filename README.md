# eDonec-collapsible

​
React component to wrap content inside collapsible when the option of open and close it.

​![grab-landing-page](https://s2.gifyu.com/images/collapseGif.gif)

# Installation

​

```sh
​
npm install edonec-collapsible --save
​
yarn add edonec-collapsible
​
```

​

# Usage

​

```js
import React from 'react';
import Collapsible from '@edonec/collapsible';
import '@edonec/collapsible/build/index.css';

// In case you do not want to customize the icons just import our's (more like fontawsome's) !
import '@edonec/collapsible/build/icons.css';
​
const App: React.FC = () => {
  return (
    <Collapsible open header="collapse">
      Consectetur adipiscing elit pellentesque habitant morbi tristique. Pulvinar pellentesque
      habitant morbi tristique. Vel quam elementum pulvinar etiam. Pulvinar pellentesque
      habitant morbi tristique senectus
    </Collapsible>
  );
};
​
export default App;
```

​

# HTML usage

​

```html
<div class="collapsible-card-edonec">
  <div class="collapsible-header-edonec">
    <div class="title-text-edonec">collapse header</div>
    <button type="button" class="collapsible-icon-button-edonec">
      <i class="fas fa-chevron-down-edonec rotate-center-edonec down"></i>
    </button>
  </div>
  <div class="collapsible-content-edonec" style="height: 82px;">
    <div class="collapsible-content-padding-edonec">
      Consectetur adipiscing elit pellentesque habitant morbi tristique.
      Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
      pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
    </div>
  </div>
</div>
```

​

# Props (Options)

​
| Prop | Description | types | isRequired |
| ------------------------- | --------------------------------------------------------- | ------------------------- | ---------- |
| open | initial state of the collapse | boolean | True |
| header | `<Collapsible header />` | React.ReactNode or string | False |
| titleClassName | title className : default text | string | False |
| iconButtonClassName | button wrapped with the icon className | string | False |
| contentClassName | Collapsible content className : default transition height | string | False |
| contentContainerClassName | container className : default padding | string | False |
| iconUp | Icon button in the corner looking upward | React.ReactNode | False |
| iconDown | Icon button in the corner looking downward | React.ReactNode | False |
​

# How it was made

If you want to read how it was created feel free to do so in our [Medium article](https://medium.com/edonec/build-a-react-collapsible-component-from-scratch-using-react-hooks-typescript-73dfd02c9208)
# Issues
​
Please create an issue for any bug or feature requests.


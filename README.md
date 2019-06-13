# Reddit Search Engine

## Part1
- Install enzyme & enzyme-adapter-react-16 `yarn add enzyme enzyme-adapter-react-16 --dev enzyme-to-json`
- Add first test: it should render the App component without crashing
- Add first snapshot test: matches snapshot

```js
// src/setupTests.js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

```js
// package.json
"jest": {
    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ]
  }
```

## Resources
-
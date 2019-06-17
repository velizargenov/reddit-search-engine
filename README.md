# Reddit Search Engine

## Task 1
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

## Task 2
- Create the Search component
- Save user's input in state
- Print user's input in console when search is clicked
- Add a snapshot test & a test to check if the component renders correctly
- Test if the onSubmit function is called when the user presses "Search"
- Test if state changes when the user enters a search term in the search bar

## Task 3
- Retrieve search results from reddit based on search term using the fetch API

## Resources
-
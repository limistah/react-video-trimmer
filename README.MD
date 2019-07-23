# react-video-trimmer

Amazing React component for manipulate videos lenght

## Demo

[See Demo](https://limistah.github.io/react-video-trimmer/)

## Installation

```bash
npm install --save react-video-trimmer
```

or:

```bash
yarn add react-video-trimmer
```

## Usage

**NOTE:** Do import the styles from `react-video-trimmer/dist/style.css`

```js
import ReactVideoTrimmer from "react-video-trimmer";
<div>
  <ReactVideoTrimmer />
</div>;
```

## Props

### timeRange: Object -> {start: 0, end: 0}

Start and end value in seconds the trimmer should restrict to. Defaults to
`{start: 0, end: video.duration}`

```js static
import React from "react";
import ReactVideoTrimmer from "react-video-trimmer";
import "react-video-trimmer/dist/style.css";

const Trimmer = () => {
  return (
    <div>
      <ReactVideoTrimmer timeRange={{ start: 10, end: 100 }} />
    </div>
  );
};
```

### onVideoEncode: function

Handler that receives the video encoding once it has been encoded

```js static
import React from "react";
import ReactVideoTrimmer from "react-video-trimmer";
import "react-video-trimmer/dist/style.css";

const Trimmer = () => {
  const handleVideoEncode = React.useCallback(result => {
    console.log("Encoding Result:", result);
  });
  return (
    <div>
      <ReactVideoTrimmer
        onVideoEncode={handleVideoEncode}
        timeRange={{ start: 10, end: 100 }}
      />
    </div>
  );
};
```

## React Ref

Pass a ref to access all the static methods of ReactVideoTrimmer methods

```js static
import React from "react";
import ReactVideoTrimmer from "react-video-trimmer";
import "react-video-trimmer/dist/style.css";

const Trimmer = () => {
  const trimmerRef = React.useRef();
  return (
    <div>
      <ReactVideoTrimmer timeRange={{ start: 10, end: 100 }} ref={trimmerRef} />
    </div>
  );
};
```

## Methods

###

## License

MIT

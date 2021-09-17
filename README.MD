# react-video-trimmer

Amazing React component for manipulating video length.

With the aid of FFMPEG in the browser, it gets easier to do amazing things with
media content.

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
  <ReactVideoTrimmer timeLimit={20} showEncodeBtn />
</div>;
```

## Props

### timeRange: Number

Start and end value in seconds the trimmer should restrict to.

```js static
import React from "react";
import ReactVideoTrimmer from "react-video-trimmer";
import "react-video-trimmer/dist/style.css";

const Trimmer = () => {
  return (
    <div>
      <ReactVideoTrimmer timeRange={20} />
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

### loadingFFMPEGText: string

A text to tell users that FFMPEG is being loaded in the background.

Default: _Please wait..._

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
        loadingFFMPEGText="Loading required libs..."
      />
    </div>
  );
};
```

## React Ref

Pass a ref to access all the static methods of ReactVideoTrimmer

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

### handleFFMPEGStdout: void

A listener to [ffmpeg-webworker](https://www.npmjs.com/package/ffmpeg-webworker)
`FFMPEGStdout` event

### handleFFMPEGReady: void

A listener to [ffmpeg-webworker](https://www.npmjs.com/package/ffmpeg-webworker)
`FFMPEGReady` event

### handleFFMPEGFileReceived: void

A listener to [ffmpeg-webworker](https://www.npmjs.com/package/ffmpeg-webworker)
`FFMPEGFileReceived` event

### handleFFMPEGDone: void

A listener to [ffmpeg-webworker](https://www.npmjs.com/package/ffmpeg-webworker)
`FFMPEGDone` event

> Converts the returned result into a `Blob`, before updating the video player

### decodeVideoFile: void

##### params

- **file: Blob** A Blob/File with type matching `video/*`
- **doneCB: function** Called after the decode action is completed

### handleFileSelected: void

Called when a valid video file is selected, in turn calls `decodeVideoFile` for
proper handling

##### params

- **file: Blob** A Blob/File with type matching `video/*`

### handleEncodeVideo: void

Called when a valid video file is selected, in turn calls `decodeVideoFile` for
proper handling

##### params

- **file: Blob** A Blob/File with type matching `video/*`

### handleDownloadVideo: void

Handler for the Download button `onClick` event. Downloads the converted video
file

##### params

- **encodedVideo: Blob** Encoded video data converted to `Blob`

## Preloading ffmpeg

ffmpeg.js will not load until the component is in scope. To override this, a
`preloadWebVideo` field has been included to make ffmpeg load ahead of this
component mount period.

```js static
import React from "react";
import { preloadWebVideo } from "react-video-trimmer";

// It is a function, no other process is required
preloadWebVideo();
```

## License

MIT

## Credit

This library uses the work of the guys at
[ffmpeg-webworker](https://www.npmjs.com/package/ffmpeg-webworker)

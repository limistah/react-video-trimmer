# react-video-trimmer

Amazing React component for manipulating video length

```js
import ReactVideoTrimmer, { preloadWebVideo } from "react-video-trimmer";
// Redundant, ReactVideoTrimmer is in scope, only call when it is not in scope and you require preloading of ffmpeg.js
preloadWebVideo({});

<div>
  <ReactVideoTrimmer
    loadingFFMPEGText="Loading required libs..."
    timeLimit={30}
    timeRange={5}
    showEncodeBtn
  />
</div>;
```

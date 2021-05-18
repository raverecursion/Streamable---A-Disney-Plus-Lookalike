# Yet Another Disney Lookalike

This is a fully functional Disney+ lookalike with streaming capabilities.

Simply add new entries via firebase (*youtube / vimeo / custom video support*)

A database collection sample provided for an easy setup

# Built with ReactJS 

## <a href="https://streamable.netlify.app/" target="_blank">DEMO</a>
![Alt text](/screenshot.png?raw=true "Screenshot")


# Installation

- Sign up to Firebase
- import ```dbsample.json``` to your firebase store
- ```npm install```
- ```react-scripts start```


### Database description

```
id: id
subTitle: subtitle
title: title
description: string
type: string
backgroundImg: "url/movieBackgroundImg.jpg"
cardImg: "url/movieCardImg.jpg"
titleImg: "url/movieTitleImg.jpg"
channel: "youtube", "vimeo", custom"
trailerID: "i5qOzqD9Rms", "url/movietrailer.mp4"
movieID: "i9qnzqD4Fms", "url/movie.mp4"
```



## Dependencies
    "@reduxjs/toolkit": "^1.5.1",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "firebase": "^8.4.1",
    "firebase-tools": "^9.9.0",
    "netlify": "^6.1.29",
    "node-sass": "^6.0.0",
    "plyr": "^3.6.8",
    "plyr-react": "^3.0.8",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-modal-video": "^1.2.6",
    "react-plyr": "^2.2.0",
    "react-redux": "^7.2.3",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "react-slick": "^0.28.1",
    "sass": "^1.32.13",
    "slick-carousel": "^1.8.1",
    "styled-components": "^5.2.3",
    "web-vitals": "^1.0.1"



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

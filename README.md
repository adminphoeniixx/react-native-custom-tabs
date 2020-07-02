# React Native Custom Tabs
[![npm version](https://badge.fury.io/js/react-native-custom-tabs.svg)](https://badge.fury.io/js/react-native-custom-tabs) [![Software License](https://img.shields.io/badge/license-Apache%202.0-brightgreen.svg)](https://github.com/droibit/react-native-custom-tabs/blob/develop/LICENSE)

[Chrome Custom Tabs](https://developer.chrome.com/multidevice/android/customtabs) for React Native.   
Custom Tabs is supported only for Android, so the behavior on each platform is bellow.

* Android  
    If Chrome is installed, open the URL in Chrome that you have customized some of the look & feel. If it is not installed, open in other browser.

* iOS  
    Presents SafariViewController by default for iOS >9.0. Else opens in Safari.

Customization and detailed behavior refer to the [Usage](#Usage).

## Installation

```
yarn add https://github.com/adminphoeniixx/react-native-custom-tabs#develop
```

Autolinking Support added for RN 0.60+


## Usage

Open the URL as `Linking` of React Native.

```javascript
CustomTabs.openURL('https://www.google.com').then((launched: {boolean}) => {
  console.log(`Launched custom tabs: ${launched}`);
}).catch(err => {
  console.error(err)
});
```

#### Customize for Android

You can customize the look & feel in Android. The following option is ignored in iOS.

```javascript
import {
    ANIMATIONS_SLIDE,
    ANIMATIONS_FADE
} from 'react-native-custom-tabs';

CustomTabs.openURL(url, {
  toolbarColor: '#607D8B',
  enableUrlBarHiding: true,
  showPageTitle: true,
  enableDefaultShare: true,
  // Specify full animation resource identifier(package:anim/name)
  // or only resource name(in case of animation bundled with app).
  animations: {
    startEnter: 'slide_in_bottom',
    startExit: 'slide_out_bottom',
    endEnter: 'slide_in_bottom',
    endExit: 'slide_out_bottom',
  },
  // And supports SLIDE and FADE as default animation.
  // animations: ANIMATIONS_SLIDE or ANIMATIONS_FADE.
  headers: {
    'my-custom-header': 'my custom header value'
  },
  forceCloseOnRedirection: true,
  readerMode: false,
  tintColor: '#000',
  barTintColor: '#fff',
  fromBottom: false,
});
```

The option to support:

|property|type|default|platform|description|
|--------|----|-------|--------|-----------|
|toolbarColor|string|undefined|Android|the Toolbar color. Supported formats are: #RRGGBB, #AARRGGBB, [etc](http://d.android.com/reference/android/graphics/Color.html#parseColor(java.lang.String)). |
|enableUrlBarHiding|boolean|undefined|Android|Enables the url bar to hide as the user scrolls down on the page.|
|showPageTitle|boolean|undefined|Android|Sets whether the title should be shown in the custom tab.|
|enableDefaultShare|boolean|undefined|Android|Whether to add a default shared items of the menu.|
|animations|Object|undefined|Android|Sets the exit and start animations. ANIMATIONS_FADE, ANIMATIONS_SLIDE or custom object with string properties `startEnter`, `startExit`, `endEnter` and `endExit` each defining an Android animation resource ID to use for the animations, such as `slide_in_right`.|
|headers|Object|undefined|Android|Sets any custom headers that should be used.|
|forceCloseOnRedirection|boolean|undefined|Android|Workaround that Custom Tabs doesn't close on redirecting back to app scheme.([#11](https://github.com/droibit/react-native-custom-tabs/pull/11))|
|tintColor|string|undefined|IOS|A String containing a hex, rgba or rgba color to use for the browser controls|
|barTintColor|string|undefined|IOS|A String containing a hex, rgba or rgba color to use for the background of the browser controls (only available on iOS 10 and higher)|
|readerMode|boolean|undefined|IOS|A boolean indicating to use Safari's Reader Mode if available|
|fromBottom|boolean|undefined|IOS|A boolean indicating to open the Safari View from the bottom|


`undefined` property is default behavior of the Custom Tabs.

Customize and default look & feel.  
![screenshot](http://i.imgur.com/0qE2E7a.gif)

## License

    Copyright (C) 2015 The Android Open Source Project
    Copyright (C) 2016 Shinya Kumagai

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

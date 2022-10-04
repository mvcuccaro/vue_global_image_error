# Vue Global Image Error
- Vue plugin to handle all missing image replacements in one location
- allows specified image replacements to be ignored on a tag by tag basis

## Use
```javascript
import globalImageError from 'vue-global-image-error';

Vue.use(globalImageError, {
    image_path: require('@/assets/logo.png')
})
```

## options
### image_path: url/path to replacement image
If no image_path option is provided the default image will be used.

![image_path](./default_sample.svg)



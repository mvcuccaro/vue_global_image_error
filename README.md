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

## error image override attribute
### data-error-fallback
You can provide a static fallback image that will be used in place of the option.image_path value
```html
<img src="http://localhost/test2.png" :data-error-fallback="require('@/assets/logo.png')">
```



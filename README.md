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
### image_path: url/path to replacemant image
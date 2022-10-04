const NGE = 'noglobalerror'
const DEFAULT_IMAGE_PATH = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTQgOWwtMi41MTkgNC0yLjQ4MS0xLjk2LTUgNi45NmgxNmwtNi05em04LTV2MTZoLTIwdi0xNmgyMHptMi0yaC0yNHYyMGgyNHYtMjB6bS0yMCA2YzAtMS4xMDQuODk2LTIgMi0yczIgLjg5NiAyIDJjMCAxLjEwNS0uODk2IDItMiAycy0yLS44OTUtMi0yeiIvPjwvc3ZnPg=="

let imageErrors = ($el, image_path) => {
  //get all images
  let allimages = $el.getElementsByTagName('img');

  //replacement function
  let errorFunc = (i) => {
    let replace = i.target.dataset['errorFallback'] || image_path;
    if(replace == i.target.src){
      return false
    }

    i.target.src = replace;
    i.target.style['object-fit'] = 'scale-down';
  }

  for(let ai of allimages){
    ai.removeEventListener('error', errorFunc); //get rid of existing listener

    //skip elements with attribute noglobalerror
    ;((ai_attr) => {
      if(ai_attr == null || ai_attr.trim().toLowerCase() == 'false')
        ai.addEventListener('error', errorFunc)
    })(ai.getAttribute(NGE))
  }
}

export default {
  install(Vue, options){
    Vue.mixin({
      updated(){
        imageErrors(this.$el, options.image_path || DEFAULT_IMAGE_PATH)
      },
      mounted(){
        imageErrors(this.$el, options.image_path || DEFAULT_IMAGE_PATH)
      }
    })
  }
}

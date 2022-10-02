const NGE = 'noglobalerror'

let imageErrors = ($el, image_path) => {
  //get all images
  let allimages = $el.getElementsByTagName('img');

  //replacement function
  let errorFunc = (i) => {
    i.target.src = image_path;
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
        imageErrors(this.$el, options.image_path)
      },
      mounted(){
        imageErrors(this.$el, options.image_path)
      }
    })
  }
}

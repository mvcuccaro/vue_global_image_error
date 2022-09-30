let imageErrors = ($el, image_path) => {
  let allimages = $el.getElementsByTagName('img');

  let errorFunc = (i) => {
    console.log('ERROR', i)
    i.target.src = image_path;
    i.target.style = ';object-fit: scale-down;border:1px solid black;' + `width: ${i.target.style.width};height: ${i.target.style.height}`
  }

  for(let ai of allimages){
    ai.removeEventListener('error', errorFunc)
    console.log(ai.getAttribute('noglobalerror'))
    if(ai.getAttribute('noglobalerror') == null || ai.getAttribute('noglobalerror').trim().toLowerCase() == 'false' ){
      ai.addEventListener('error', errorFunc)
    }
  }
}

export default {
  install(Vue, options){
    Vue.mixin({
      updated(){
        console.log('updated', this.$el)
        imageErrors(this.$el, options.image_path)
      },
      mounted(){
        console.log('plugin mounted')
        imageErrors(this.$el, options.image_path)
      },
      errorCaptured(){
        console.log('ERROR CAPTURED');
      }
    })
  }
}

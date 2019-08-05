
export default {
  bind(el, bindings) {
    const clickOutside = (event) => {
      if (!el.contains(event.target)) {
        bindings.value(event)
      }
    }
    
    document.addEventListener('click', clickOutside)
    el.$destroy = () => document.removeEventListener('click', clickOutside)
  },
  unbind(el) {
    el.$destroy()
  },
}

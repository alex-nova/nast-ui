<template>
  <div :class="[ 'n-items', { vertical, }, ]">
    <slot />
  </div>
</template>

<script>
import props from './../props'

export default {
  name: 'NItems',
  mixins: [ props, ],
}
</script>

<style lang="scss">
  html {
    --n-items-margin: 4px;
  }
</style>
<style scoped lang="scss">
  .n-items {
    margin: calc(-1 * var(--n-items-margin)) !important; // important потому что n-card обнуляет margin-top
    overflow: auto; // fix схлопывания margin. upd. ломает тени
    
    &::v-deep >* {
      margin: var(--n-items-margin);
    }
    
    &+.n-items { margin-top: calc(2 * var(--n-items-margin)); }
  }
</style>

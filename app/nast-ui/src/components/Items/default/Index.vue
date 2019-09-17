<template>
  <div :class="[ 'n-items', { vertical, }, ]">
    <div class="content"><slot /></div>
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
    margin: calc(-1 * var(--n-items-margin));
    
    .content {
      display: inline-block;
      width: 100%;
    }
    .content::v-deep >* {
      margin: var(--n-items-margin);
      display: inline-block;
    }
    
    &+.n-items { margin-top: calc(2 * var(--n-items-margin)); }
  }
</style>

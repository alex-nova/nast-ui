<template>
  <div :class="[ 'n-items', {'n-vertical':vertical}, ]">
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
    --n-items-margin: 8px;
  }
</style>
<style scoped lang="scss">
  .n-items {
    &.n-vertical {
      margin: calc(-1 * var(--n-items-margin)) 0;
      display: flex;
      flex-direction: column;

      & > * {
        margin: var(--n-items-margin) 0;
      }
    }

    &:not(.n-vertical) {
      margin: calc(-1 * var(--n-items-margin));

      &::v-deep >* {
        margin: var(--n-items-margin);
        display: inline-block;
        vertical-align: top;
      }
    }

  }
</style>

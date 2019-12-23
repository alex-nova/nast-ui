<template>
  <div class="n-modal">
    <div class="n-wrapper">
      <n-card :loading="loading">
        <slot />
      </n-card>
    </div>
    <div class="n-dark" @click="s_close"></div>
  </div>
</template>

<script>
import props from './../props'

export default {
  name: 'NModal',
  mixins: [ props, ],
  data() {
    return {
    }
  },
  methods: {
    s_close() {
      this.$emit('close')
      this.close()
    },
  },
}
</script>

<style lang="scss" scoped>
  .n-modal {
    
    .n-wrapper {
      position: fixed;
      z-index: 1001;
      top: 20%;
      left: calc(50% - 250px);
      width: 500px;
      
      &>header {
        background: var(--body-bg);
      }
      &>main {
        background: var(--content-bg);
      }
      &>main {
        background: var(--body-bg);
      }
    }
    --n-card-padding: 40px;
    
    
    .n-dark {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, .5);
      z-index: 1000;
    }
  }
</style>

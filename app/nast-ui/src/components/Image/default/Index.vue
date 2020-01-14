<template>
  <div :class="[ 'n-image', {'n-inline':inline}, {'n-round':round}, ]">
    <img ref="image" :src="s_src" :alt="alt" />
  </div>
</template>

<script>
import props from './../props'

export default {
  name: 'NImage',
  mixins: [ props, ],
  computed: {
    s_src() {
      return !this.mock ? this.src : 'https://dummyimage.com/800x800/9e9e9e/fff.jpg'
    },
  },
  watch: {
    file() {
      this.setFile()
    },
  },
  mounted() {
    this.setFile()
  },
  methods: {
    setFile() {
      const image = this.$refs.image
      if (image && this.file) {
        image.file = this.file

        const reader = new FileReader()
        reader.onload = (function(aImg) {
          return function(e) {
            aImg.src = e.target.result
          }
        })(image)
        reader.readAsDataURL(this.file)
      }
    },
  },
}
</script>

<style lang="scss">
  html {
    --n-image-border: none;
  }
</style>
<style lang="scss" scoped>
  .n-image {
    display: flex;
    max-width: 500px;
    max-height: 500px;

    &.n-inline {
      display: inline-flex;
    }
    &.n-round {
      img {
        border-radius: 100%;
      }
    }

    img {
      max-width: 100%;
      max-height: 100%;
      border: var(--n-image-border);
    }
  }
</style>

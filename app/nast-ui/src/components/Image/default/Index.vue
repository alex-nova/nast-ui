<template>
  <div :class="[ 'n-image', {'n-inline':inline}, {'n-round':round}, {'n-center':centered||bg}, {'n-bg':bg}, ]">
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
    --n-image-bg-color: rgba(127, 127, 127, .07)
  }
</style>
<style lang="scss" scoped>
  .n-image {
    display: flex;
    max-width: 500px;
    max-height: 500px;

    &.n-bg {
      background-image:
        linear-gradient(45deg, var(--n-image-bg-color) 25%, transparent 25%),
        linear-gradient(-45deg, var(--n-image-bg-color) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--n-image-bg-color) 75%),
        linear-gradient(-45deg, transparent 75%, var(--n-image-bg-color) 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    }
    &.n-center {
      align-items: center;
      justify-content: center;
      border: 1px solid var(--border-color);
    }
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

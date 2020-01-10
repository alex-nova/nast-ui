<template>
  <div class="n-upload">
    <n-form-item :title="title" active>
      <div class="n-input-area">
        <n-button @click="click">Выбрать файл</n-button>
        <input ref="input" type="file" :multiple="multi" @change="change" />
        <div v-if="!multi" class="n-preview"><n-image :file="files[0]" /></div>
      </div>
    </n-form-item>

    <template v-if="multi">
      <div v-for="(file, i) in files" :key="i">
        <n-image :file="file" />
        <div class="n-info">{{ file.name }} {{ size(file.size) }}</div>
      </div>
    </template>
  </div>
</template>

<script>
import props from './../props'

export default {
  name: 'NUpload',
  mixins: [ props, ],
  data() {
    return {
      files: [],
    }
  },
  methods: {
    size(bytes) {
      let sOutput = bytes + ' bytes'
      const aMultiples = [ 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB', ]
      let nMultiple = 0
      for (let nApprox = bytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
        sOutput = nApprox.toFixed(2) + ' ' + aMultiples[nMultiple] + ' (' + bytes + ' bytes)'
      }
      return sOutput
    },
    click() {
      this.$refs.input.click()
    },
    change() {
      this.files = this.$refs.input.files
    },
  },
}
</script>

<style lang="scss" scoped>
  .n-upload {
    .n-button {
      font-size: .8em;
    }
    .n-input-area {
      input {
        visibility: hidden;
        pointer-events: none;
        position: absolute;
        z-index: -1;
      }
    }
    .n-image {
      width: 100px;
    }
  }
</style>

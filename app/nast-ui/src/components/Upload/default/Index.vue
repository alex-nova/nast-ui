<template>
  <div class="n-upload">
    <n-form-item :title="title" active>
      <div class="n-input-area">
        <n-button @click="click">Выбрать файл</n-button>
        <input ref="input" type="file" :multiple="multi" @change="input" />
      </div>
      <div v-if="s_files.length" class="n-files">
        <n-editable-file v-for="(file, i) in s_files" :key="i" :file="file" @remove="remove(i)" />
      </div>
    </n-form-item>
  </div>
</template>

<script>
import each from 'lodash/each'
import props from './../props'

export default {
  name: 'NUpload',
  mixins: [ props, ],
  data() {
    return {
      s_files: this.files || [],
    }
  },
  watch: {
    files(value) {
      this.s_files = value
    },
  },
  methods: {
    click() {
      this.$refs.input.click()
    },
    remove(i) {
      const newFiles = this.s_files
      newFiles.splice(i, 1)

      this.s_change(newFiles)
    },
    input() {
      let newFiles = []
      if (this.multi) {
        newFiles = this.s_files
        each(this.$refs.input.files, (file) => {
          newFiles.push(file)
        })
      } else {
        newFiles = this.$refs.input.files
      }

      this.s_change(newFiles)
    },
    s_change(newFiles) {
      if (this.files === null) {
        this.$set(this, 's_files', newFiles)
      }

      this.change(newFiles)
      this.$emit('change', newFiles)
      this['update:files'](newFiles)
      this.$emit('update:files', newFiles)
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

    .n-files {
      margin: 0 -8px -8px;
      display: flex;
      & > * {
        margin: 8px;
      }
    }

  }
</style>

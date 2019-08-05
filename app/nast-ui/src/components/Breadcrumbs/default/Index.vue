<template>
  <div class="n-breadcrumbs">
    <div v-for="(item, key) in items" :key="item.title" :class="['item', {active: last(key)}]">
      <slot name="item" :item="item">
        <n-icon v-if="nIcon && item.icon" :icon="item.icon" />
        <n-link :to="last(key) ? {} : item.route" :class="[ { active: last(key), }, ]">{{ item.title }}</n-link>
      </slot>
      <span v-if="!last(key)" class="separator">
        <slot name="separator"> / </slot>
      </span>
    </div>
  </div>
</template>

<script>
import props from './../props'

export default {
  name: 'NBreadcrumbs',
  mixins: [ props, ],
  computed: {
    nIcon() {
      return Boolean(this.$options.components['nIcon'])
    },
  },
  methods: {
    last(key) {
      return key + 1 === this.items.length
    },
  },
}
</script>

<style lang="scss" scoped>
  .n-breadcrumbs {
    display: flex;
    font-size: .9em;
    
    .item {
      display: flex;
      align-items: center;
      color: var(--link-color);
      
      &.active {
        color: inherit;
        .n-link {
          color: inherit;
        }
      }
      .n-link:hover {
        text-decoration: none;
      }
      .n-icon {
        color: inherit;
        margin-right: 4px;
      }
      .separator {
        padding: 0 1em;
      }
    }
  }
</style>

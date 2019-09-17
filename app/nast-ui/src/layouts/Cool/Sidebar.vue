<template>
  <n-aside offset :class="['n-layout-sidebar', {'n-minimized': minimized}]">
    <div class="n-logo">
      <div class="n-logo-full"><slot name="logo" /></div>
      <div class="n-logo-min"><slot name="logo-min" /></div>
    </div>
  
    <div class="n-profile">
      <div class="n-avatar"><slot name="avatar" /></div>
      <div class="n-name">Administrator</div>
    </div>
  
    <layout-navigation :menu="menu" />
  
    <div class="n-search">
      <n-input icon-inner="search" placeholder="..." />
    </div>
  
    <div class="n-tools">
      <div class="n-top">
        <n-link :to="$route.name">
          <n-button outline icon="chevron-up" />
        </n-link>
      </div>
      <div class="n-minimize">
        <n-button outline icon="chevron-left" @click="minimize" />
      </div>
    </div>
  
    <div class="n-footer"><slot name="footer" /></div>
  </n-aside>
</template>

<script>
import LayoutNavigation from './Navigation'

export default {
  name: 'LayoutSidebar',
  components: { LayoutNavigation, },
  props: {
    menu: { type: Array, default: () => [], },
  },
  data: () => ({
    minimized: false,
  }),
  methods: {
    minimize() {
      this.minimized = !this.minimized
    },
  },
}
</script>

<style lang="scss" scoped>
  .n-layout-sidebar {
    --border-color: #444;
    --n-aside-width: 400px;
    display: flex;
    flex-direction: column;
    
    &::v-deep {
      a { color: var(--n-layout-sidebar-color-active); }
      &>.n-content {
        background: #2a2a2a;
        color: var(--n-layout-sidebar-color);
        font-size: .9em;
        padding-left: var(--n-layout-padding);
      }
    }
    
    .n-logo {
      padding: 20px 0 15px;
      display: flex;
      position: relative;
      align-items: center;
      &>* { display: flex; }
      &::v-deep img {
        max-height: 40px;
      }
    }
    .n-logo-min {
      display: none;
      &::v-deep img { max-width: 100%; }
    }
    
    .n-profile {
      padding: 12px 0 12px 0;
      margin: 0 0 10px 0;
      display: flex;
      align-items: center;
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
      
      &::v-deep img {
        border: 1px solid #fff;
        border-radius: 100%;
        height: 35px;
        width: 35px;
        vertical-align: top;
      }
      .n-name { margin-left: 10px; }
    }
    
    .n-search {
      margin-top: 20px;
      .n-input::v-deep {
        .n-wrapper {
          border-width: 1px;
        }
      }
    }
    
    .n-tools {
      padding: 10px 20px 10px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      --default-d-1: #333;
      --default-d-2: #333;
      --default-d-3: #333;
      --default-text: #aaa;
      
      .n-minimize {
        text-align: right;
      }
      &::v-deep a {
        color: inherit;
      }
    }
  
    .n-footer {
      border-top: 1px solid var(--border-color);
      padding: 20px 20px 20px 0;
      font-size: .9em;
    }
  
    // minimize logic
    & {
      &::v-deep {
        &.n-aside>.n-content { transition: all var(--transition); }
        .n-navigation {
          /*.n-item { transition: all var(--transition); }*/
          /*.n-item-content { transition: all var(--transition); }*/
        }
      }
      .n-logo-full { transition: all var(--transition); }
      .n-logo-min { transition: all var(--transition); }
      .n-minimize .n-button::v-deep .n-icon { transition: transform var(--transition); }
      .n-footer { transition: all var(--transition); }
      .n-top { transition: all var(--transition); }
    }
    &.n-minimized {
      --n-aside-width: 70px;
      --n-layout-sidebar-item-offset: 0;
      &::v-deep {
        & > .n-content {
          padding: 0 10px;
          &>* {
            display: flex; align-items: center; justify-content: center; width: 100%;
          }
        }
        .n-navigation {
          justify-content: flex-start;
          .n-content { margin: 0; padding: 15px 0; width: 100%; text-align: center; border-radius: 0; }
          .n-navigation-item { width: 100%; }
          .n-item { justify-content: center; }
          .n-item .n-icon { margin: 0; }
          .n-item-content { display: none; }
        }
      }
      .n-profile .n-name { display: none; }
      .n-logo-full { display: none; }
      .n-logo-min { display: flex; }
      .n-tools { padding-right: 0; }
      .n-top { opacity: 0; width: 0; visibility: hidden; }
      .n-minimize .n-button::v-deep .n-icon { transform: rotate(180deg); }
      .n-footer { line-height: 0; font-size: 0; padding: 0; opacity: 0; }
    }
  }
</style>

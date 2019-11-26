<template>
  <div class="n-layout-cool">
    <div class="layout-content-wrapper">
      <layout-sidebar :menu="menu">
        <template #logo><slot name="logo" /></template>
        <template #logo-min><slot name="logo-min" /></template>
        <template #avatar><slot name="avatar" /></template>
        <template #footer><slot name="footer" /></template>
      </layout-sidebar>
      
      <div class="layout-content">
        <main>
          <slot name="content"><router-view></router-view></slot>
        </main>
        <div class="tools">
          <div class="top">
          </div>
          <div class="bottom">
            <div class="item"><n-button icon="tachometer-alt" flat round /></div>
            <div class="item"><n-button icon="chart-line" flat round /></div>
            <div class="item"><n-button icon="cog" flat round /></div>
            <div class="divider"></div>
            <div class="item"><n-button icon="bell" flat round /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutSidebar from './Sidebar'

export default {
  name: 'NLayoutCool',
  components: { LayoutSidebar, },
  props: {
    menu: { type: Array, default: () => [], },
  },
}
</script>

<style lang="scss">
  html {
    --n-layout-padding: 100px;
    --n-layout-content-padding: 30px;
    --n-layout-sidebar-color: #999;
    --n-layout-sidebar-color-active: #fff;
    --n-layout-sidebar-item-offset: 20px;
  }
</style>
<style lang="scss" scoped>
  .n-layout-cool {
    --body-bg: #fbfbfd;
    
    overflow: hidden;
    
    .layout-content-wrapper {
      display: flex;
      flex-direction: row;
      min-height: 100vh;
    }
    .layout-content {
      flex-grow: 1;
      min-width: 350px;
      display: flex;
      flex-direction: column;
      padding-right: var(--n-layout-padding);
      background: #efeff5;
      
      main {
        flex-grow: 1;
        background: var(--body-bg);
        box-shadow: 1px 1px 10px rgba(127, 127, 127, .5);
      }
      
      .tools {
        position: fixed;
        right: 0;
        width: var(--n-layout-padding);
        height: 100%;
        justify-content: space-between;
        
        &, .top, .bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px 0;
        }
        .top { justify-content: flex-start; }
        .bottom { justify-content: flex-end; }
        
        .divider {
          width: 100%;
          height: 1px;
          margin: 15px 0;
          background: rgba(127, 127, 127, .2);
        }
        .item {
          margin: 0;
          .n-button::v-deep {
            opacity: .3;
            width: 45px;
            height: 45px;
            &:hover {
              opacity: 1;
              background: transparent;
              border-color: rgba(127, 127, 127, .2);
            }
            .icon {
              font-size: 1.1em;
            }
          }
        }
      }
    }
  
    &::v-deep .n-card {
      margin: 20px var(--n-layout-content-padding);
    }
    
    &::v-deep * {
      &::-webkit-scrollbar {
        height: 10px;
        width: 10px;
        margin-left: -10px;
        -webkit-appearance: none;
      }
      &::-webkit-scrollbar-thumb {
        height: 50px;
        background: rgba(127, 127, 127, .5) content-box;
        border: solid transparent;
        border-width: 1px 2px;
        border-radius: var(--border-radius);
      }
      &::-webkit-scrollbar-track {
        background-color: rgba(127, 127, 127, .1);
        border: 1px solid rgba(127, 127, 127, .15);
      }
    }
  }
</style>

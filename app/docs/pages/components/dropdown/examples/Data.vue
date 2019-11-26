<template>
  <div class="example-data">
    <div class="flex-block">
      <div>
        <div class="value">{{ selected1 }}</div>
        <n-dropdown :value.sync="selected1" :data="data1" inline><span class="action">Числа</span></n-dropdown>
      </div>
      <div>
        <div class="value">{{ selected2 }}</div>
        <n-dropdown :value.sync="selected2" :data="data2" inline><span class="action">Строки</span></n-dropdown>
      </div>
      <div>
        <div class="value">{{ selected3 }}</div>
        <n-dropdown :value.sync="selected3" :data="data3" inline><span class="action">Объекты</span></n-dropdown>
      </div>
      <div>
        <div class="value">{{ selected4 }}</div>
        <n-dropdown :value.sync="selected4" :data="data4" inline><span class="action">Дерево</span></n-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected1: null,
    selected2: null,
    selected3: null,
    selected4: null,
  
    data1: [ 1, 2, 3, 4, ],
    data2: [ 'One', 'Two', 'Three', 'Four', ],
    data3: [
      { title: 'One', value: 1, },
      { title: 'Two', value: 2, },
      { title: 'Three', value: 3, },
      { title: 'Four', value: 4, },
    ],
    data4: [
      { title: 'One', value: 1, children: [
        { title: 'Eleven', value: 11, },
        { title: 'Twelve', value: 12, },
        { title: 'Thirteen', value: 13, },
      ], },
      { title: 'Two', value: 2, children: [
        { title: 'Twenty one', value: 21, },
        { title: 'Twenty two', value: 22, },
        { title: 'Twenty three', value: 23, },
      ], },
      { title: 'Three', value: 3, children: [
        { title: 'Thirty one', value: 31, },
        { title: 'Thirty two', value: 32, },
        { title: 'Thirty three', value: 33, },
      ], },
    ],
  }),
}
</script>

<style lang="scss" scoped>
  .example-data {
    .flex-block {
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
    }
    
    .value {
      padding-bottom: 15px;
    }
    
    .action {
      cursor: pointer;
      color: var(--primary)
    }
  }
</style>

<template>
  <div>
    <div v-for="item in selectedFull" :key="item.value">{{ item.title }}</div>
    <!--    <div>{{ selectedFull.title }}</div>-->
    
    <n-dropdown :full-value.sync="selectedFull" multi :load="load">
      <n-button icon-right="angle-down">Open</n-button>
    </n-dropdown>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: [ 3, ],
    selectedFull: [ { title: 'Начальник управления', value: 3, }, ],
    
    data: [
      { title: 'Департамент Розничный Бизнес', value: 1, children: [
        { title: 'Управление Контактный Центр', value: 2, children: [
          { title: 'Начальник управления', value: 3, },
          { title: 'Главный специалист', value: 4, },
          { title: 'Ведущий специалист', value: 5, },
          { title: 'Специалист', value: 6, },
        ], },
      ], },
      { title: 'Департамент Сервиса Юридических лиц', value: 7, children: [
        { title: 'Начальник управления', value: 8, },
        { title: 'Главный специалист', value: 9, },
        { title: 'Первый специалист', value: 10, },
        { title: 'Второй специалист', value: 11, },
        { title: 'Третий специалист', value: 12, },
        { title: 'Четвертый специалист', value: 13, },
        { title: 'Пятый специалист', value: 14, },
        { title: 'Шестой специалист', value: 15, },
        { title: 'Седьмой специалист', value: 16, },
        { title: 'Восьмой специалист', value: 17, },
        { title: 'Девятый специалист', value: 18, },
        { title: 'Десятый специалист', value: 23, },
        { title: 'Десятый специалист', value: 24, },
        { title: 'Десятый специалист', value: 25, },
        { title: 'Десятый специалист', value: 26, },
        { title: 'Десятый специалист', value: 27, },
        { title: 'Десятый специалист', value: 28, },
        { title: 'Десятый специалист', value: 29, },
        { title: 'Десятый специалист', value: 30, },
        { title: 'Десятый специалист', value: 31, },
        { title: 'Десятый специалист', value: 32, },
        { title: 'Десятый специалист', value: 33, },
        { title: 'Десятый специалист', value: 34, },
        { title: 'Десятый специалист', value: 35, },
        { title: 'Десятый специалист', value: 36, },
        { title: 'Десятый специалист', value: 37, },
        { title: 'Десятый специалист', value: 38, },
        { title: 'Десятый специалист', value: 39, },
        { title: 'Десятый специалист', value: 40, },
      ], },
      { title: 'Директор Департамента', value: 21, },
      { title: 'Заместитель Директора Департамента', value: 22, },
    ],
  }),
  methods: {
    load(parent, params = {}) {
      const page = params.page
      const size = 3
      
      return new Promise((resolve) => {
        setTimeout(() => {
          let result = []
          if (parent) {
            this.eachDeep(this.data, 'children', (item) => {
              if (item.value === parent.value) {
                result = item.children
              }
            })
          } else {
            result = this.data
          }
          
          if (page !== undefined) {
            result = result.slice(page * size, (page + 1) * size)
          }
          
          result = result.map((i) => {
            if (i.children) return { ...i, children: true, }
            return i
          })
          
          resolve({ data: result, })
        }, 500)
      })
    },
    eachDeep(container, childrenName, callback) {
      container.map((object) => {
        callback(object)
        if (object[childrenName]) {
          this.eachDeep(object[childrenName], childrenName, callback)
        }
      })
    },
  },
}
</script>

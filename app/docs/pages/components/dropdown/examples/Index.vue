<template>
  <div>
    <n-dropdown :data="data" :value.sync="selected" :full-value.sync="selectedFull" item-value="value" item-title="title">
      <n-button icon-right="angle-down">Open</n-button>
    </n-dropdown>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: 1,
    selectedFull: null,
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
        { title: 'Десятый специалист', value: 19, },
      ], },
      { title: 'Директор Департамента', value: 21, },
      { title: 'Заместитель Директора Департамента', value: 22, },
    ],
  }),
  methods: {
  
  },
}
</script>

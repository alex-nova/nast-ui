<template>
  <div>
    <n-dropdown :value="data">
      <n-button icon-right="angle-down">Open</n-button>
    </n-dropdown>
  </div>
</template>

<script>
export default {
  data: () => ({
    data: [
      { title: 'Первый', value: 1, },
      { title: 'Второй', value: 2, },
      { title: 'Третий', value: 3, },
    ],
  }),
}
</script>

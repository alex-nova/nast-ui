<template>
  <div class="modal-card-example-index">
    <n-modal-card :tabs="tabs" :value.sync="open" name="user1" :disabled="$form.editable()">
      <template #header>Карточка человека</template>
      <template #body>
        <n-divide class="body">
          <n-items class="content">
            <div class="avatar">
              <img :src="avatar" alt="avatar" />
            </div>
            <div>
              <div>{{ $form.get('name') }} {{ $form.get('lastname') }}</div>
              <div>Online</div>
            </div>
          </n-items>
          <n-items>
            <div><n-button icon="trash" /></div>
          </n-items>
        </n-divide>
      </template>
      <template #tab.index>
        <n-items vertical>
          <n-input title="Имя" v-bind="$form.input('name')" />
          <n-input title="Фамилия" v-bind="$form.input('lastname')" />
          <n-input title="Телефон" v-bind="$form.input('phone')" />
          <n-input title="Адрес" v-bind="$form.input('address')" />
        </n-items>
      </template>
      <template #tab.roles>
        roles
      </template>
      <template #footer>
        <n-divide>
          <n-button>Закрыть</n-button>
          <n-items>
            <n-button v-if="!$form.editable()" color="primary" @click="$form.edit()">Редактировать</n-button>
            <n-button v-if="$form.editable()" @click="$form.cancel()">Отмена</n-button>
            <n-button v-if="$form.editable()" color="success" @click="$form.edit()">Сохранить</n-button>
          </n-items>
        </n-divide>
      </template>
    </n-modal-card>
  
    <n-button @click="open = true">Открыть</n-button>
  </div>
</template>

<script>
import avatar from 'assets/images/avatar.png'

export default {
  data: () => ({
    avatar,
    open: false,
    tabs: [
      { name: 'index', title: 'Основная информация', },
      { name: 'roles', title: 'Роли', },
    ],
  }),
  created() {
    this.$form.init({
      name: 'Алексей',
      lastname: 'Красилов',
      phone: '+7 (707) 807-13-12',
      address: 'Бухар Жирау 88б, 103',
    }, false)
  },
}
</script>

<style lang="scss" scoped>
.modal-card-example-index {
  .body {
    .content {
      --n-items-margin: 10px;
    }
    
    & > .n-items > * {
      vertical-align: middle;
    }
    
    .avatar {
      display: inline-flex;
      img {
        width: 80px;
        height: 80px;
      }
    }
  }
}
</style>

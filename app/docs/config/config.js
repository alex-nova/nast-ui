
export default {
  app: {
    baseUrl: '/',
  },

  api: {
    servers: {
      default: {
        // dev: 'http://127.0.0.1:8000/api/',
        dev: 'http://46.101.127.68/api/',
        prod: 'http://46.101.127.68/api/',
      },
      nova: {
        dev: 'https://cms.nova.st/api/',
        prod: 'api/',
      },
    },
    init: () => {
      $app.api.config({})
    },
    callback: (response) => {
      if (!response.data.content) {
        response.data.content = response.data.data
      }
      return response
    },
    catch: (error) => {
      if (error.response.status === 401) {
        $app.auth.logout()
      }
      throw error
    },
    dataKey: 'data.content',
  },

  data: {
    preload: false,
  },

  router: {
    pageTitle(name, type) {
      return `app.${type}.${name}`
    },
    titles() {
      return {
        app: {
          pages: {
            index: 'Описание',
            componentsGroup: 'Компоненты',
            components: 'Все компоненты',
            button: 'Button',
            dropdown: 'Dropdown',
            input: 'Input',
            loader: 'Loader',
            select: 'Select',
            list: 'List',
            modalCard: 'ModalCard',
            image: 'Image',
            upload: 'Upload',
            directives: 'Директивы',
            konstructor: 'Конструктор',

            baseComponentsGroup: 'Базовые компоненты',
            popup: 'Popup',
            progress: 'Progress',

            comp: {
              datatable: 'Datatable',
            },
          },
          navigation: {
            dataComponentsGroup: 'Компоненты для работы с данными',
          },
        },
      }
    },
    navigation() {
      return [
        { name: 'index', },
        { name: 'dataComponentsGroup', icon: 'folder', children: [
          { name: 'c.dataComponent', },
          { name: 'comp.datatable', },
        ], },
        { name: 'componentsGroup', icon: 'folder', children: [
          { name: 'button', },
          { name: 'dropdown', },
          { name: 'input', },
          { name: 'loader', },
          { name: 'select', },
          { name: 'list', },
          { name: 'modalCard', },
          { name: 'image', },
          { name: 'upload', },
        ], },
        { name: 'baseComponentsGroup', icon: 'folder', children: [
          { name: 'popup', },
          { name: 'progress', },
        ], },
        { name: 'directives', },
      ]
    },
  },

  auth: {
    api: (u, p) => $api.auth.login(u, p),
    getToken: (response) => {
      return response.data.content.token
    },
    getUser: (response) => {
      return response.data.content.user
    },
  },

  locale: {
    api: {
      locales: () => {},
      elements: () => {},
      change: () => {},
    },
  },

  form: {
    input: (self, name, form) => ({
      name,
      value: self.$form.get(name, form),
      input: (value) => self.$form.set(name, value, form),
      danger: self.$form.errors(name, form),
      text: self.$form.editable(form) === false,
    }),
    validations: {
      customRule(value) {
        return value.length === 14
      },
    },
    messages: {
      customRule: 'Ошибка',
    },
  },
}

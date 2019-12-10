import isArray from 'lodash/isArray'


const axios = (method, url, data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        headers: {},
        data: [
          { username: 'admin', name: 'Администратор', isAdmin: true, },
          { username: 'moderator', name: 'Модератор', },
          { username: 'user', name: 'Пользователь', },
          { username: 'vagabond', name: 'Аноним', },
        ],
      })
    }, 1)
  })
}

const defaultModelize = (data, Model) => {
  return isArray(data) ? data.map((item) => new Model(item)) : new Model(data)
}

const get = (url, Model, modelize = defaultModelize) => {
  return axios('get', url).then((response) => {
    return {
      ...response,
      data: modelize(response.data, Model),
    }
  })
}

//

/**
 *
 */
class ApiUser {
  username = ''
  name = ''
  isAdmin = false
  
  /**
   * @param {object} model
   */
  constructor(model) {
    this.username = model.username
    this.name = model.name
    if (model.isAdmin !== undefined) {
      this.isAdmin = model.isAdmin
    }
  }
}

export default {
  users: {
    get(get1, id) {
      return get('/api/v1/users/'+id, ApiUser)
    },
  },
}

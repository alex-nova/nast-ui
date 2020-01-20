import mocks from './mocks'

/**
 *
 */
export default class CustomApi {
  users = {
    get(id) {
      return $app.api.get([ 'users{}', id, ]).mock(() => {
        return mocks.users
      })
    },
  }
}

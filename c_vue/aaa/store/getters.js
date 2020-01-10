import { getLocal } from '@/utils/local'

export default {
  loading: state => state.app.loading,
  dictionaries: state => state.app.dictionaries,
  collapse: state => state.app.collapse,
  organizations: state => state.app.organizations,
  processConfigs: state => state.app.processConfigs,
  user: state => {
    // console.log(`state.user：${JSON.stringify(state.user)}`)
    if (!state.user.id && getLocal('user')) {
      state.user = JSON.parse(getLocal('user'))
    }
    return state.user
  }
}

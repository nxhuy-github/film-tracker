import Api from '@/services/Api'

export default {
  index () {
    return Api().get('films')
  },
  post (song) {
    return Api().post('films', song)
  }
}

import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('films', {
      params: {
        search: search
      }
    })
  },
  post (film) {
    return Api().post('films', film)
  },
  show (filmId) {
    return Api().get(`films/${filmId}`)
  },
  put (film) {
    return Api().put(`films/${film.id}`, film)
  }
}

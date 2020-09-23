const util = {
  setToken:(token) => {
    localStorage.setItem('system_login_token', token)
  },
  getToken: () => {
    return localStorage.getItem('system_login_token')
  },
  clearToken:() => {
    localStorage.removeItem('system_login_token')
  }
}

export default util;
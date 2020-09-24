const util = {
  setToken:(token) => {
    localStorage.setItem('system_login_token', token)
  },
  getToken: () => {
    return localStorage.getItem('system_login_token')
  },
  clearToken:() => {
    localStorage.removeItem('system_login_token')
  },
  setCookie: (name,value) => {
    if(!name||!value) return;
    const days = 30; // 默认30天有效期
    let exp = new Date();
    exp.setTime(exp.getTime() + days*24*60*60*1000);
    document.cookie = name + '=' + encodeURIComponent(value) +";expires="+ exp.toUTCString();
  },
  getCookie: (name) => {
    const arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null) return decodeURIComponent(arr[2]);
    return null;
  },
  deleteCookie: (name) => {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cval = this.getCookie(name);
    if(!cval) document.cookie=name +"="+cval+";expires="+exp.toUTCString();
  }
}

export default util;
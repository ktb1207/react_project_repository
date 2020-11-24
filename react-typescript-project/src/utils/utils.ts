const util = {
  setToken: (token: string): void => {
    localStorage.setItem('system_login_token', token);
  },
  getToken: (): string | null => {
    return localStorage.getItem('system_login_token');
  },
  clearToken: (): void => {
    localStorage.removeItem('system_login_token');
  },
  hasClass: (node: HTMLElement, className: string): boolean => {
    if (typeof node.getAttribute('class') as string) {
      // 存在class属性
      if ((node.getAttribute('class') as string).indexOf(className) > -1) {
        return true;
      }
      return false;
    }
    return false;
  }
};
export default util;

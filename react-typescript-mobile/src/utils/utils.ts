const util = {
  setToken: (token: string): void => {
    localStorage.setItem('mobile_token', token);
  },
  getToken: (): string | null => {
    return localStorage.getItem('mobile_token');
  },
  clearToken: (): void => {
    localStorage.removeItem('mobile_token');
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

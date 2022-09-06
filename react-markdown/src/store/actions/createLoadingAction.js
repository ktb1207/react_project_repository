import { SHOW_LOADING, HIDE_LOADING } from '../types/index';

export function showLoading() {
  return {
    type: SHOW_LOADING,
  };
}

export function hideLoading() {
  return {
    type: HIDE_LOADING,
  };
}

//管理用戶數據相關

import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  // 定義管理用戶數據的 state
  const userInfo = ref({});
  const loginAccount = ref('');
  const loginPassword = ref('');

  // 設置登錄帳號和密碼
  const setLoginCredentials = (account, password) => {
    loginAccount.value = account;
    loginPassword.value = password;
  };

  // 把 state 和 action 返回
  return {
    userInfo,
    loginAccount,
    loginPassword,
    setLoginCredentials,
  };
});

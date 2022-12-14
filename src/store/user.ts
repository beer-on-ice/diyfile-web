import { acceptHMRUpdate, defineStore } from 'pinia'
import piniaPersistConfig from '~/config/piniaPersist'
import type { UserStore } from '~/types/user'

export const useUserStore = defineStore('user', {
  state: (): UserStore => ({
    // token
    token: '',
    // token 前缀
    tokenHead: '',
    // 刷新 token
    refreshToken: '',
    // 用户名
    userName: '',
    // 头像
    avatar: '',
    // i18n 语言
    language: '',
    // 暗黑模式
    theme: '',
  }),
  actions: {
    /** 设置用户名称 */
    setUserName(name: string) {
      this.userName = name
    },
    /** 设置 token */
    setToken(token: string) {
      this.token = token
    },
    /** 设置 token 前缀 */
    setTokenHead(tokenHead: string) {
      this.tokenHead = tokenHead
    },
    /** 设置刷新 token */
    setRefreshToken(refreshToken: string) {
      this.refreshToken = refreshToken
    },
    /** 设置头像 */
    setAvatar(avatar: string) {
      this.avatar = avatar
    },
    /** 设置 i18n 语言 */
    setLanguage(language: string) {
      this.language = language
    },
    /** 设置暗黑模式 */
    setTheme(theme: string) {
      this.theme = theme
    },
  },
  persist: piniaPersistConfig('user'),
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))

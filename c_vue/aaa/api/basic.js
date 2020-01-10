import http from '@/utils/http'

/**
 * 用户登陆
 * @param data
 * @returns
 */
export const login = data => http.post(`/login`, data)
/**
 * 用户退出
 * @returns {AxiosPromise<any>}
 */
export const logout = () => http.get('/logout')

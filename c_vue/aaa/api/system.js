import http from '@/utils/http'

/**
 * 创建公司
 * @param params
 */
export const createOrganization = data => http.post('/v1/organizations', data)

/**
 * 更新公司信息
 * @param params
 */
export const updateOrganization = data => http.put('/v1/organizations', data)

/**
 * 删除公司
 * @param {ID}
 */
export const deleteOrganization = id => http.delete(`/v1/organizations/${id}`)

/**
 * 查询公司树结构
 * @param params
 */
export const getOrganizationTree = () => http.get('/v1/organizations/trees')
/**
 * 查询公司列表
 * @param params
 */
export const getOrganizations = () => http.get('/v1/organizations')

/**
 * 创建字典
 * @param {Object} params
 */
export const createDictionary = data => http.post('/v1/dictionaries', data)

/**
 * 更新字典
 * @param {Object} params
 */
export const updateDictionary = data => http.put('/v1/dictionaries', data)

/**
 * 删除字典
 * @param {Id} id
 */
export const deleteDictionary = id => http.delete(`/v1/dictionaries/${id}`)
/**
 * 获取字典所有类型
 * @returns {*}
 */
export const getDictionaryTypes = () => http.get('/v1/dictionaries/types')

/**
 * 获取字典列表
 * @param {Object} params
 */
export const getDictionaries = params => http.get('/v1/dictionaries', { params: params })

/**
 * 获取字典树形
 * @param {Object} params
 */
export const getDictionaryTrees = params => http.get('/v1/dictionaries/trees', { params: params })

/**
 * 创建特权
 * @param {*} params
 */
export const createPrivilege = date => http.post('/v1/privileges', date)

/**
 * 更新特权
 * @param {*} params
 */
export const updatePrivilege = date => http.put('/v1/privileges', date)

/**
 * 删除特权
 * @param {Id} id
 */
export const deletePrivilege = id => http.delete(`/v1/privileges/${id}`)

/**
 * 获取菜单树
 * @returns {*}
 */
export const getPrivilegeMenuTree = () => http.get('/v1/privileges/menu_trees')

/**
 * 获取API列表
 * @param {Object} params
 */
export const getPrivilegeApiList = params => http.get('/v1/privileges/api_pages', { params: params })

/**
 * 创建权限
 * @param {Object} params
 */
export const createRole = data => http.post('/v1/roles', data)

/**
 * 更新权限
 * @param {Object} params
 */
export const updateRole = data => http.put('/v1/roles', data)

/**
 * 删除权限
 * @param {Id} id
 */
export const deleteRole = id => http.delete(`/v1/roles/${id}`)
/**
 * 获取角色详情
 * @param {Id} id
 */
export const getRoleById = id => http.get(`/v1/roles/${id}`)

/**
 * 获取角色
 * @param {*} params
 */
export const getRoles = () => http.get('/v1/roles')

/**
 * 分配权限
 * @param {Id} id
 * @param {Object} params
 */
export const distributionRole = (id, data) => http.put(`/v1/roles/${id}/privileges`, data)

/**
 * 创建用户
 * @param {Object} params
 */
export const createUser = data => http.post('/v1/users', data)

/**
 * 更新用户信息
 * @param {Object} params
 */
export const updateUser = data => http.put('/v1/users', data)

/**
 * 根据ID获取用户信息
 * @param {Id} id
 */
export const getUserById = id => http.get(`/v1/users/${id}`)

/**
 * 删除用户
 * @param {Id} id
 */
export const deleteUser = id => http.delete(`/v1/users/${id}`)

/**
 * 获取用户权限
 * @param {Id} id
 */
export const getUserRoles = id => http.get(`/v1/users/${id}/roles`)

/**
 * 分页查询用户
 * @param {Object} params
 */
export const getUserPage = params => http.get(`/v1/users/pages`, { params: params })
/**
 * 查询用户列表
 * @param {Object} params
 */
export const getUsers = params => http.get(`/v1/users`, { params: params })
/**
 * 更新用户密码
 * @param data
 * @returns {IDBRequest<IDBValidKey> | Promise<void>}
 */
export const updateUserPassword = data => http.put('/v1/users/passwords', data)

import axios from 'axios'

import API from '@/api'

// 基础配置
const _ajaxConfig = axios.create({
    baseURL: API.baseURL,
    headers: {
        'Content-Type': 'json'
    }
})

/**
 * 混入全局参数 token
 * @param params
 * @returns {{} & {} & {token: *}}
 */
function mixinGlobalParams(params = {}) {
    const token = (Date.now()).toString(16)

    return Object.assign({}, params, {
        token
    })
}

// Add a request interceptor
_ajaxConfig.interceptors.request.use((config) => {
    // 混入公共参数
    switch (config.method) {
        case 'put':
        case 'post':
        case 'patch':
            // 这些情况，请求参数放在 params
            config.data = mixinGlobalParams(config.data)

            break
        default:
            // 默认，请求参数放在 params
            config.params = mixinGlobalParams(config.data)
    }

    return config
}, (error) => {
    // Do something with request error
    alert(`网络错误\n${error.message}`)

    return Promise.reject(error)
})

// Add a response interceptor
_ajaxConfig.interceptors.response.use((response) => {
    // Do something with response data
    const res = response.data

    // if (res.code !== 0) {
    //     const error = {
    //         code: res.code,
    //         status: response.status,
    //         message: res.data
    //     }

    //     return Promise.reject(error)
    // }

    return res
}, (error) => {
    // Do something with response error
    if (typeof error.response === 'undefined') {
        alert(`网络错误\n${error.message}\n${error.config.url}`)

        return Promise.reject(error)
    }

    switch (error.response.status) {
        case 403:
            alert(403)

            break
        default:
            alert(`网络错误\n${error.response.status}\n${error.response.config.url}`)
    }

    return Promise.reject(error)
})

export function ajax(apiName, data = {}) {
    const api = API[apiName]
    let { url, method } = API[apiName]

    if (typeof api.suffix !== 'undefined' && api.suffix !== '') {
        url += data[api.suffix]
    }

    return _ajaxConfig({
        url,
        method,
        data
    })
}

export default ajax
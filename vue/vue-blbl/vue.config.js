module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                '/api': {
                    target: 'http://api.bilibili.com',
                    changeOrigin: true, //是否跨域
                    pathRewrite: {
                        '^/api': '' //规定请求地址以什么作为开头
                    }
                }
            }
        }
    }
}
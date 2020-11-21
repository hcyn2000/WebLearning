module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                '/api': {
                    // target: 'http://passport.bilibili.com',
                    target: 'http://47.98.159.95/m-api',
                    changeOrigin: true, //是否跨域
                    pathRewrite: {
                        '^/api': '' //规定请求地址以什么作为开头
                    }
                }
            }
        }
    }
}
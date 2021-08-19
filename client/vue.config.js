module.exports  = {
    configureWebpack: {
        devServer: {
            proxy: {
                target: 'https://mehmapp.herokuapp.com/'
            }
        }
    }
}
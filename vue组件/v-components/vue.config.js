const port = 7070;
const title = 'Cauchy';
module.exports = {
    devServer: {
        port
    },
    configureWebpack: {
        name: title
    }
}
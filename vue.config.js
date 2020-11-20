module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    host: 'localhost',
        port: 8000, 
        https: false,
        hotOnly: true,
        proxy: { // proxyTable 설정
            '/api': {
                target: 'http://localhost:8081',
                ws: false,
                changeOrigin: true
       }
    }
  }
}

// proxy
// localhost:8080/api 로 요청이 들어오면, localhost:8081/api로 재요청을 한다.
// 응답을 받을 시, 개발자에게 받은 응답을 되돌려준다.
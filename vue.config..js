module.exports = {
  devServer: {
    proxy:{
      '^/api/datas':{
          target: 'http://localhost:8080',
          ws: true,
          secure: false
      }
  }
  }
}

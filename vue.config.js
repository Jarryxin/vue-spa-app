const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    // 选项
    chainWebpack:config=> {
        // config.output.libraryTarget("system")
    }
  })
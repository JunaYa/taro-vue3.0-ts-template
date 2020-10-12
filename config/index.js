var path = require('path')
const config = {
  // 项目名称
  projectName: 'mp-ai',
  // 项目创建日期
  date: '2020-10-12',
  // 设计稿尺寸
  designWidth: 750,
  // 设计稿尺寸换算规则
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  // 项目源码目录
  sourceRoot: 'src',
  // 项目产出目录
  outputRoot: 'dist',
  // 编译插件配置
  plugins: [],
  // 全局变量设置
  defineConstants: {
  },
  // 为了避免书写多级相对路径
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/package': path.resolve(__dirname, '..', 'package.json'),
    '@/project': path.resolve(__dirname, '..', 'project.config.json'),
  },
  // 文件 copy 配置
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  // 配置 terser 工具以压缩 JS 代码
  terser: {
    enable: true,
    // config: {
    //   // 配置项同 https://github.com/terser/terser#minify-options
    // }
    config: {
      parse: {
        // parse options
      },
      compress: {
        // compress options
      },
      mangle: {
        // mangle options
        properties: {
          // mangle property options
        }
      },
      format: {
        // format options (can also use `output` for backwards compatibility)
      },
      sourceMap: {
        // source map options
      },
      ecma: 5, // specify one of: 5, 2015, 2016, etc.
      keep_classnames: false,
      keep_fnames: false,
      ie8: false,
      module: false,
      nameCache: null, // or specify a name cache object
      safari10: false,
      toplevel: false,
    }
  },
  // 配置 csso 工具以压缩 CSS 代码。
  csso: {
    enable: true,
    config: {
      // 配置项同 https://github.com/css/csso#minifysource-options
    }
  },
  // sass 全局引入配置
  sass: {
    resource: [
      'src/assets/styles/variable.scss',
      'src/assets/styles/mixins.scss'
    ],
    // 指定项目根目录路径形式
    projectDirectory: path.resolve(__dirname, '..'),
    // data 中声明的 $nav-height 变量优先级最高。
    // data: '$nav-height: 48px;'
  },
  // 框架，react，nerv，vue, vue3 等
  framework: 'vue3',
  // 小程序端专用配置
  mini: {
    postcss: {
      autoprefixer: {
        enable: true
      },
      pxtransform: {
        enable: true,
        config: {

        }
      },
      // 小程序端样式引用本地资源内联配置
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    // 自定义 Webpack 配置
    // webpackChain (chain, webpack) {},
    // 关于压缩小程序 xml 文件的相关配置
    minifyXML: {
      // 是否合并 xml 文件中的空格
      collapseWhitespace: false
    },
    // 用于告诉 Taro 编译器需要抽取的公共文件
    // runtime: webpack 运行时入口
    // taro: node_modules 中 Taro 相关依赖
    // vendors: node_modules 除 Taro 外的公共依赖
    // common: 项目中业务代码公共逻辑
    commonChunks: ['runtime', 'vendors', 'taro', 'common'],
    // 或者以函数形式实现
    // commonChunks (commonChunks) {
    //   // commonChunks 的取值即为默认的公共文件名数组
    //   commonChunks.push('runtime')
    //   commonChunks.push('vendors')
    //   commonChunks.push('taro')
    //   commonChunks.push('common')
    //   return commonChunks
    // }

    // 为某些页面单独指定需要引用的公共文件
    // 例如在使用小程序分包的时候，为了减少主包大小，分包的页面希望引入自己的公共文件，而不希望直接放在主包内。
    // 那么我们首先可以通过 webpackChain 配置 来单独抽离分包的公共文件，然后通过 mini.addChunkPages 为分包页面配置引入分包的公共文件，
    // 其使用方式如下：
    // pages 参数为 Map 类型，用于为页面添加公共文件
    // pagesNames 参数为当前应用的所有页面标识列表，可以通过打印的方式进行查看页面的标识
    addChunkPages: (pages, pagesNames) => {
      // pages.set('pages/index/index', ['eating', 'morning'])
    },
    // style-loader 的附加配置
    styleLoaderOption: {},
    cssLoaderOption: {},
    // sass-loader 的附加配置
    sassLoaderOption: {
      // implementation: require("dart-sass")
    },
    // mini-css-extract-plugin 的附加配置
    miniCssExtractPluginOption: {},
    // 针对 png | jpg | jpeg | gif | bpm | svg 文件的 url-loader 配置
    imageUrlLoaderOption: {},
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}

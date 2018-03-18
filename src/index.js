import Promise from 'promise';
import {join} from 'path';
import slash from 'slash';

export default class CdnPlugin {

  constructor(options = {
    //默认配置
  }) {
    this.options = {
      //...defaultConfig,
      ...options
    }
  }

  apply(compiler) {
    compiler.plugin('after-emit', (compilation, callback) => {
      const assets = compilation.assets;
      const hash = compilation.hash;
      // 获取入参
      const {} = this.options;

      let {path = '[hash]'} = this.options;
      path = path.replace('[hash]', hash);

      const promises = Object.keys(assets).filter((fileName) => {
        let valid = assets[fileName].emitted;
        if (include && valid) {
          valid = include.some((includeFileName) => {
              if (includeFileName instanceof RegExp) {
                return includeFileName.test(fileName);
              }
              return includeFileName === fileName;
            }
          )
        }
        return valid;
      }).map((fileName) => {

        const key = slash(join(path, fileName));
        //配置上传

        const promise = new Promise((resolve, reject) => {
          const begin = new Date.valueOf();
          // 上传

        });

        return promise;
      });

      Promise
        .all(promises)
        .then((res) => {
          console.log('==>', res);
          callback();
        })
        .catch((e) => {
          callback(e);
        });
    });
  }
}

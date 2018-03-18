'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _promise = require('promise');

var _promise2 = _interopRequireDefault(_promise);

var _path = require('path');

var _slash = require('slash');

var _slash2 = _interopRequireDefault(_slash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CdnPlugin = function () {
  function CdnPlugin() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      //默认配置
    };

    _classCallCheck(this, CdnPlugin);

    this.options = _extends({}, options);
  }

  _createClass(CdnPlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      var _this = this;

      compiler.plugin('after-emit', function (compilation, callback) {
        var assets = compilation.assets;
        var hash = compilation.hash;
        // 获取入参

        _objectDestructuringEmpty(_this.options);

        var _options$path = _this.options.path,
            path = _options$path === undefined ? '[hash]' : _options$path;

        path = path.replace('[hash]', hash);

        var promises = Object.keys(assets).filter(function (fileName) {
          var valid = assets[fileName].emitted;
          if (include && valid) {
            valid = include.some(function (includeFileName) {
              if (includeFileName instanceof RegExp) {
                return includeFileName.test(fileName);
              }
              return includeFileName === fileName;
            });
          }
          return valid;
        }).map(function (fileName) {

          var key = (0, _slash2.default)((0, _path.join)(path, fileName));
          //配置上传

          var promise = new _promise2.default(function (resolve, reject) {
            var begin = new Date.valueOf();
            // 上传
          });

          return promise;
        });

        _promise2.default.all(promises).then(function (res) {
          console.log('==>', res);
          callback();
        }).catch(function (e) {
          callback(e);
        });
      });
    }
  }]);

  return CdnPlugin;
}();

exports.default = CdnPlugin;
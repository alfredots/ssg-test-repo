"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 4300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 3477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 1576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 2718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ next_serverless_loaderpage_2Fapi_2Fhello_absolutePagePath_private_next_pages_2Fapi_2Fhello_ts_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_private_next_pages_2F404_tsx_distDir_private_dot_next_buildId_wdJ9g2yDshT1rS80PBNae_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_22d8e84aaec8ba45bc6f9b9c60e29f98f5_22_2C_22previewModeSigningKey_22_3A_225ba9281e1e804de55d3e1cfef070964999116a1814406fd839e1fc1bd3542d9f_22_2C_22previewModeEncryptionKey_22_3A_227bd09ca1d4347230022c17412db45e845e7e6c6fe283e2662504de0e951c6053_22_7D_loadedEnvFiles_W3sicGF0aCI6Ii5lbnYiLCJjb250ZW50cyI6IkFXU19BQ0NFU1NfS0VZX0lEPUFLSUFaT0EzQ0VJWDZJNjc0TlBDXHJcbkFXU19TRUNSRVRfQUNDRVNTX0tFWT1jOEUyYkF2bmNkcHJ3TXUyNG94UFBkL3ZITWpvWHZ0QUZHZHd0eFdWIn1d_i18n_)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-fetch.js
var node_polyfill_fetch = __webpack_require__(7157);
;// CONCATENATED MODULE: ./.next/routes-manifest.json
const routes_manifest_namespaceObject = {"Dg":[]};
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/api-handler.js
var api_handler = __webpack_require__(6249);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/index.js?page=%2Fapi%2Fhello&absolutePagePath=private-next-pages%2Fapi%2Fhello.ts&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&absoluteErrorPath=next%2Fdist%2Fpages%2F_error&absolute404Path=private-next-pages%2F404.tsx&distDir=private-dot-next&buildId=wdJ9g2yDshT1rS80PBNae&assetPrefix=&generateEtags=true&poweredByHeader=true&canonicalBase=&basePath=&runtimeConfig=&previewProps=%7B%22previewModeId%22%3A%22d8e84aaec8ba45bc6f9b9c60e29f98f5%22%2C%22previewModeSigningKey%22%3A%225ba9281e1e804de55d3e1cfef070964999116a1814406fd839e1fc1bd3542d9f%22%2C%22previewModeEncryptionKey%22%3A%227bd09ca1d4347230022c17412db45e845e7e6c6fe283e2662504de0e951c6053%22%7D&loadedEnvFiles=W3sicGF0aCI6Ii5lbnYiLCJjb250ZW50cyI6IkFXU19BQ0NFU1NfS0VZX0lEPUFLSUFaT0EzQ0VJWDZJNjc0TlBDXHJcbkFXU19TRUNSRVRfQUNDRVNTX0tFWT1jOEUyYkF2bmNkcHJ3TXUyNG94UFBkL3ZITWpvWHZ0QUZHZHd0eFdWIn1d&i18n=!

        
      const { processEnv } = __webpack_require__(9936)
      processEnv([{"path":".env","contents":"AWS_ACCESS_KEY_ID=AKIAZOA3CEIX6I674NPC\r\nAWS_SECRET_ACCESS_KEY=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"}])
    
        
        const runtimeConfig = {}
        ;
        

        

        const combinedRewrites = Array.isArray(routes_manifest_namespaceObject.Dg)
          ? routes_manifest_namespaceObject.Dg
          : []

        if (!Array.isArray(routes_manifest_namespaceObject.Dg)) {
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.beforeFiles)
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.afterFiles)
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.fallback)
        }

        const apiHandler = (0,api_handler/* getApiHandler */.Y)({
          pageModule: __webpack_require__(2735),
          rewrites: combinedRewrites,
          i18n: undefined,
          page: "/api/hello",
          basePath: "",
          pageIsDynamic: false,
          encodedPreviewProps: {previewModeId:"d8e84aaec8ba45bc6f9b9c60e29f98f5",previewModeSigningKey:"5ba9281e1e804de55d3e1cfef070964999116a1814406fd839e1fc1bd3542d9f",previewModeEncryptionKey:"7bd09ca1d4347230022c17412db45e845e7e6c6fe283e2662504de0e951c6053"}
        })
        /* harmony default export */ const next_serverless_loaderpage_2Fapi_2Fhello_absolutePagePath_private_next_pages_2Fapi_2Fhello_ts_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_private_next_pages_2F404_tsx_distDir_private_dot_next_buildId_wdJ9g2yDshT1rS80PBNae_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_22d8e84aaec8ba45bc6f9b9c60e29f98f5_22_2C_22previewModeSigningKey_22_3A_225ba9281e1e804de55d3e1cfef070964999116a1814406fd839e1fc1bd3542d9f_22_2C_22previewModeEncryptionKey_22_3A_227bd09ca1d4347230022c17412db45e845e7e6c6fe283e2662504de0e951c6053_22_7D_loadedEnvFiles_W3sicGF0aCI6Ii5lbnYiLCJjb250ZW50cyI6IkFXU19BQ0NFU1NfS0VZX0lEPUFLSUFaT0EzQ0VJWDZJNjc0TlBDXHJcbkFXU19TRUNSRVRfQUNDRVNTX0tFWT1jOEUyYkF2bmNkcHJ3TXUyNG94UFBkL3ZITWpvWHZ0QUZHZHd0eFdWIn1d_i18n_ = (apiHandler);
      

/***/ }),

/***/ 2735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
    res.status(200).json({
        name: 'John Doe'
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [458], () => (__webpack_exec__(2718)));
module.exports = __webpack_exports__;

})();
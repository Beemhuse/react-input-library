/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react"));exports.InputField=function(e){var n=e.type,o=void 0===n?"text":n,u=e.placeholder,r=void 0===u?"":u,a=e.value,l=void 0===a?"":a,i=e.onChange,c=e.onBlur,d=e.onFocus;return t.default.createElement("input",{type:o,placeholder:r,value:l,onChange:function(e){i(e.target.value)},onBlur:c?function(e){return c(e.target.value)}:void 0,onFocus:d})};
//# sourceMappingURL=index.js.map

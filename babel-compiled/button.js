import React from 'react';
import 'core-js/modules/web.dom-collections.iterator.js';
// or
// import "core-js/modules/web.dom-collections.for-each.js";

export default function Button({ children, onClick }) {
    return /*#__PURE__*/ React.createElement("button", { onClick: onClick }, children);
}

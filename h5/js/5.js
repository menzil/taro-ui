(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"12":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var l=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=(_interopRequireDefault(a(1)),_interopRequireDefault(a(0))),i=a(45),c=_interopRequireDefault(a(56)),r=_interopRequireDefault(a(141)),o=_interopRequireDefault(a(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(142);var s=function(e){function IconPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,IconPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(IconPage.__proto__||Object.getPrototypeOf(IconPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"icons":r.default},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(IconPage,n.default.Component),l(IconPage,[{"key":"render","value":function render(){var e=this.state.icons;return n.default.createElement(i.View,{"className":"page"},n.default.createElement(o.default,{"title":"ICON 图标"}),n.default.createElement(i.View,{"className":"doc-body"},n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"主要"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"icon-list"},e.main.map(function(e,t){return n.default.createElement(i.View,{"className":"icon-list__item","key":t},n.default.createElement(i.View,{"className":"icon-list__icon"},n.default.createElement(c.default,{"value":e,"color":"#999","size":30})),n.default.createElement(i.View,{"className":"icon-list__name"},"at-icon-",e))})))),n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"文件"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"icon-list"},e.file.map(function(e,t){return n.default.createElement(i.View,{"className":"icon-list__item","key":t},n.default.createElement(i.View,{"className":"icon-list__icon"},n.default.createElement(c.default,{"value":e,"color":"#999","size":30})),n.default.createElement(i.View,{"className":"icon-list__name"},"at-icon-",e))})))),n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"文本"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"icon-list"},e.text.map(function(e,t){return n.default.createElement(i.View,{"className":"icon-list__item","key":t},n.default.createElement(i.View,{"className":"icon-list__icon"},n.default.createElement(c.default,{"value":e,"color":"#999","size":30})),n.default.createElement(i.View,{"className":"icon-list__name"},"at-icon-",e))})))),n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"箭头"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"icon-list"},e.arrow.map(function(e,t){return n.default.createElement(i.View,{"className":"icon-list__item","key":t},n.default.createElement(i.View,{"className":"icon-list__icon"},n.default.createElement(c.default,{"value":e,"color":"#999","size":30})),n.default.createElement(i.View,{"className":"icon-list__name"},"at-icon-",e))})))),n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"媒体控制"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"icon-list"},e.media.map(function(e,t){return n.default.createElement(i.View,{"className":"icon-list__item","key":t},n.default.createElement(i.View,{"className":"icon-list__icon"},n.default.createElement(c.default,{"value":e,"color":"#999","size":30})),n.default.createElement(i.View,{"className":"icon-list__name"},"at-icon-",e))})))),n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"多媒体"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"icon-list"},e.photo.map(function(e,t){return n.default.createElement(i.View,{"className":"icon-list__item","key":t},n.default.createElement(i.View,{"className":"icon-list__icon"},n.default.createElement(c.default,{"value":e,"color":"#999","size":30})),n.default.createElement(i.View,{"className":"icon-list__name"},"at-icon-",e))})))),n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"Logo"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"icon-list"},e.logo.map(function(e,t){return n.default.createElement(i.View,{"className":"icon-list__item","key":t},n.default.createElement(i.View,{"className":"icon-list__icon"},n.default.createElement(c.default,{"value":e,"color":"#999","size":30})),n.default.createElement(i.View,{"className":"icon-list__name"},"at-icon-",e))}))))))}}]),IconPage}();t.default=s},"141":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default={"main":["analytics","bell","blocked","bookmark","bullet-list","calendar","add-circle","subtract-circle","check-circle","close-circle","add","subtract","check","close","clock","credit-card","download-cloud","download","equalizer","external-link","eye","filter","folder","heart","heart-2","star","star-2","help","alert-circle","home","iphone-x","iphone","lightning-bolt","link","list","lock","mail","map-pin","menu","message","money","numbered-list","phone","search","settings","share-2","share","shopping-bag-2","shopping-bag","shopping-cart","streaming","tag","tags","trash","upload","user","loading","loading-2","loading-3"],"file":["file-audio","file-code","file-generic","file-jpg","file-new","file-png","file-svg","file-video"],"text":["align-center","align-left","align-right","edit","font-color","text-italic","text-strikethrough","text-underline"],"arrow":["arrow-up","arrow-down","arrow-left","arrow-right","chevron-up","chevron-down","chevron-left","chevron-right"],"media":["play","pause","stop","prev","next","reload","repeat-play","shuffle-play","playlist","sound","volume-off","volume-minus","volume-plus"],"photo":["camera","image","video"],"logo":["sketch"]}},"142":function(e,t,a){}}]);
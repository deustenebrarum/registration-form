(function(t){function e(e){for(var i,s,c=e[0],l=e[1],o=e[2],u=0,d=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,o||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],i=!0,c=1;c<r.length;c++){var l=r[c];0!==n[l]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var i={},n={app:0},a=[];function s(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=i,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(r,i,function(e){return t[e]}.bind(null,i));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var p=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"14b9":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"test"},[r("RegistrationForm")],1)},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"reg"},[r("h2",[t._v("Регистрация")]),t._m(0),t._m(1),r("div",{staticClass:"reg__sex"},[r("pre",[t._v("Пол: ")]),r("div",{staticClass:"reg__sex__select grid-column-triple"},[t._m(2),r("null"),t._m(3)],1)]),t._m(4),t._m(5),t._m(6)])},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"reg__info grid-column-triple"},[r("input",{attrs:{type:"text",id:"firstname",placeholder:"Имя*"}}),r("input",{attrs:{type:"text",id:"lastname",placeholder:"Фамилия*"}}),r("input",{attrs:{type:"text",id:"secondname",placeholder:"Отчество"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid-column-triple"},[r("div",{staticClass:"reg__phonenumber"},[r("pre",[t._v("Номер телефона: ")]),r("input",{attrs:{type:"tel",id:"phonenumber",placeholder:"+7 (999) 000-00-00"}})]),r("span"),r("div",{staticClass:"reg__birthday"},[r("pre",[t._v("Дата рождения: ")]),r("input",{attrs:{type:"date",id:"birthday"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("label",{attrs:{for:"male"}},[t._v("Мужской")]),r("input",{attrs:{type:"radio",name:"sex",id:"male"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("label",{attrs:{for:"female"}},[t._v("Женский")]),r("input",{attrs:{type:"radio",name:"sex",id:"female"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid-column-triple"},[r("div",{staticClass:"reg__client-group"},[r("pre",[t._v("Группа клиента: ")]),r("select",{attrs:{name:"",id:"client-groups"}},[r("option",{attrs:{value:"1"}},[t._v("VIP")]),r("option",{attrs:{value:"2"}},[t._v("Проблемные")]),r("option",{attrs:{value:"3"}},[t._v("ОМС")])])]),r("div",{staticClass:"reg__doctor"},[r("pre",[t._v("Лечащий врач: ")]),r("div",{staticClass:"grid-column-triple reg_doctor_selector"},[r("div",[r("label",{attrs:{for:"1"}},[t._v("Иванов")]),r("input",{attrs:{type:"radio",id:"1"}})]),r("div",[r("label",{attrs:{for:"2"}},[t._v("Захаров")]),r("input",{attrs:{type:"radio",id:"2"}})]),r("div",[r("label",{attrs:{for:"3"}},[t._v("Чернышева")]),r("input",{attrs:{type:"radio",id:"3"}})])])]),r("span"),r("div",{staticClass:"reg__sms-checkbox"},[r("pre",[t._v("Согласны на отправление СМС: ")]),r("input",{attrs:{type:"checkbox",name:"",id:"sms-checkbox"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"reg__address",attrs:{id:"address"}},[r("h3",[t._v("Адрес: ")]),r("div",{staticClass:"grid-column-triple"},[r("div",{staticClass:"reg__country"},[r("pre",[t._v("Страна: ")]),r("input",{attrs:{type:"text",id:"country"}})]),r("div",{staticClass:"reg__unit"},[r("pre",[t._v("Область: ")]),r("input",{attrs:{type:"text",id:"unit"}})]),r("div",{staticClass:"reg__index"},[r("pre",[t._v("Индекс: ")]),r("input",{attrs:{type:"text",id:"index"}})]),r("div",{staticClass:"reg__city"},[r("pre",[t._v("Город: ")]),r("input",{attrs:{type:"text",id:"city"}})]),r("div",{staticClass:"reg__street"},[r("pre",[t._v("Улица: ")]),r("input",{attrs:{type:"text",id:"street"}})]),r("div",{staticClass:"reg__house"},[r("pre",[t._v("Дом: ")]),r("input",{attrs:{type:"text",id:"house"}})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"reg__document",attrs:{id:"document"}},[r("h3",[t._v("Документ: ")]),r("div",{staticClass:"grid-column-triple"},[r("div",[r("pre",[t._v("Тип документа*: ")]),r("input",{attrs:{type:"text",id:"document-type",placeholder:"Паспорт"}})]),r("div",[r("pre",[t._v("Серия: ")]),r("input",{attrs:{type:"text",id:"document-serial",placeholder:"9212"}})]),r("div",[r("pre",[t._v("Номер: ")]),r("input",{attrs:{type:"text",id:"document-number",placeholder:"555444"}})]),r("div",[r("pre",[t._v("Кем выдан: ")]),r("input",{attrs:{type:"text",id:"document-giver",placeholder:"Отделением Уфинского района"}})]),r("div",[r("pre",[t._v("Дата выдачи*: ")]),r("input",{attrs:{type:"text",id:"document-date",placeholder:"01.01.2010"}})])])])}],l=(r("bf26"),r("2877")),o={},p=Object(l["a"])(o,s,c,!1,null,"23a34438",null),u=p.exports,d={name:"App",components:{RegistrationForm:u}},_=d,v=(r("7ec8"),Object(l["a"])(_,n,a,!1,null,"5fcacf32",null)),f=v.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(f)}}).$mount("#app")},"7ec8":function(t,e,r){"use strict";r("14b9")},bf26:function(t,e,r){"use strict";r("c990")},c990:function(t,e,r){}});
//# sourceMappingURL=app.b827204d.js.map
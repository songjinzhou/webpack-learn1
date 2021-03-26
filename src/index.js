// 有问题加我微信 包教包会 jinzhou-v5

import './index.less'
const div = document.createElement('div')
// 写入文本，添加类名
div.innerHTML = "hello, webpack";
div.classList.add('hello'); // 这里出错

document.body.appendChild(div)
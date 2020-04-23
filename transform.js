const cheerio =require('cheerio')
const complear=require('vue-template-compiler')
const fs=require('fs')
let $=cheerio.load(fs.readFileSync('./index.html'))
let str=$('#app').html();
let renderHtml=`<div id="app">${str}</div>`;
let funStr=complear.compile(renderHtml,{transpileOptions:{stripWith:false}}).render.toString()
funStr=funStr.replace('with(this)','function zsp()')
console.log(funStr)


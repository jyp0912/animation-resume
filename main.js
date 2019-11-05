function writeCode(prefix,code,fn){
    let domCode = document.querySelector('#code')
    let n = 0 
    let id = setInterval(()=>{
        n += 1
        domCode.innerHTML=Prism.highlight(prefix+code.substring(0,n),Prism.languages.css)
        styleTag.innerHTML=prefix+code.substring(0,n)
        domCode.scrollTop=domCode.scrollHeight
        if(n>=code.length){
            window.clearInterval(id)
            fn.call()
        }
},1)
}

function writeMarkdown(markdown,fn){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0 
    let id = setInterval(()=>{
        n += 1
        domPaper.innerHTML=markdown.substring(0,n)
        domPaper.scrollTop=domPaper.scrollHeight
        if(n>=markdown.length){
            window.clearInterval(id)
            fn.call()
        }
},1)
}

var result = `/*面试官你好，我是jyp。
*接下来我将以动画的形式来介绍我自己
*因为单纯的文字介绍可能有些单调，
*所以我就用代码来介绍吧
*首先准备一些样式
*/
*{
    transition:all 1s;
}
html{
    background:rgba(222,222,222);
    font-size:16px;
}
#code{
    border:1px solid red;
    padding:16px;
}
/*高亮关键字*/

.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD4A68;
}
/*好，接下来介绍一下自己吧*/
/*首先，我需要一个白板*/
/**/
#code{
    position:fixed;
    left:0;
    width:50%;
    height:100%;
}
#paper{
    position:fixed;
    right:0;
    width:50%;
    height:100%;
    background:#ddd;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:16px;
}
#paper > .content{
    background:white;
    height:100%;
    width:100%;
}
`
var result2 = `#paper{
}
`
var md = `
#biaoti
asdfasdf
`

writeCode('',result,()=>{
    createPaper(()=>{
        writeCode(result,result2,()=>{
            writeMarkdown(md)
        })
    })
})

function createPaper(fn){
    var paper = document.createElement('div')
    paper.id='paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}

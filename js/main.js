var headerStyle = "color:red;font-size:24px;font-family:sans-serif";
    
    
document.getElementById('app').innerHTML = element('h1','hello world!', headerStyle);

function element (name,content,style){
    return '<' + name + ' style="' + style + '">' +  content + '</' + name + '>';
}
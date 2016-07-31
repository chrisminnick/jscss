var headerStyle = 'color:red;font-size:24px;font-family:sans-serif';
var homeDivStyle = 'width:100%;border:1px solid black';

var homePage = element('div',homeDivStyle,
                            element('h1',headerStyle,'hello, world!'));

document.getElementById('app').innerHTML = homePage;

function element (name,style,content){
    return '<' + name + ' style="' + style + '">' +  content + '</' + name + '>';
}
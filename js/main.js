var pageStyle = 'font-family: sans-serif; margin: 0px; background-color:#fff';

var headerH1Style = 'color:red;font-size:24px;';
var headerDivStyle = 'width:100%;border:1px solid black;text-align:center;';

var pageHeader = element('div',headerDivStyle,
                            element('h1',headerH1Style,'hello, world!'));


var leftNavDivStyle = 'width: 300px; float:left; border: 1px solid black';
var leftNavListStyle = 'margin: 0px; padding: 0px; display:table; list-style: none; width: 100%; background:yellow;';
var leftNavListItemStyle = 'display: table-cell;';
var leftNavLinkStyle = 'color: #fff;text-decoration: none;padding: 0 10px 0;height: 40px;line-height: 40px;display: block;text-align: center;background: blue;';

var leftNav = element('div',leftNavDivStyle,
                            element('ul',leftNavListStyle,
                                element('li',leftNavListItemStyle,
                                    element('a',leftNavLinkStyle,
                                        "first link")+
                                    element('a',leftNavLinkStyle,
                                        "second link")+
                                    element('a',leftNavLinkStyle,
                                        "third link")+
                                    element('a',leftNavLinkStyle,
                                        "fourth link"))));



var homePage = element('div',pageStyle,pageHeader + leftNav);

render(homePage,'app');

function element (name,style,content){
    return '<' + name + ' style="' + style + '">' +  content + '</' + name + '>';
}

function render (element,location){
    document.getElementById(location).innerHTML = element;
}
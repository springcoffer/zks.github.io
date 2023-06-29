// let myHeading = document.querySelector('h1');
// myHeading.textContent='Hello world!';// 首先用 querySelector() 函数获取标题的引用，并把它储存在 myHeading 变量中
let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc =='images/图片.png'){
        myImage.setAttribute('src','images/图片.png');
    }
    else{
        myImage.setAttribute('src','images/图片1.png');
    }
}

let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

function  setUsername(){
    let myName=prompt("请输入你的名字");
    //prompt和alter一样会弹出一个对话框，但是这个需要输入数据,存储在myName中
    localStorage.setItem('name',myName);
    /*localStorage API 将数据存储在浏览器中供后续获取，
    这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，
    并把 myName 变量复制给name
    */
    myHeading.textContent="cool," + myName;
    //textContent 属性设置为一个欢迎字符串加上这个新设置的名字
    if(!localStorage.getItem('name')){setUsername();}else{
        let storedName=localStorage.getItem('name');
        myHeading.textContent='cool' +storedName;
    }
}
myButton.onclick=function(){
    setUsername();
}

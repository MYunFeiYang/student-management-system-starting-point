function changeDiv(div1,div2) {
    var o_div1=document.getElementById(div1);
    var o_div2=document.getElementById(div2);
    if (o_div1.style.display=="none"){
        o_div2.style.display="none";
        o_div1.style.display="block";
    }
    else {
        o_div1.style.display="none";
    }
}
/*web 存储*/
function input_info_web_Storage() {
    var students=[];
    if(typeof(Storage)!=="undefined")
    {
        for (let i=0;i<document.getElementsByName('name').length;i++) {
            var name = document.getElementsByName('name')[i].value;
            var sno = document.getElementsByName('sno')[i].value;
            var native = document.getElementsByName('native')[i].value;
            var Class = document.getElementsByName('Class')[i].value;
            var course = document.getElementsByName('course')[i].value;
            var score = document.getElementsByName('score')[i].value;
            console.log(score);
            students.push({name, sno, native, Class, course, score});
            localStorage.setItem({name, sno, native, Class, course, score});
            alert(localStorage.getItem(name));
        }
        console.log(students);
        alert(students);
    } else {
        alert("抱歉! 不支持 web 存储。");
    }

}
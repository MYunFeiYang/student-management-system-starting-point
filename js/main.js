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
/*创建结点*/
function create_and_add_nodes() {
    var tbody=document.getElementById('students');
    let tr=document.createElement('tr');
    let td1=document.createElement('td');
    let input1=document.createElement('input');
    input1.setAttribute('type','text');
    let td2=document.createElement('td');
    let input2=document.createElement('input');
    input2.setAttribute('type','text');
    let td3=document.createElement('td');
    let input3=document.createElement('input');
    input3.setAttribute('type','text');
    let td4=document.createElement('td');
    let input4=document.createElement('input');
    input4.setAttribute('type','text');
    let td5=document.createElement('td');
    let input5=document.createElement('input');
    input5.setAttribute('type','text');
    let td6=document.createElement('td');
    let input6=document.createElement('input');
    input6.setAttribute('type','text');
    let td7=document.createElement('td');
    let input7=document.createElement('input');
    input7.setAttribute('type','text');
    let td8=document.createElement('td');
    let input8=document.createElement('input');
    input8.setAttribute('type','text');
    tbody.appendChild(tr);
    tr.appendChild(td1);
    td1.appendChild(input1);
    tr.appendChild(td2);
    td2.appendChild(input2);
    tr.appendChild(td3);
    td3.appendChild(input3);
    tr.appendChild(td4);
    td4.appendChild(input4);
    tr.appendChild(td5);
    td5.appendChild(input5);
    tr.appendChild(td6);
    td6.appendChild(input6);
    tr.appendChild(td7);
    td7.appendChild(input7);
    tr.appendChild(td8);
    td8.appendChild(input8);
}
/*初始化*/
function init() {
    var students;
    if (localStorage.length==0){
        students=[];
    }
    else {
        students = JSON.parse(localStorage.students);
    }
    return students;
}
/*web 存储*/
function input_info_web_Storage() {
    if(typeof(Storage)!=="undefined")
    {
        if(document.getElementsByName('name')[0].value!="")
        {
            var students=init();
            for (let i=0;i<document.getElementsByName('sno').length;i++)
            {
                var name = document.getElementsByName('name')[i].value;
                var sno = document.getElementsByName('sno')[i].value;
                var native = document.getElementsByName('native')[i].value;
                var Class = document.getElementsByName('Class')[i].value;
                var math = document.getElementsByName('math')[i].value;
                var chinese = document.getElementsByName('chinese')[i].value;
                var english = document.getElementsByName('english')[i].value;
                var program = document.getElementsByName('program')[i].value;
                var sum_score=parseInt(math)+parseInt(chinese)+parseInt(english)+parseInt(program);
                var ave_score=sum_score/4;
                students.push({
                    'name': name,
                    'sno': sno,
                    'native': native,
                    'Class': Class,
                    'math': math,
                    'chinese': chinese,
                    'english': english,
                    'program': program,
                    'sum_score':sum_score,
                    'ave_score':ave_score
                });
                localStorage.students = JSON.stringify(students);
                alert('添加成功');
            }
        }
        else
            {
        alert('请输入信息');
    }
    } else {
        alert("抱歉! 不支持 web 存储。");
    }
}
function show_students_info() {

    if(typeof(Storage)!=="undefined")
    {
        var student_info=document.getElementById("show_students_info");
        student_info.innerHTML="";
        let students_result = JSON.parse(localStorage.students);
        for (let i=0;i<students_result.length;i++) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');
            let td5 = document.createElement('td');
            let td6 = document.createElement('td');
            let td7 = document.createElement('td');
            let td8 = document.createElement('td');
            let td9 = document.createElement('td');
            let td10 = document.createElement('td');
            student_info.appendChild(tr);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tr.appendChild(td8);
            tr.appendChild(td9);
            tr.appendChild(td10);
            td1.innerHTML = students_result[i].name;
            td2.innerHTML = students_result[i].sno;
            td3.innerHTML = students_result[i].native;
            td4.innerHTML = students_result[i].Class;
            td5.innerHTML = students_result[i].math;
            td6.innerHTML = students_result[i].chinese;
            td7.innerHTML = students_result[i].english;
            td8.innerHTML = students_result[i].program;
            td9.innerHTML = students_result[i].sum_score;
            td10.innerHTML = students_result[i].ave_score;
            debugger
        }
    } else {
        alert("抱歉! 不支持 web 存储。");
    }
}
window.onload=function () {
    show_students_info();
}
function revise_info_web_Storage() {
    delete_info_web_Storage();
    input_info_web_Storage();
}
function delete_info_web_Storage() {
    let sno=document.getElementsByName('sno');
    if (sno[0].value!=""){
        let students_result=JSON.parse(localStorage.students);
        for (let i=0;i<sno.length;i++){
            for (let j=0;j<students_result.length;j++){
                if (sno[i].value==students_result[j].sno){
                    students_result.splice(j,1);
                    alert("该学生已删除");
                    localStorage.students=JSON.stringify(students_result);
                }
            }
        }

    }else {
        alert("请输入要删除学生学号");
    }
}
function query_info_web_Storage() {
    if(typeof(Storage)!=="undefined")
    {
        var tbody=document.getElementById('search');
        tbody.innerHTML="";
        let search_sno=document.getElementsByName('search_sno');
        for (let i=0;i<search_sno.length;i++) {
            let students_result = JSON.parse(localStorage.students);
            for (let j=0;j<students_result.length;j++) {
                if (search_sno[i].value == students_result[j].sno) {
                    let tr = document.createElement('tr');
                    let td1 = document.createElement('td');
                    let td2 = document.createElement('td');
                    let td3 = document.createElement('td');
                    let td4 = document.createElement('td');
                    let td5 = document.createElement('td');
                    let td6 = document.createElement('td');
                    let td7 = document.createElement('td');
                    let td8 = document.createElement('td');
                    let td9 = document.createElement('td');
                    let td10 = document.createElement('td');
                    tbody.appendChild(tr);
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tr.appendChild(td5);
                    tr.appendChild(td6);
                    tr.appendChild(td7);
                    tr.appendChild(td8);
                    tr.appendChild(td9);
                    tr.appendChild(td10);
                    td1.innerHTML = students_result[i].name;
                    td2.innerHTML = students_result[i].sno;
                    td3.innerHTML = students_result[i].native;
                    td4.innerHTML = students_result[i].Class;
                    td5.innerHTML = students_result[i].math;
                    td6.innerHTML = students_result[i].chinese;
                    td7.innerHTML = students_result[i].english;
                    td8.innerHTML = students_result[i].program;
                    td9.innerHTML = students_result[i].sum_score;
                    td10.innerHTML = students_result[i].ave_score;
                }
            }
        }
    } else {
        alert("抱歉! 不支持 web 存储。");
    }
}
function clear_data() {
    alert("数据将全部删除,请小心操作!")
    localStorage.clear();
    alert("全部数据已清除");
}
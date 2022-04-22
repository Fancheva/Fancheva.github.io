let colorSelected = document.getElementsByClassName('color_selected'),
    color = document.getElementsByClassName('color'),
    imgBtn = document.getElementsByClassName('moreSvgImg'),
    btnDrop = document.getElementById('dropdown_list'),
    saveBtn = document.getElementById('save'),
    cancelBtn = document.getElementById('cancel'),
    timeCheck = document.getElementsByClassName('timeCheck'),
    userName = document.getElementsByClassName('userName');

for(let i=0;i<colorSelected.length;i++){
    color[i].style.backgroundColor = colorSelected[i].options[colorSelected[i].selectedIndex].text;
}   

function changeColor(){
    for(let i=0;i<colorSelected.length;i++){
        color[i].style.backgroundColor = colorSelected[i].options[colorSelected[i].selectedIndex].text;
    }  
}

function changeGlobal(el){
    let findAlt = el.alt;
    if(findAlt=='add'){
        let input = el.closest(".dropdown").getElementsByTagName('input')[0].value;
        let div = document.createElement("div");
        div.classList.add('moreList');
        div.innerHTML=`<p onclick="changeText(this)">${input}</p><img src="delete-svgrepo-com.svg" onclick="changeGlobal(this)" alt="delete">`;
        el.closest(".dropdown").getElementsByClassName('dropdown_list')[0].prepend(div);
        // let list = document.getElementsByClassName('changing_list');
        // // console.log(list);
        // for(let k=0;k<list.length;k++){
        //     list[k].prepend(div);
        // }
    }else if(findAlt=='delete'){
        el.closest(".moreList").getElementsByTagName('p')[0].remove();
        el.closest(".moreList").getElementsByTagName('img')[0].remove();
    }else if(findAlt=='open'){
        el.closest(".dropdown").getElementsByClassName('dropdown_list')[0].classList.toggle("show");
        el.closest(".dropdown").getElementsByTagName('img')[0].classList.toggle("transform");
    }
}

function changeText(el){
    el.closest(".dropdown").getElementsByTagName('a')[0].innerText = el.innerText;
    el.closest(".dropdown").getElementsByClassName('dropdown_list')[0].classList.toggle("show");
    el.closest(".dropdown").getElementsByTagName('img')[0].classList.toggle("transform");
}

saveBtn.addEventListener('click',function(){
    let date = new Date();
    let fullDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate() + ' ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    for(let i = 0;i<userName.length;i++){
        userName[i].innerText='User Name';
        timeCheck[i].innerText=fullDate;
    }
})

cancelBtn.addEventListener('click',function(){
    document.location.reload(true)
})
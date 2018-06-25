function loadjson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("applicaton/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadjson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  fun_education(data.education);
  fun_career(data.career);
  fun_achievements(data.achievements);
  fun_tecnical(data.technical);
});
var div2=document.getElementById("child2");
function fun_career(cr){
var career=document.createElement("h2");
career.textContent="Careeer Objective";
div2.appendChild(career);
var hr=document.createElement("hr");
div2.appendChild(hr);
var info=document.createElement("p");
info.classList.add("largeFont");
div2.appendChild(info);
info.textContent=cr.info;
}
function fun_achievements(ac){
var achievements=document.createElement("h2");
achievements.textContent="Achievements";
div2.appendChild(achievements);
var hr=document.createElement("hr");
div2.appendChild(hr);
var list=document.createElement("ul");
div2.appendChild(list);
for(var i=0;i<ac.length;i++){
  var listItem=document.createElement("li");
  listItem.innerHTML=ac[i].name;
  list.appendChild(listItem);
}
}
function fun_education(edu){
var heading=document.createElement("h2");
heading.textContent="Educational Qualification";
div2.appendChild(heading);
var hr=document.createElement("hr");
div2.appendChild(hr);
  var list=document.createElement("ul");
  div2.appendChild(list);
  var heading=document.createElement("h2");
  for(var i=0; i<edu.length; i++){
    var listItem=document.createElement("li");
    listItem.textContent=edu[i].degree;
    list.appendChild(listItem);
    var listItem=document.createElement("li");
    listItem.textContent=edu[i].institute;
    list.appendChild(listItem);
    var listItem=document.createElement("li");
    listItem.textContent=edu[i].data;
    list.appendChild(listItem);
  }
}
  function fun_tecnical(tech){
  var heading=document.createElement("h2");
  heading.textContent="Technical";
  div2.appendChild(heading);
  var hr=document.createElement("hr");
  heading.appendChild(hr);
  var tr="";
  var table=document.createElement("table");
  table.border="1";
  div2.appendChild(table);
  for(var i=0;i<tech.length;i++){
    tr+="<tr><td>"+tech[i].name+"</td><td>"+tech[i].data+"</td></tr>";
    table.innerHTML=tr;
  }


}

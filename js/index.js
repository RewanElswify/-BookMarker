
var nameInput = document.getElementById("name");
var urlInput =document.getElementById("Url");
 var addBtn =document.getElementById("addBtn");

 var TabeBody =document.getElementById("TabeBody");
var mainIndex = 0;



var bookMarks ;
if (localStorage.getItem(" bookMarks")==null) {
  bookMarks=[];
} else {
  bookMarks= JSON.parse(localStorage.getItem(" bookMarks")) ;
  displayBook();
}


var nameRegex =/^[A-Za-z]{1,}$/
function isNameValid(params) {
if (nameRegex .test(nameInput.value)) {
  return true;
} else {
  return false;
}  
}


var urlRegex =/^(https:\/\/)?(www\.)?[A-Za-z0-9_\.]{1,}\.[a-z]{3}$/
// console.log(urlRegex.test("www.googal.com"));
function isUrlValid(params) {
  if (urlRegex .test(urlInput.value)) {
    return true;
  } else {
    return false;
  }  
  }

                                                //(dis abled     HTML)//
                                                //بيشتغل عادي // 
  nameInput.onkeyup = function(){
    if (isUrlValid() && isNameValid()) {
      addBtn.removeAttribute("disabled");
    } else {
      addBtn.disabled ="true"
    }
  }


  
  urlInput.onkeyup = function(){
    if (isUrlValid() && isNameValid()) {
      addBtn.removeAttribute("disabled");
    } else {
      addBtn.disabled ="true"
    }
  }

addBtn.addEventListener("click",function (params) {

  if (addBtn.innerHTML == "updata") {
                            // عندي مشكلة لما بشغلها الزرار مش بيترجع تاني من updata   // 
                            //    dataبيمسح ال//
    addBtn.innerHTML == " Submit ";
    var bookmark ={
      name :nameInput.value ,
      url :urlInput.value ,
    }
    bookMarks.splice(mainIndex,1,bookmark);
  } 
  else {
    var bookmark ={
      name :nameInput.value ,
      url :urlInput.value ,
    }
    bookMarks.push(bookmark );
  }

  console.log(bookMarks);
  localStorage.setItem("bookMarks",  JSON.stringify(bookMarks));
  displayBook();

  // هما المفروض بعد ميخلص مش بيمسح //
  clearData();
}
)


function displayBook(params) {
  var marks = ``
  for ( var i = 0; i < bookMarks.length; i++) {
    // const element = array[index];
    marks+= `
      <tr>
       <td>${bookMarks[i].name}</td>
       <td><a><button class="btn btn-primary" >visit</button></a></td>
       <td><button onclick="updata (${i})" class="btn btn-info" >updata</button></td>
       <td><button onclick="delate(${i})" class="btn btn-danger" >delate</button></td>
   </tr>

    `
  }
  TabeBody.innerHTML=marks ;

}

 function delate(index) {
bookMarks.splice(index,1);
localStorage.setItem("bookMarks",JSON.stringify(bookMarks)); 
  displayBook();
 }



function clearData(params) {
  nameInput.value = "";
  urlInput.value = "" ;
 
}



 function updata(index) {
  nameInput.value = bookMarks[index].name;
  urlInput.value =bookMarks[index].url  ;
  addBtn.innerHTML="updata"
  mainIndex = index;
 }
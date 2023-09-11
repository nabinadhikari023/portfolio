<<<<<<< HEAD
const form = document.querySelector("form"),
fileInput = form.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadArea = document.querySelector(".upload-area");

form.addEventListener("click", ()=>{
    fileInput.click();
});

fileInput.onchange = ({target}) =>{
    let file = target.files[0];//getting file and [0] means retrieving first file if multiple selected
    if(file){
        let fileName = file.name;
        if(fileName.length >=12){
            splitName = fileName.split('.');
            fileName = splitName[0].substring(0,12) + ".... ." + splitName[1];
            
        }
        uploadFile(fileName);
    }
}

function uploadFile(name){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "assets\php\main.php");
    xhr.upload.addEventListener("progress", ({loaded, total})=>{
        let fileLoaded = Math.floor((loaded/total)*100);
        let fileTotal = Math.floor(total/1000);
        let fileSize;
        (fileTotal<1000)?fileSize = fileTotal +"KB":fileSize=(loaded/(1024*1024)).toFixed(2) +"MB";
        let progressHTML = `<li class="row">
                                <i class="fas fa-file-alt"></i>
                                <div class="content">
                                    <div class="details">
                                        <span class="name">${name} * Uploading</span> 
                                        <span class="percent">${fileLoaded}</span>
                                    </div>
                                    <div class="progress-bar">
                                    <div class="progress" style="width : ${fileLoaded}%"></div>
                                    </div>
                                </div>
                            </li>`;
        progressArea.innerHTML = progressHTML;
        if (loaded == total){
            progressArea.innerHTML = "";
            let uploadedHTML = `<li class="row">
                                    <div class="content">
                                        <i class="fas fa-cloud-upload-alt"></i>
                                        <div class="details">
                                            <span class="name">${name} * Uploaded</span> 
                                            <span class="size">${fileTotal}</span>
                                        </div>
                                    </div>
                                    <i class="fas fa-check"></i>
                                </li>`;
            uploadArea.insertAdjacentHTML("afterbegin", uploadedHTML);
        }
        
    })
    let formData = new FormData(form);
    xhr.send(formData);
}

(function () {
    "use strict";
    /* Start of your code */
    function greetMe(yourName) {
      alert(`Hello ${yourName}`);
    }
  
    greetMe("World");
    /* End of your code */
  })();
  

  (function () {
      ""
=======
const form = document.querySelector("form"),
fileInput = form.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadArea = document.querySelector(".upload-area");

form.addEventListener("click", ()=>{
    fileInput.click();
});

fileInput.onchange = ({target}) =>{
    let file = target.files[0];//getting file and [0] means retrieving first file if multiple selected
    if(file){
        let fileName = file.name;
        if(fileName.length >=12){
            splitName = fileName.split('.');
            fileName = splitName[0].substring(0,12) + ".... ." + splitName[1];
            
        }
        uploadFile(fileName);
    }
}

function uploadFile(name){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "assets\php\main.php");
    xhr.upload.addEventListener("progress", ({loaded, total})=>{
        let fileLoaded = Math.floor((loaded/total)*100);
        let fileTotal = Math.floor(total/1000);
        let fileSize;
        (fileTotal<1000)?fileSize = fileTotal +"KB":fileSize=(loaded/(1024*1024)).toFixed(2) +"MB";
        let progressHTML = `<li class="row">
                                <i class="fas fa-file-alt"></i>
                                <div class="content">
                                    <div class="details">
                                        <span class="name">${name} * Uploading</span> 
                                        <span class="percent">${fileLoaded}</span>
                                    </div>
                                    <div class="progress-bar">
                                    <div class="progress" style="width : ${fileLoaded}%"></div>
                                    </div>
                                </div>
                            </li>`;
        progressArea.innerHTML = progressHTML;
        if (loaded == total){
            progressArea.innerHTML = "";
            let uploadedHTML = `<li class="row">
                                    <div class="content">
                                        <i class="fas fa-cloud-upload-alt"></i>
                                        <div class="details">
                                            <span class="name">${name} * Uploaded</span> 
                                            <span class="size">${fileTotal}</span>
                                        </div>
                                    </div>
                                    <i class="fas fa-check"></i>
                                </li>`;
            uploadArea.insertAdjacentHTML("afterbegin", uploadedHTML);
        }
        
    })
    let formData = new FormData(form);
    xhr.send(formData);
}

(function () {
    "use strict";
    /* Start of your code */
    function greetMe(yourName) {
      alert(`Hello ${yourName}`);
    }
  
    greetMe("World");
    /* End of your code */
  })();
  

  (function () {
      ""
>>>>>>> e820b9e9c331a8e8a64bbc4edd4292e6ff689680
  })
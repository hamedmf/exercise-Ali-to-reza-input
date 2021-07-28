


let submit =document.getElementById("submit")



function changeName(){

    let find = document.getElementById("search").value
    let replace = document.getElementById("replace").value
    let text = document.getElementsByTagName("p")[0].textContent
    
    
    let mm = text.toLowerCase().replace(find.toLowerCase(),replace)  
    document.getElementsByTagName("p")[0].textContent = mm
    
}

submit.onclick = changeName




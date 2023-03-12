let themeOpen = document.getElementById('themeOpen');
let themeDropdown = document.getElementById('themeDropdown');
themeOpen.addEventListener('click', ()=>{
    themeDropdown.classList.toggle('active');
    versionList.classList.remove('active');
})
let versionMenu = document.getElementById('versionMenu');
let versionList = document.getElementById('versionList');

versionMenu.addEventListener('click',()=>{
    versionList.classList.toggle('active');
    themeDropdown.classList.remove('active');
})

// Theme Change 
let themeCircle = document.getElementsByClassName('themeCircle');
let body = document.getElementById("body");
let selected = document.getElementsByClassName('selected');

selected[4].style.display = "block";


for(let i = 0; i < themeCircle.length; i++){
    themeCircle[i].addEventListener('click', function(){
        for(let i = 0; i < selected.length; i++){
            switch (this.id) {
                case "pink":
                    body.style.backgroundColor = "rgba(231, 0, 231, 0.9)";
                    body.style.color = "white";
                    selected[0].style.display = "block";
                    selected[1].style.display = "none";
                    selected[2].style.display = "none";
                    selected[3].style.display = "none";
                    selected[4].style.display = "none";

                    break;
    
                case "grass":
                    body.style.backgroundColor = "#5FD855B2";
                    body.style.color = "white";
                    selected[0].style.display = "none";
                    selected[1].style.display = "block";
                    selected[2].style.display = "none";
                    selected[3].style.display = "none";
                    selected[4].style.display = "none";

                    break;
                
                case "purple":
                    body.style.backgroundColor = "rgba(0, 0, 209, 0.7)";
                    body.style.color = "white";
                    selected[0].style.display = "none";
                    selected[1].style.display = "none";
                    selected[2].style.display = "block";
                    selected[3].style.display = "none";
                    selected[4].style.display = "none";

                    break;
    
                case "night":
                    body.style.backgroundColor = "#000000"
                    body.style.color = "white";
                    selected[0].style.display = "none";
                    selected[1].style.display = "none";
                    selected[2].style.display = "none";
                    selected[3].style.display = "block";
                    selected[4].style.display = "none";
                    
                    break;
                
                case "default":
                    body.style.backgroundColor = "#FFFFFF";
                    body.style.color = "#000000";
                    selected[0].style.display = "none";
                    selected[1].style.display = "none";
                    selected[2].style.display = "none";
                    selected[3].style.display = "none";
                    selected[4].style.display = "block";
                
                default:  
                    break;
            }
        }
      
    });
}


// sys tabs 

function tabChange(evt, tabActive){
    let i, tabTrigger, tabContent;
    tabContent = document.getElementsByClassName('tab-content');

    for(i =0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }

    tabTrigger = document.getElementsByClassName('tabtrigers');

    for(i = 0; i < tabTrigger.length; i++){
        tabTrigger[i].className = tabTrigger[i].className.replace(" active", "")
    }
    document.getElementById(tabActive).style.display = "block";
    evt.currentTarget.className += " active";
}
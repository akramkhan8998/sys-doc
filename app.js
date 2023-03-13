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

selected[1].style.display = "block";

// snackbar 
let snackbar = document.querySelector('.sys-snackbar');






for(let i = 0; i < themeCircle.length; i++){
    themeCircle[i].addEventListener('click', function(){
        setTimeout(function(){
            if(snackbar.style.display === "block"){
                snackbar.style.display = "none";
            }else{
                snackbar.style.display = "none";
            }
        }, 2000);
        if(this.id === "pink"){
            snackbar.innerHTML =`
                <h6 class='mb-1'>Theme activation message!!!</h6 class='mb-1'>
                <p>Now you are in ${this.id} 🌈 theme... :)</p>
            `;
            snackbar.style.display = "block";
        }
        else if(this.id === "grass"){
            snackbar.innerHTML =`
                <h6 class='mb-1'>Theme activation message!!!</h6 class='mb-1'>
                <p>Now you are in ${this.id} 🌲  theme... :)</p>
            `;
            snackbar.style.display = "block";
        }
        else if(this.id === "purple"){
            snackbar.innerHTML =`
                <h6 class='mb-1'>Theme activation message!!!</h6 class='mb-1'>
                <p>Now you are in ${this.id} 💧 theme... :)</p>
            `;
            snackbar.style.display = "block";
        }
        else if(this.id === "night"){
            snackbar.innerHTML =`
                <h6 class='mb-1'>Theme activation message!!!</h6 class='mb-1'>
                <p>Now you are in ${this.id} 🌚 theme... :)</p>
            `;
            snackbar.style.display = "block";
        } 
        else if(this.id === "light"){
            snackbar.innerHTML =`
                <h6 class='mb-1'>Theme activation message!!!</h6 class='mb-1'>
                <p>Now you are in ${this.id} 🎉 theme... :)</p>
            `;
            snackbar.style.display = "block";
        }
        else{
            alert("DefaultTheme");
        }



        
        for(let i = 0; i < selected.length; i++){
           
            switch (this.id) {
                case "night":
                    //body.style.backgroundColor = "#000000"
                    body.classList.add('dark-theme');
                    selected[0].style.display = "none";
                    selected[1].style.display = "none";
                    // selected[2].style.display = "none";
                    // selected[3].style.display = "block";
                    // selected[4].style.display = "none";
                    
                    break;
                
                case "default":
                    body.classList.remove('dark-theme');
                    selected[0].style.display = "none";
                    selected[1].style.display = "none";
                    // selected[2].style.display = "none";
                    // selected[3].style.display = "none";
                    // selected[4].style.display = "block";
                
                default:  
                    break;
            }
        }
      
    });
}


// sys tabs 
let tabContent = document.getElementsByClassName('tab-content');
for(i =0; i < tabContent.length; i++){
    tabContent[i].style.display = "none";
}
function tabChange(evt, tabActive){
    let i, tabTrigger;
    

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
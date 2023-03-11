let themeOpen = document.getElementById('themeOpen');
let themeDropdown = document.getElementById('themeDropdown');
themeOpen.addEventListener('click', ()=>{
    themeDropdown.classList.toggle('active');
})
let versionMenu = document.getElementById('versionMenu');
let versionList = document.getElementById('versionList');

versionMenu.addEventListener('click',()=>{
    versionList.classList.toggle('active');
})
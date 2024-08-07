const searchIcon=document.getElementById('searchIcon')
const searchPart=document.getElementById('searchPart')

searchIcon.addEventListener('click', ()=>{
    searchPart.classList.toggle('active');
})
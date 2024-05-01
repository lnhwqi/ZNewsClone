const searchBtn = document.getElementById('search-btn')
const searchBar = document.getElementById('search-bar')
const moreSign = document.getElementById('more-sign')
const closeSign = document.getElementById('close-sign')

const moreListHead = document.getElementById('more-list-head')
const moreListBottom = document.getElementById('more-list-bottom')

const mainCenterDesc = document.getElementById('main-center-desc')
const blur = document.getElementById('blur-box')

if (window.matchMedia("(max-width: 768px)").matches) {
    if(mainCenterDesc.textContent.split(' ').length > 30){
        mainCenterDesc.textContent = mainCenterDesc.textContent.split(' ').slice(0,23).join(' ') + ' ...'
    }

    moreSign.classList.remove('fa-ellipsis');
    moreSign.classList.add('fa-bars');
}

document.body.addEventListener('click', function(event){
    if(event.target !== searchBtn && event.target !== searchBar && searchBar.classList.contains('visibility')){
        searchBtn.classList.toggle('active')
        searchBar.classList.remove('visibility');

        searchBar.value="Nhập nội dung cần tìm...";
    }
    if(event.target !== moreSign && event.target !== closeSign 
        && event.target !== moreListBottom && event.target !== moreListHead 
        && moreListBottom.classList.contains('visibility') && moreListHead.classList.contains('visibility')){
        moreListBottom.classList.remove('visibility');
        moreListHead.classList.remove('visibility');
        closeSign.classList.toggle('visibility')
        moreSign.classList.toggle('hidden')
        blur.style.display = 'none';
        document.documentElement.style.overflow = 'auto';    
    }
})


searchBtn.addEventListener('click', function(){
    searchBtn.classList.toggle('active')
    searchBar.classList.toggle('visibility');
    searchBar.value="Nhập nội dung cần tìm...";
})
searchBar.addEventListener('focus',function(){
    if(searchBar.value === "Nhập nội dung cần tìm..."){
        searchBar.value ="";
    }
})


moreSign.addEventListener('click', function(){
    closeSign.classList.toggle('visibility')
    moreSign.classList.toggle('hidden')
    moreListHead.classList.toggle('visibility')
    moreListBottom.classList.toggle('visibility')
    blur.style.display = 'block';
    document.documentElement.style.overflow = 'hidden';
})
closeSign.addEventListener('click', function(){
    closeSign.classList.toggle('visibility')
    moreSign.classList.toggle('hidden')
    moreListHead.classList.toggle('visibility')
    moreListBottom.classList.toggle('visibility')
    blur.style.display = 'none';
    document.documentElement.style.overflow = 'auto';
})




//스무스 스크롤(navitem 누르고 이동할때)
$('#navbar a, .btn').on('click', function(event){
    if(this.hash !==''){
        event.preventDefault();

        const hash = this.hash

        $('html, body').animate (
            {
                scrollTop: $(hash).offset().top - 100 //위치
            },
            800 //속도
        );
    }
})

// $('#navbar a, .btn') <---선택자 이거만 바꿔서 다른곳에 사용하면됨

//메뉴 백그라운드 스크롤 내릴때 투명하게
window.addEventListener('scroll', function(){
    if(window.scrollY>150){
        document.querySelector('#navbar').style.opacity = 0.5;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

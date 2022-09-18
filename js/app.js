document.querySelector('#depth1 > li:first-child').addEventListener('click',function(){
    document.querySelector('.sub_gnb').classList.add('show');
})

document.querySelector('.sub_gnb').addEventListener('mouseleave',function(){
    document.querySelector('.sub_gnb').classList.remove('show');
})

$(function(){
    $('.textList li').each(function(){
        let anchor = $(this).find('data-src');
        $('.textList li').hover(function(){
            let anchor_on = anchor.addClass('on');
        },function(){
            let anchor_on = anchor.removeClass('on');
        });
    })
})
//.textList에서 마우스 올린 a태그에만 .on 붙히는 방법은 무엇인가?


//마우스 scroll 시에 상단 navbar 색상 변하는 이벤트
$(function(){
    $(window).scroll(function(){
        if ($(document).scrollTop()>5) { //113으로 바꿔보기
            $('#header').addClass('scroll');
        } else {
            $('#header').removeClass('scroll');
        }
})

$(function(){
    let small_nav_btn_box = 0;

    $('.small_nav_btn_box').click(function(){
        if (small_nav_btn_box === 0) {
            $('.mobile_btn').addClass('click');
            $('.box').fadeIn(300);
            small_nav_btn_box = 1;
        } else {
            $('.mobile_btn').removeClass('click');
            $('.box').fadeOut(300);
            small_nav_btn_box = 0;
        }
    })
})

//   $(document).ready(function () {
//     //1
//     $(window).scroll(function () {
//       //2
//       $(".fadein").each(function (i) {
//         var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 5;
//         var bottom_of_window = $(window).scrollTop() + $(window).height();

//         var top_of_object = $(this).offset().bottom + $(this).outerHeight();
//         //3
//         if (bottom_of_window > bottom_of_object) {
//           $(this).animate({ 'opacity' : "1" }, 700);
//         } else if (bottom_of_window < top_of_object) {
//             $(this).animate({'opacity' : '0'}, 700);
//         }
//       });
//     });
//   });

    const targets = document.querySelectorAll(".container_wrap");
    const options = { root: null, threshold: 0.5, rootMargin: "-0px" };
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
        const container = entry.target;
        if (entry.isIntersecting) {
            container.classList.add("fadein");
        } else {
            container.classList.remove("fadein");
        }
    });
    }, options);

    targets.forEach((target) => {
    observer.observe(target);
    });


window.addEventListener('scroll', function(){
    let currentScrollValue = this.document.documentElement.scrollTop;
    console.log('currentScrollValue is' + currentScrollValue);
})

    // $(function () {
    //     slide = setInterval(function () {
    //         $('#main_slide .slide:first-child').animate({ 'margin-left': (2000 * (-1)) + 'px' }, 1000, function () {
    //             $('#main_slide .slide').append($('#main_slide .slide:first-child'));
    //             $('#main_slide .slide:last-child').css({ 'margin-left': 0 });
    //         });
    //     }, 2000); //top이나 margin으로 땡겨버리면 안된다. 
    // })



window.scrollTop().offset;

let product_new = $('#product_container #new').offset().top;
let product_best = $('#product_container #best').offset().top;
let product_material = $('#product_container #material').offset().top;
let product_function = $('#product_container #function').offset().top;











let result =2;
let num = 4;

while (result < 18) { //result < 20은 왜 최종적으로 22가 나오는가?
    result = result + num;
    console.log(result)
}

while (result < 20){ 
result = result + num;
console.log(result)}

})
//result < 20은 왜 최종적으로 22가 나오는가?
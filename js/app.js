    $(function () {
        $('#gnb').hover(function(){
            $('#header').css('background','#e3ecf5')
        }, function(){
            $('#header').css('background','none')
            $('.sub_gnb_wrap').hide();
            $('#depth1 a').removeClass('on');
        })

    $("#gnb").each(function () {
        var anchor = $(this).find("#depth1 a");
        // var anchor_on = $(this).find(".sub_gnb_wrap.show"); >> 하나는 열려있게 하고 싶을 때, 해당 코드 활성화. (탭=아코디언)
        var href = anchor.attr("href");
        anchor.each(function () {
        var sub_nav = $(this).attr("href");

        $(this).mouseenter(function (e) {
            e.preventDefault();
            $('#depth1 a').removeClass('show');
            $(this).addClass('show');
            $('.sub_gnb_wrap').hide();
            // 혹여나 열려있는 서브네비 창을 다 닫음
            // alert(sub_nav);
            $(sub_nav).slideDown();
        });
        }); //anchor
    }); //#gnb

    $(".tabset").each(function () {
        var anchor = $(this).find(".tabs a");
        var anchor_on = $(this).find(".tabs a.on");
        var href = anchor.attr("href");
        var href_on = anchor_on.attr("href");
        $('.penel').hide();
        $(href_on).show();
        anchor.each(function () {
        var sub_nav = $(this).attr("href");

        $(this).click(function (e) {
            e.preventDefault();
            $('.tabs a').removeClass('on');
            $(this).addClass('on');
            $('.penel').hide();
            // 혹여나 열려있는 서브네비 창을 다 닫음
            // alert(sub_nav);
            $(sub_nav).fadeIn();
            // img를 fadeIn으로 불러옴
        });
        }); //anchor
    }); //tabSet
    // ** tabset에서 .tabs a를 클릭하여 href를 찾으면, penels 안에서 각각의 penel을 찾아서 이미지를 변경해줌.
    // 즉, 탭셋 요소를 클릭하면 패널 요소가 변경된다. (탭셋 - 패널)  
    //마우스 scroll 시에 상단 navbar 색상 변하는 이벤트
    $(window).scroll(function () {
        if ($(document).scrollTop() > 5) {
        //113으로 바꿔보기
        $("#header").addClass("scroll");
        } else {
        $("#header").removeClass("scroll");
        }
    });
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

    // 현재 viewport 기준의 3/1만큼 올라왔을 때, 스르륵- 보이게 할 순 없는지 구글링. (절대위치? 상대위치))
    window.addEventListener("scroll", function () {
        let currentScrollValue = this.document.documentElement.scrollTop;
        console.log("currentScrollValue is " + currentScrollValue);
    });

    let product_new = $("#product_container #new").offset().top - 2000;
    let product_best = $("#product_container #best").offset().top - 1000;
    let product_material = $("#product_container #material").offset().top - 500;
    let product_function = $("#product_container #function").offset().top - 300;

    // var container_wrapOffset = $('.container_wrap').offset();

    $(window).scroll(function () {
        if ($(window).scrollTop() > product_new) {
        $("#new").addClass("fade_in");
        } else {
        $("#new").removeClass("fade_in");
        }

        if ($(window).scrollTop() > product_best) {
        $("#best").addClass("fade_in");
        } else {
        $("#best").removeClass("fade_in");
        }

        if ($(window).scrollTop() > product_material) {
        $("#material").addClass("fade_in");
        } else {
        $("#material").removeClass("fade_in");
        }

        if ($(window).scrollTop() > product_function) {
        $("#function").addClass("fade_in");
        } else {
        $("#function").removeClass("fade_in");
        }
    });

    document.querySelector('.small_nav_btn_box').addEventListener('click', function(){
        document.querySelector('#mobile_nav').classList.toggle('active');
        document.querySelector('.mobile_gnb_box').classList.toggle('active');
    })

    // const absoluteTop = window.pageYOffset + Element.getBoundingClientRect().top;
    // const relativeTop = Element.getBoundingClientRect().top;
    // function getAbsoluteTop(){
    //     return window.pageYOffset + Element.getBoundingClientRect().top;
    // }

    let result = 2;
    let num = 4;

    while (result < 18) {
        //result < 20은 왜 최종적으로 22가 나오는가?
        result = result + num;
        console.log(result);
    }

    while (result < 20) {
        result = result + num;
        console.log(result);
    }
    });
    //result < 20은 왜 최종적으로 22가 나오는가?


    const calculator1 = {
    add: function (a, b) {
        console.log(a + b);
    },
    };

    const calculator2 = {
    minus: function (a, b) {
        console.log(a - b);
    },
    };

    const calculator3 = {
    multiply: function (a, b) {
        console.log(a * b);
    },
    };

    const calculator4 = {
    divide: function (a, b) {
        console.log(a / b);
    },
    };

    const calculator5 = {
    powerof: function (a, b) {
        console.log(a ** b);
    },
    };

    calculator1.add(10, 3);

    calculator2.minus(10, 3);

    calculator3.multiply(10, 3);

    calculator4.divide(10, 3);

    calculator5.powerof(10, 3);

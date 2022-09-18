    document
    .querySelector("#depth1 > li:first-child")
    .addEventListener("click", function () {
        document.querySelector(".sub_gnb").classList.add("show");
    });

    document
    .querySelector("#depth1 > li:first-child")
    .addEventListener("click", function () {
        document.querySelector("#product").classList.add("show");
    });

    document.querySelector(".sub_gnb").addEventListener("mouseleave", function () {
    document.querySelector(".sub_gnb").classList.remove("show");
    });

    document
    .querySelector("#depth1 .sub_gnb_review")
    .addEventListener("click", function () {
        document.querySelector(".sub_gnb").classList.add("show");
    });

    $(function () {
    $(".textList li").each(function () {
        let anchor = $(this).find("data-src");
        $(".textList li").hover(
        function () {
            let anchor_on = anchor.addClass("on");
        },
        function () {
            let anchor_on = anchor.removeClass("on");
        }
        );
    });
    });
    //.textList에서 마우스 올린 a태그에만 .on 붙히는 방법은 무엇인가?

    // a를 클릭하면 모든 div.panel를 닫고  .on도 제거하고
    //    방금 클릭한 a의 phref값과 같은 이름의 div만 열고 해당 a에 .on를 추가하라
    $(function () {
    $(".sub_gnb").each(function () {
        var anchor = $(this).find(".sub_gnb_wrap");
        var anchor_on = $(this).find(".sub_gnb_wrap.show");
        var phref_on = anchor_on.attr("sub_gnb_wrap");
        var this_panel = $(this).find(".panel");
        $(phref_on).show();

        anchor.each(function () {
        var sub_nav = $(this).attr(".sub_gnb_wrap");

        $(this).click(function (e) {
            e.preventDefault();
            this_panel.hide();
            anchor.removeClass("show"); //$('.tabs a')
            $(sub_nav).show();
            $(this).addClass("show");
        }); //click
        }); //anchor
    }); //tabSet
    }); //전체

    //마우스 scroll 시에 상단 navbar 색상 변하는 이벤트
    $(function () {
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

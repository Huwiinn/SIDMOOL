    $(function () {
    $(".lazy").slick({
        lazyLoad: "ondemand", // ondemand progressive anticipated
        infinite: true,
        arrow: false,
        dots: true,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    });

    // var slide = $(".slide");
    // var slickOptions = {
    // infinite: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // dots: true,
    // arrows: true,
    // };
    // $(window).on("load resize", function () {
    // if ($(window).width() < 768) {
    //     slider.slick("unslick");
    // } else {
    //     slider.not(".slick-initialized").slick(slickOptions);
    // }
    // });

    //  #main_slide가 load시 width값을 한 번 콘솔창에 알려줌.
    let clientWidth = document.getElementById("main_slide").clientWidth;
    console.log(clientWidth);
    // alert(clientWidth);
    // document.getElementsByClassName('lazy')[0].addEventListener('')

    // 슬릭 화면 크기가 768px로 줄어들면, 슬릭 삭제하기 !! (ㅠㅠㅠ처음으로 구글링해서 직접 적용 성공함. 코드 공부해서 확실하게 이해하기 위해서 더 알아보기)
    let slide = document.getElementById("main_slide");

    window.onresize = function () {
    let innerWidth = window.innerWidth;
    innerWidth <= "768"
        ? slide.classList.remove("lazy")
        : slide.classList.add("lazy");
    };

    //  갑자기 기능구현 안된다, 다시 확인해야함. .lazy는 사라지는데, js로 클래스 지우니까 lazy만 지워지고, 기능은 안 사라짐.

    // $(function () {
    // $(".slick-slide").each(function () {
    //     if ($(window).width() < 769) {
    //     var img = $(this).find("img");
    //     var img_pc = img.attr("src");
    //     var img_mo = img_pc.replace("_pc", "_mo");
    //     img.attr("src", img_mo);
    //     } else {
    //     var img = $(this).find("img");
    //     var img_mo = img.attr("src");
    //     var img_pc = img_mo.replace("_mo", "_pc");
    //     img.attr("src", img_pc);
    //     }
    // });
    // $(window).resize(function () {
    //     // 윈도우 창을 사용자가 움직이기 시작하면 이미지변수 다시 불러와야 함
    //     $(".slick-slide").each(function () {
    //     if ($(window).width() < 769) {
    //         var img = $(this).find("img");
    //         var img_pc = img.attr("src");
    //         var img_mo = img_pc.replace("_pc", "_mo");
    //         img.attr("src", img_mo);
    //     } else {
    //         var img = $(this).find("img");
    //         var img_mo = img.attr("src");
    //         var img_pc = img_mo.replace("_mo", "_pc");
    //         img.attr("src", img_pc);
    //     }
    //     });
    // });
    // });

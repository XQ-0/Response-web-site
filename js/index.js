$(function() {

    var winheight = $(window).height();

    // 头部
    $('.topBar .search ._btn i').hover(function() {
        $('.searchBox').css({ display: 'block' });
    }, function() {
        $('.searchBox').css({ display: 'none' })
    })

    var d = 0;
    $('.biao').click(function() {
        $('.ceNav').css({ height: winheight })
        if (d % 2 == 0) {
            $('.ceNav').animate({ left: 0 }, 'slow')
        } else {
            $('.ceNav').animate({ left: '-260px' }, 'slow')
        }
        d++;

    })


    // 侧边固定条
    $('.fixed-right a').each(function(i) {
        $(this).hover(function() {
            $('.fixed-right a .text').eq(i).stop().animate({ right: '60px' }, 500);
        }, function() {
            $('.fixed-right a .text').eq(i).stop().animate({ right: '-161px' }, 500);
        })
    })

    // 第一部分轮播
    var index = -1;
    $('.slide_nav a').each(function(i) {
        $(this).mouseover(function() {
            $(this).addClass('on');
        })
        $(this).mouseout(function() {
            $(this).removeClass('on');
        })
        $(this).click(function() {
            $(this).addClass('on');
            $('.slide_wrap li').eq(i).animate({ opacity: 1 }, 'slow').siblings().animate({ opacity: 0 }, 'slow');
            $('._info').animate({ left: '-1000' })
            $('._info').eq(i).animate({ left: 0 }, 'slow')
            index = i;
        })
    })

    var timer = setInterval(function() {
        index++;
        if (index > 4) {
            index = 0;
        }
        $('.slide_wrap li').eq(index).animate({ opacity: 1 }, 'slow').siblings().animate({ opacity: 0 }, 'slow');
        $('.slide_nav a').eq(index).addClass('on').siblings().removeClass('on');
        $('._info').css({ left: '-1000px' })
        $('._info').eq(index).animate({ left: 0 }, 'slow')
    }, 3000);

    // 第二部分轮播
    var index1 = -1;
    $('.slide_nav2 i').each(function(j) {
        $(this).click(function() {
            $(this).addClass('on').siblings().removeClass('on');
            $('.adv ul li').animate({ left: -j * 1308 + 'px' }, "slow");


            $('.adv .text .text01').css({ right: '-500px', opacity: 0 })
            $('.adv .text .text01').eq(j).animate({ right: 0, opacity: 1 }, 2000);


            $('.adv .text .text02').eq(j).css({ left: '1300px', opacity: 0 });
            $('.adv .text .text02').eq(j).animate({ left: '420px', opacity: 1 }, 1900);
            index1 = j;
        })
    })
    var timer1 = setInterval(function() {
        index1++;
        if (index1 > 2) {
            index1 = 0;
        }
        $('.adv ul li').animate({ left: -index1 * 1308 + 'px' }, 'slow', function() {

            $('.adv .text .text01').css({ right: '-500px', opacity: 0 })
            $('.adv .text .text01').eq(index1).animate({ right: 0, opacity: 1 }, 2000);

            $('.adv .text .text02').css({ left: '1300px', opacity: 0 });
            $('.adv .text .text02').eq(index1).animate({ left: '420px', opacity: 1 }, 1900);
        });
        $('.slide_nav2 i').eq(index1).addClass('on').siblings().removeClass('on');
    }, 4000);

    // 最新动态
    $('.inews ._bd ._box ._img img').each(function(i) {
        $(this).hover(function() {
            $('.inews ._bd ._more').eq(i).addClass('on')
        }, function() {
            $('.inews ._bd ._more').eq(i).removeClass('on')
        })
    })

    $('.inews ._bd ._more').each(function(i) {
        $(this).hover(function() {
            $('.inews ._bd ._box ._img img').eq(i).addClass('on')
            $(this).addClass('on')
        }, function() {
            $('.inews ._bd ._box ._img img').eq(i).removeClass('on')
            $(this).removeClass('on')
        })
    })
    $('.inews ._bd ._text').each(function(i) {
        $(this).hover(function() {
            $('.inews ._bd ._box ._img img').eq(i).addClass('on')
            $('.inews ._bd ._more').eq(i).addClass('on')
        }, function() {
            $('.inews ._bd ._box ._img img').eq(i).removeClass('on')
            $('.inews ._bd ._more').eq(i).removeClass('on')
        })
    })



    // 优势 花
    var nowFrame = 0;
    setInterval(function() {
        nowFrame++;
        if (nowFrame >= $('.sec3 .item').length) {
            nowFrame = 0;
        }
        for (var i = 0; i < $('.sec3 .item').length; i++) {
            if (i == nowFrame) {
                $('.item .text01').eq(i).css({ left: '0', 'transition': 'all 0.5s ease', 'opcity': '0.5' })
                $('.item .text02').eq(i).css({ left: '0', 'transition': 'all 0.5s ease' }).delay(500);
            } else {
                $('.item .text01').eq(i).stop().animate({ left: '-436px', 'transition': 'all 0.5s ease', 'opcity': '0.5' });
                $('.item .text02').eq(i).stop().animate({ left: '-900px', 'transition': 'all 0.5s ease' }).delay(500);
            }
        }

    }, 1300);


    $(function() {
        $('._bd li').mouseenter(function() {
            $(this).find('._cover').stop().animate({ top: 0 }, 'fast');
        }).mouseleave(function() {
            $(this).find('._cover').stop().animate({ top: '241px' }, 'fast');
        });
        $('.side_layer #l1').mouseover(function() {
            $('#text1').stop().animate({ right: '60px' });
        });
        $('.side_layer #l1').mouseout(function() {
            $('#text1').stop().animate({ right: '-150px' });
        });
        $('.side_layer #l2').mouseover(function() {
            $('#text2').stop().animate({ right: '60px' });
        });
        $('.side_layer #l2').mouseout(function() {
            $('#text2').stop().animate({ right: '-150px' });
        });
        $('.new li').mouseover(function() {
            var i = $(this).index();
            $('._more').eq(i).addClass('act');
            $('h2').eq(i).addClass('font');
            $('._text').eq(i).addClass('font');
        });
        $('.new li').mouseout(function() {
            var i = $(this).index();
            $('._more').eq(i).removeClass('act');
            $('h2').eq(i).removeClass('font');
            $('._text').eq(i).removeClass('font');
        });
    });



    

})

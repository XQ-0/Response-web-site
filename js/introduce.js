$(function() {

    // 首页介绍页面
    $('.apart03 .con .nav .first').click(function() {
        $(this).addClass('on').siblings().removeClass('on')
        $('.honorBtn').css({ display: 'none' })
        $('.show-box .lis1').css({ display: 'block' })
        $('.show-box .lis2').css({ display: 'none' })
    })
    $('.apart03 .con .nav .last').click(function() {
        $('.honorBtn').css({ display: 'block' })
        $(this).addClass('on').siblings().removeClass('on')
        $('.show-box .lis2').css({ display: 'block' })
        $('.show-box .lis1').css({ display: 'none' })
    })

    var i = 0;
    $('.honorPre').click(function() {
        i++;
        if (i == 3) {
            i = -8;
        }
        // console.log(i)
        $('.lis2-box .lis2').animate({ left: 255 * i + 'px' }, 'slow')
    })
    $('.honorNext').click(function() {
        i--;
        if (i == -8) {
            i = 0;
        }
        // console.log(i)
        $('.lis2-box .lis2').animate({ left: 255 * i + 'px' }, 'slow')
    })

    // 企业介绍页面
    $('.tro-nav ul li').eq(0).addClass('on')
        // 导航固定
    $(window).scroll(function() {

        var top1 = $(window).scrollTop();
        console.log(top1);
        $('.tro-nav').css({ 'z-index': 50 })
        if (top1 >= 386) {
            $('.tro-nav').addClass('on')
        } else {
            $('.tro-nav').removeClass('on')
        }
        if (top1 < 883) {
            $('.tro-nav ul li').eq(0).addClass('on').siblings().removeClass('on')
        }
        if (top1 > 883) {
            $('.tro-nav ul li').eq(1).addClass('on').siblings().removeClass('on')
        }
        if (top1 > 1483) {
            $('.tro-nav ul li').eq(2).addClass('on').siblings().removeClass('on')
        }
        if (top1 > 1919) {
            $('.tro-nav ul li').eq(3).addClass('on').siblings().removeClass('on')
        }
        if (top1 > 2541) {
            $('.tro-nav ul li').eq(4).addClass('on').siblings().removeClass('on')
        }
        if (top1 > 3217) {
            $('.tro-nav ul li').eq(5).addClass('on').siblings().removeClass('on')
        }
    })

    // 研发设计页面
    var count1 = -1;
    $('.design-banner .con .nav .arr-pre').click(function() {
        count1++;
        if (count1 > 1) {
            count1 = 0;
        }
        $('.design-banner .con li').eq(count1).animate({ opacity: 1 }, 'slow').siblings().animate({ opacity: 0 }, 'slow')
    })
    var count2 = -1;
    $('.design-banner .con .nav .arr-next').click(function() {
        count2++;
        if (count2 > 1) {
            count2 = 0;
        }
        $('.design-banner .con li').eq(count2).animate({ opacity: 0 }, 'slow').siblings().animate({ opacity: 1 }, 'slow')
    })

    $('.part2 .bd .contain  li').each(function(i) {
        $(this).hover(function() {
            $('.part2 .bd .contain li ._img span').eq(i).css({ display: 'block' });
            $('.part2 .bd .contain .cov').eq(i).animate({ top: 0 }, 'fast');
        }, function() {
            $('.part2 .bd .contain li ._img span').eq(i).css({ display: 'none' });
            $('.part2 .bd .contain .cov').eq(i).animate({ top: '100%' }, 'fast');
        })

    })
    var index = 0;
    $('.btnPre').click(function() {
        index++;
        if (index == 5) {
            $('.part2 .bd .contain ul').css({ left: 0 });
            index = 1;
        }
        $('.part2 .bd .contain ul').animate({ left: -332 * index + 'px' }, 'slow');

    })
    $('.btnNext').click(function() {
        // index--;
        if (index == -1) {
            $('.part2 .bd .contain ul').css({ left: 0 });
            index = 0;
        }
        $('.part2 .bd .contain ul').animate({ left: -332 * index + 'px' }, 'slow');

    })
    var time = setInterval(function() {
        if (index == 5) {
            $('.part2 .bd .contain ul').css({ left: 0 });
            index = 0;
        }
        $('.part2 .bd .contain ul').animate({ left: -320 * index + 'px' }, 'slow');
        index++;
    }, 2000);

    $('.design-banner .top .menu li').click(function() {
        $('.zongCon').css({ display: 'none' });
        $('.top-con ').css({ display: 'block' });
    })

    $('.channel-menu ul li').each(function(i) {
        $('.design-banner .top .menu li').click(function() {
            $('.zongCon').css({ display: 'none' });
            $('.top-con .channel-banner').css({ display: 'block' });
            $('.top-con .top-conn').css({ display: 'block' });
            if (i == 0) {
                $('.top-con .top-conn').css({ display: 'block' });
                $('.top-conn0').css({ display: 'block' }).siblings().css({ display: 'none' })
            }
            // $('.top-conn'+i).css({ display: 'block' }).siblings().css({ display: 'none' })
        })
    })
    $('.channel-menu ul li').each(function(i) {
        $(this).click(function() {
            $('.top-conn' + i).css({ display: 'block' }).siblings().css({ display: 'none' });
            if (i == 1) {
                $('.top-conn1 .topp0').css({ display: 'block' });
                $('.nextPage .btn button').eq(0).css({ background: '#2E9AFD' })
            }
        })
    })
    $('.top-conn1 .topp0 .nextPage .btn button').each(function(i) {
        $('.top-conn1 .topp0').css({ display: 'block' }).siblings().css({ display: 'none' });
        $(this).click(function() {
            $(this).css({ background: '#2E9AFD',color:'white' }).siblings().css({ background: 'white',color:'#777777' })
            $(' .topp' + i).css({ display: 'block' }).siblings().css({ display: 'none' })
        })
    })
     $('.top-conn1 .topp1 .nextPage .btn button').each(function(i) {
        // $('.top-conn1 .topp0').css({ display: 'block' }).siblings().css({ display: 'none' });
        $(this).click(function() {
            $(this).css({ background: '#2E9AFD',color:'white' }).siblings().css({ background: 'white',color:'#777777' })
            $(' .topp' + i).css({ display: 'block' }).siblings().css({ display: 'none' })
        })
    })
      $('.top-conn1 .topp2 .nextPage .btn button').each(function(i) {
        // $('.top-conn1 .topp0').css({ display: 'block' }).siblings().css({ display: 'none' });
        $(this).click(function() {
            $(this).css({ background: '#2E9AFD',color:'white' }).siblings().css({ background: 'white',color:'#777777' })
            $(' .topp' + i).css({ display: 'block' }).siblings().css({ display: 'none' })
        })
    })

    $('.zongCon .top1 ul li a').each(function(i){
         $('.top-con .top-conn0').css({ display: 'block' }).siblings().css({ display: 'none' });
        $(this).click(function(){
            $('.zongCon .con').css({ height: '165px'});
             $('.zongCon .con img,.zongCon .con .con-box,.part1,.part2,.ipart,.part3').css({display:'none'})
            $('.zongCon .top1 ul li').eq(i).addClass('on').siblings().removeClass('on');
            $('.top-con .top-conn' + i).css({ display: 'block' }).siblings().css({ display: 'none' });
        })
    });

    $('.zongCon .design-banner .top1 ul li').click(function(){
         $('.zongCon .design-banner').css({display:'none'})
            $('.top-con').css({display:'block'});
            $('.top-con .top-conn').css({display:'block'});
    })

    $('.ttp li').each(function(i){
        $(this).click(function(){
            $(this).addClass('on').siblings().removeClass('on');
            $('.top-con .top-conn' + i).css({ display: 'block' }).siblings().css({ display: 'none' });
        })
    })
  

    //产品中心页面he 工程技术服务页面
    $('.channel-menu ul li').each(function(i) {
        $('.content0').css({ display: 'block' })
        $('.con0').css({ display: 'block' })
        $('.channel-main0').css({ display: 'block' })
        $('.channel-banner .top1 ul li').eq(0).addClass('on')
        $('.channel-banner .top1 ul li').eq(0).addClass('on1')
        $('.channel-main .channel-left .news-list0').css({ display: 'block' })
        $(this).click(function() {
            $(this).addClass('now').siblings().removeClass('now');
            $('.con' + i).css({ display: 'block' }).siblings().css({ display: 'none' })
            $('.content' + i).css({ display: 'block' }).siblings().css({ display: 'none' });
            $('.channel-main' + i).css({ display: 'block' }).siblings().css({ display: 'none' });
            $('.channel-banner .top1 ul li').eq(i).addClass('on').siblings().removeClass('on');
            $('.channel-main .channel-left .news-list'+i).css({ display: 'block' }).siblings().css({ display: 'none' });
            if(i==2){
                $('.channel-main .channel-right ').css({ display:'none'});
                $('.channel-main .channel-left ').css({width:'90%'})
            }else{
                 $('.channel-main .channel-right ').css({ display: 'block' });
                  $('.channel-main .channel-left ').css({width:'70%'})

            }
        })
    })
    $('.channel-banner .top1 ul li').each(function(i){
        $(this).click(function(){
            $(this).addClass('on1').siblings().removeClass('on1');
            $('.content' + i).css({ display: 'block' }).siblings().css({ display: 'none' });
            $('.channel-main .con' + i).css({ display: 'block' }).siblings().css({ display: 'none' });

        })
    })

    //咨询中心页面


    //人力资源页面
   
    $('.channel-main0 table .xi').each(function(i) {
          $(this).click(function() {
                $('.fu').eq(i).toggle('slow',function(){
                	$(this).addClass('on')
                })
                
            })
    })
    $('.channel-banner .top1 ul li').each(function(i){
        $(this).click(function(){
             $(this).addClass('on').siblings().removeClass('on');
             $('.channel-main' + i).css({ display: 'block' }).siblings().css({ display: 'none' });
              $('.channel-main .channel-left .news-list'+i).css({ display: 'block' }).siblings().css({ display: 'none' });
              if(i==2){
                $('.channel-main .channel-right ').css({ display:'none'});
                $('.channel-main .channel-left ').css({width:'90%'})
            }else{
                 $('.channel-main .channel-right ').css({ display: 'block' });
                  $('.channel-main .channel-left ').css({width:'70%'})

            }
        })
    })
    $('.channel-main1 .btn a').click(function(){
        $('.channel-main2').css({display:'block'}).siblings().css({display:'none'})
    })

})

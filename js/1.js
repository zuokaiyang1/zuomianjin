$(function(){
	now=$(this).index();
	$('.header-main>.header-main-right>.gwc').mouseover(function(){

	    $('.header-main>.header-main-right>.gwc>.gwc-nr').css('display','block');
	    $('.header-main>.header-main-right>.gwc').css('background-color','white');
	}).mouseout(function(){
		$('.header-main>.header-main-right>.gwc>.gwc-nr').css('display','none','background-color','rgb(249,249,249)');
	    $('.header-main>.header-main-right>.gwc').css('background-color','rgb(249,249,249)');

	});

     /*    二级导航栏   横  */

    
	$('#navbox>.top-container>.ulnav>li.xian').mouseover(function(){
		// alert('ni hao');
		nowone=$(this).index();
		// console.log(nowone);
		$('#navbox>.top-container>.xianbox'+''+nowone+''+'').slideDown();
	}).mouseout(function(){
		// alert('wan l');

		$('#navbox>.top-container>.xianbox').mouseover(function(){
		    $('#navbox>.top-container>.xianbox'+''+nowone+''+'').show();
	    }).mouseout(function(){
		    $('#navbox>.top-container>.xianbox'+''+nowone+''+'').stop().hide();
	    });
		$('#navbox>.top-container>.xianbox'+''+nowone+''+'').stop().slideUp();
	});



    /* 二级导航栏 竖 */

	$('#tulun>.tulun-left>.left-nav>li').mouseover(function(){
		// alert('ni hao');
		nowtwo=$(this).index();
		// console.log(nowone);
		$('#tulun>.tulun-left>.tan'+''+nowtwo+''+'').show();
		$(this).css('background-color','white');
	}).mouseout(function(){
		// alert('wan le');
        $(this).css('background-color','rgba(255, 255, 255, 0.882353)');
        // 移入弹出
		$('#tulun>.tulun-left>.tan'+nowtwo+'').mouseover(function(){
		    $('#tulun>.tulun-left>.tan'+''+nowtwo+''+'').show();
            $('#tulun>.tulun-left>.left-nav>li').css('background-color','rgba(255, 255, 255, 0.882353)');
            $('#tulun>.tulun-left>.left-nav>li:eq('+nowtwo+')').css('background-color','white');
	    }).mouseout(function(){
		    $('#tulun>.tulun-left>.tan'+''+nowtwo+''+'').stop().hide();
		    $('#tulun>.tulun-left>.left-nav>li:eq('+nowtwo+')').css('background-color','rgba(255, 255, 255, 0.882353)');
		    
	    });

		$('#tulun>.tulun-left>.tan'+''+nowtwo+''+'').hide();
		// 
		// .stop()
	});
	$('#tulun>.tulun-left>.tan').mouseover(function(){
		$('#tulun>.tulun-left>.tan'+nowtwo+'').show();
		$('#tulun>.tulun-left>.left-nav>li:menul('+nowtwo+')').css('background-color','white');
	}).mouseout(function(){
		$('#tulun>.tulun-left>.tan'+nowtwo+'').hide();
		$('#tulun>.tulun-left>.left-nav>li').css('background-color','rgba(255, 255, 255, 0.882353)');
	})
	// :menul('+nowtwo+')





	


	
	// $('#navbox>.top-container>ul>li:eq('+now+')').mouseover(function(){
	// 	alert('as');
	// 	// $('#navbox>.top-container>.xianbox:eq('+now+')').css('display','block');
	// }).mouseout(function(){
	// 	$('#navbox>.top-container>ul>li:eq('+now+')').css('display','none');
	// })


    /* 轮播图 */
    var nowthree=0;
    var timer=null;
    var len=$('#tulun>.tulun-main>.tulun-main-nr>a').length;
    // console.log(len);
    function run(){
    	// 实现自动轮播
    	// nowthree=$(this).index();
        timer=setInterval(function(){
        	$('#tulun>.tulun-main>.tulun-main-nr>a').fadeOut();
        	$('#tulun>.tulun-main>div.dian>ul>li').css('background-color','rgba(0,0,0,0.4)');


	        if(nowthree>=len-1){
	        	nowthree=0;
	        }else{
	        	nowthree++;
	        }

	        // 显示下一张
	        $('#tulun>.tulun-main>.tulun-main-nr>a:eq('+nowthree+')').fadeIn(1000);
	        $('#tulun>.tulun-main>div.dian>ul>li:eq('+nowthree+')').css('background-color','#ff6699');




        },2000)

    	// alert(12);
    }
    run();

    // 鼠标移入移出 效果
    $('#tulun').mouseover(function(){
    	clearInterval(timer);
    	// 显示左箭头
    	$('#tulun>.tulun-main>p.pre,#tulun>.tulun-main>p.next').show();
    }).mouseout(function(){
    	run();
    	// 隐藏左箭头
    	$('#tulun>.tulun-main>p.pre,#tulun>.tulun-main>p.next').hide();
    })

    // 点击箭头 发生移动  左
    $('#tulun>.tulun-main>p.pre').click(function(){
    	// alert(123);

    	// 设置下标
    	nowthree--;
    	if(nowthree<0){
    		nowthree=len-1;
    	}

    	// 隐藏当前的 显示上一张
    	$('#tulun>.tulun-main>.tulun-main-nr>a').hide();
    	$('#tulun>.tulun-main>div.dian>ul>li').css('background-color','rgba(0,0,0,0.4)');

    	//显示
    	$('#tulun>.tulun-main>.tulun-main-nr>a:eq('+nowthree+')').fadeIn(1000);
    	$('#tulun>.tulun-main>div.dian>ul>li:eq('+nowthree+')').css('background-color','#ff6699');
    })

    // 点击箭头 发生移动  右
    $('#tulun>.tulun-main>p.next').click(function(){
    	// alert(123);

    	// 设置下标
    	nowthree++;
    	if(nowthree>len-1){
    		nowthree=0;
    	}

    	// 隐藏当前的 显示上一张
    	$('#tulun>.tulun-main>.tulun-main-nr>a').hide();
    	$('#tulun>.tulun-main>div.dian>ul>li').css('background-color','rgba(0,0,0,0.4)');

    	//显示
    	$('#tulun>.tulun-main>.tulun-main-nr>a:eq('+nowthree+')').fadeIn(1000);
    	$('#tulun>.tulun-main>div.dian>ul>li:eq('+nowthree+')').css('background-color','#ff6699');
    })

    // 点击下方数字 图片跳到相应位置
    $('#tulun>.tulun-main>div.dian>ul>li').click(function(){
    	// 清除定时器
    	clearInterval(timer);
    	// 隐藏以前的样式
    	$('#tulun>.tulun-main>.tulun-main-nr>a').hide();
    	$('#tulun>.tulun-main>div.dian>ul>li').css('background-color','rgba(0,0,0,0.4)');
    	// 显示
    	// 当前li数字下标
    	nowthree=$(this).index();
    	// 显示图片数字
    	$('#tulun>.tulun-main>.tulun-main-nr>a:eq('+nowthree+')').fadeIn(1000);
    	$('#tulun>.tulun-main>div.dian>ul>li:eq('+nowthree+')').css('background-color','#ff6699');
    })








    // /*   自营商品盒子阴影   */
    // $('#myproduct>ul>li').mouseover(function(){
    // 	$('#myproduct>ul>li').addClass()
    // })

    /*  返回顶部   */

    /*  移入微信li 弹出 */
    $('.fhdb>ul>li.wxgz').mouseover(function(){
        $('.fhdb>ul>li.wxgz>.tu1').hide();
        $('.fhdb>ul>li.wxgz>a').fadeIn(50);
        $('.fhdb>ul>li.wxgz>.wxgz-nr').show();
    }).mouseout(function(){
         $('.fhdb>ul>li.wxgz>.tu1').show();
        $('.fhdb>ul>li.wxgz>a').stop().fadeOut(50);
        $('.fhdb>ul>li.wxgz>.wxgz-nr').hide();
    })


    /*  移入手机商城li 弹出 */
    $('.fhdb>ul>li.sjsc').mouseover(function(){
        $('.fhdb>ul>li.sjsc>.tu1').hide();
        $('.fhdb>ul>li.sjsc>a').fadeIn(50);
        $('.fhdb>ul>li.sjsc>a').css('background-color','#ccc');
        $('.fhdb>ul>li.sjsc>.sjsc-nr').show();
    }).mouseout(function(){
         $('.fhdb>ul>li.sjsc>.tu1').show();
        $('.fhdb>ul>li.sjsc>a').stop().fadeOut(50);
        $('.fhdb>ul>li.sjsc>.sjsc-nr').hide();
    });

    /*  移入返回顶部li 弹出返回顶部 */
    $('.fhdb>ul>li.fhdb-nr').mouseover(function(){
        $('.fhdb>ul>li.fhdb-nr>.tu1').hide();
        $('.fhdb>ul>li.fhdb-nr>a').fadeIn(50);
        $('.fhdb>ul>li.fhdb-nr>a').css('background-color','#ccc');
    }).mouseout(function(){
         $('.fhdb>ul>li.fhdb-nr>.tu1').show();
        $('.fhdb>ul>li.fhdb-nr>a').stop().fadeOut(50);
        $('.fhdb>ul>li.sjsc>.fhdb-nr-nr').hide();
    });
    
    /* 点击返回顶部 */
    // var x=srcoll
    var t=0;
    var l=0;
    var timer;
    $('.fhdb>ul>li.fhdb-nr').click(function(){
        l=document.body.scrollTop;
        timer=setInterval(function(){
            l=l+(t-l)/10;
            if(l<=50){
                clearInterval(timer);
                l=0;
            }
            window.scrollTo(0,l)
        },30)

    })
    //  滑到300时 显示返回顶部
    $(document).scroll(function(){
       if($(document).scrollTop()>=300){
        $('.fhdb>.wxgz').show();
        $('.fhdb>.sjsc').show();
        $('.fhdb>ul>li.fhdb-nr').show();
        $('.fhdb').css('height','120px');
       }else{
        $('.fhdb>.wxgz').show();
        $('.fhdb>.sjsc').show();
        $('.fhdb>ul>li.fhdb-nr').hide();
        $('.fhdb').css('height','80px');
       }
    })




    /*  移入微信li 弹出 */
    $('.fhdb>ul>li.wxgz').mouseover(function(){
        $('.fhdb>ul>li.wxgz>.tu1').hide();
        $('.fhdb>ul>li.wxgz>a').fadeIn(50);
        $('.fhdb>ul>li.wxgz>.wxgz-nr').show();
    }).mouseout(function(){
         $('.fhdb>ul>li.wxgz>.tu1').show();
        $('.fhdb>ul>li.wxgz>a').stop().fadeOut(50);
        $('.fhdb>ul>li.wxgz>.wxgz-nr').hide();
    })


    /*  移入手机商城li 弹出 */
    $('.fhdb>ul>li.sjsc').mouseover(function(){
        $('.fhdb>ul>li.sjsc>.tu1').hide();
        $('.fhdb>ul>li.sjsc>a').fadeIn(50);
        $('.fhdb>ul>li.sjsc>a').css('background-color','#ccc');
        $('.fhdb>ul>li.sjsc>.sjsc-nr').show();
    }).mouseout(function(){
         $('.fhdb>ul>li.sjsc>.tu1').show();
        $('.fhdb>ul>li.sjsc>a').stop().fadeOut(50);
        $('.fhdb>ul>li.sjsc>.sjsc-nr').hide();
    });

    /*  移入返回顶部li 弹出 */
    $('.fhdb>ul>li.fhdb-nr').mouseover(function(){
        $('.fhdb>ul>li.fhdb-nr>.tu1').hide();
        $('.fhdb>ul>li.fhdb-nr>a').fadeIn(50);
        $('.fhdb>ul>li.fhdb-nr>a').css('background-color','#ccc');
    }).mouseout(function(){
         $('.fhdb>ul>li.fhdb-nr>.tu1').show();
        $('.fhdb>ul>li.fhdb-nr>a').stop().fadeOut(50);
        $('.fhdb>ul>li.sjsc>.fhdb-nr-nr').hide();
    });
    
    /* 点击返回顶部 */
    // var x=srcoll
    
    var timer;
    
    $('.fhdb>ul>li.fhdb-nr').click(function(){
    	
        clearInterval(timer);
        l=document.body.scrollTop;
        timer=setInterval(function(){
        	var t=0;
            var l=0;
            l=l+(t-l)/10;
            if(l<=50)
            {
                
                l=0;

            }
            window.scrollTo(0,l)
        },30)

    })


    /*  设置旁边的楼层  */
    // 滑到600时出来
    $(document).scroll(function(){
    	if($(document).scrollTop()>=500){
    		$('#lou').show();
    		$('#lou>ul').show();
    	}else{
    		$('#lou').hide();
    		$('#lou>ul').hide();
    	}
    })

    /*  点哪层 跑到哪层  */
    var t=0;
    var l=null;
    // var a=
    var timer;
    // nowfore=$(this).index();
    // console.log(nowfore);
    $('#lou>ul>li.li1>a').click(function(){
    	// 
    	l=document.body.scrollTop;
    	timer=setInterval(function(){
    		l=l+(t-l)/10;
    		if(l<=1220){
    			
    			clearInterval(timer);
    			l=1220;
    			
    		}
    		window.scrollTo(0,l);
    	},100)
    });
    // 点击第二层
    $('#lou>ul>li.li2>a').click(function(){
    	// 
    	l=document.body.scrollTop;
    	timer=setInterval(function(){
    		l=l+(t-l)/10;
    		if(l<=1800){
    			
    			clearInterval(timer);
    			l=1800;
    			
    		}
    		window.scrollTo(0,l);
    	},100)
    });

    // 点击第三层
    $('#lou>ul>li.li3>a').click(function(){
    	// 
    	l=document.body.scrollTop;
    	timer=setInterval(function(){
    		l=l+(t-l)/10;
    		if(l<=2385){
    			
    			clearInterval(timer);
    			l=2385;
    			
    		}
    		window.scrollTo(0,l);
    	},100)
    });

    // 点击第四层
    $('#lou>ul>li.li4>a').click(function(){
    	// 
    	l=document.body.scrollTop;
    	timer=setInterval(function(){
    		l=l+(t-l)/10;
    		if(l<=2970){
    			
    			clearInterval(timer);
    			l=2970;
    			
    		}
    		window.scrollTo(0,l);
    	},100)
    });

    // 点击第五层
    $('#lou>ul>li.li5>a').click(function(){
    	// 
    	l=document.body.scrollTop;
    	timer=setInterval(function(){
    		l=l+(t-l)/10;
    		if(l<=3557){
    			
    			clearInterval(timer);
    			l=3557;
    			
    		}
    		window.scrollTo(0,l);
    	},100)
    });

    // 点击第六层
    $('#lou>ul>li.li6>a').click(function(){
    	// 
    	// clearInterval(timer);
    	l=document.body.scrollTop;
    	timer=setInterval(function(){
    		l=l+(t-l)/10;
    		if(l<=4152){
    			
    			clearInterval(timer);
    			l=4152;
    			
    		}
    		window.scrollTo(0,l);
    	},100)
    })



    // boxshadow
    nowfive=$(this).index();
    $('#myproduct>ul>li').mouseout(function(){
    	// alert(12);
    	$('#myproduct>ul>li:eq('+nowfive+')').css('boxshadow','0px 0px 10px red');
    });


})


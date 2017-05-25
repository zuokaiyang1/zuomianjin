$(function(){
	now=$(this).index();
	$('.header-main>.header-main-right>.gwc').mouseover(function(){

	    $('.header-main>.header-main-right>.gwc>.gwc-nr').css('display','block');
	    $('.header-main>.header-main-right>.gwc').css('background-color','white');
        $('.header-main>.header-main-right>.gwc').css('border-bottom','1px solid white');
	}).mouseout(function(){
		$('.header-main>.header-main-right>.gwc>.gwc-nr').css('display','none','background-color','rgb(249,249,249)');
	    $('.header-main>.header-main-right>.gwc').css('background-color','rgb(249,249,249)');
        $('.header-main>.header-main-right>.gwc').css('border-bottom','1px solid #ccc');

	});

    /*    二级导航栏    */

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


	/*  放大镜的效果   */
	$('#box>.boxa>.boxleft>.small').mouseover(function(){
		$('#box>.boxa>.boxleft>.small>.move,#box>.boxa>.boxleft>.bigimg').show();
		$('#box>.boxa>.boxleft>.small').css('border','1px solid #ccc').show();


		$(this).mousemove(function(e){
			var e=e||event;
			var x=e.pageX-$(this).offset().left;
			var y=e.pageY-$(this).offset().top;
			// console.log(x+'---'+y);

			var xx=x-$('#box>.boxa>.boxleft>.small>.move').width()/2;
			var yy=y-$('#box>.boxa>.boxleft>.small>.move').height()/2;
			// console.log(xx+'--'+yy)

            // 左
            if(xx<=0){
            	xx=0;
            }

            // 上
            if(yy<=0){
            	yy=0;
            }

            // 右边 max宽=small宽-move宽
            if(xx>=$('#box>.boxa>.boxleft>.small').width()-$('#box>.boxa>.boxleft>.small>.move').width()){
            	xx=$('#box>.boxa>.boxleft>.small').width()-$('#box>.boxa>.boxleft>.small>.move').width();
            }


            // 下边  max高=small高-move高
            if(yy>=$('#box>.boxa>.boxleft>.small').height()-$('#box>.boxa>.boxleft>.small>.move').height()){
            	yy=$('#box>.boxa>.boxleft>.small').height()-$('#box>.boxa>.boxleft>.small>.move').height();
            }




			$('#box>.boxa>.boxleft>.small>.move').css({left:xx,top:yy});

			/*  获取大小图比例  */
			var scale=$('#box>.boxa>.boxleft>.bigimg>img').width()/$('#box>.boxa>.boxleft>.small>img').width();

			var dw=$('#box>.boxa>.boxleft>.bigimg').width();
			var dh=$('#box>.boxa>.boxleft>.bigimg').height();

            $('#box>.boxa>.boxleft>.bigimg').scrollLeft(xx*scale);
            $('#box>.boxa>.boxleft>.bigimg').scrollTop(yy*scale);

		});

	}).mouseout(function(){
		$('#box>.boxa>.boxleft>.small>.move,#box>.boxa>.boxleft>.bigimg').hide();
		$('#box>.boxa>.boxleft>.small').css('border','0px solid #ccc');
	});
    
    var oUl=document.getElementById('xiaotu-ul');
    var oLi=oUl.getElementsByTagName('li');
    var oSma=document.getElementById('sma');
    var oBigimg=document.getElementById('bigimg');
    // console.log(oSma);
    // console.log(oBigimg);
    // console.log(oUl);
    // console.log(oLi);

    
    $('#box>.boxa>.boxleft>.xiaotu>ul>li').mouseover(function(){

    		// alert(12);
    		var nowtwo=$(this).index()+1;
    		$('#box>.boxa>.boxleft>.xiaotu>ul>li.li'+nowtwo+'>img').css('border','1px solid #ccc');
            // console.log(nowtwo);
            

            oSma.src='./image/fdj'+nowtwo+'.jpg';

            oBigimg.src='./image/fdj'+nowtwo+'.jpg';
    	}).mouseout(function(){
    		var nowtwo=$(this).index()+1;
            $('#box>.boxa>.boxleft>.xiaotu>ul>li.li'+nowtwo+'>img').css('border','1px solid white');
    	});


    /*   右边的配送地址的选项卡    */
    $('#box>.boxa>.boxright>.boxright-center>.center-two>.two-div').click(function(){
    	$('#box>.boxa>.boxright>.boxright-center>.pei-dz').toggle();
     
        // $('#box>.boxa>.boxright>.boxright-center>.center-two>.two-div>p').click(function(){
        //     $('#box>.boxa>.boxright>.boxright-center>.pei-dz').toggle();
            
        //     $('#box>.boxa>.boxright>.boxright-center>.center-two>.two-div>p').text('▼');

        // });



        $('#box>.boxa>.boxright>.boxright-center>.center-two>.two-div>p').text('▲');
        return false;
    });

    //  $('#box>.boxa>.boxright>.boxright-center>.center-two>.two-div').click(function(){
    //     $('#box>.boxa>.boxright>.boxright-center>.pei-dz').toggle();



    //     $('#box>.boxa>.boxright>.boxright-center>.center-two>.two-div>p').text('▼');
    //     return false;
    // });
    
	

    $('#box>.boxa>.boxright>.boxright-center>.pei-dz>.pei-dz-top>p').click(function(){
        $('#box>.boxa>.boxright>.boxright-center>.pei-dz').toggle();
        $('#box>.boxa>.boxright>.boxright-center>.center-two>.two-div>p').text('▼');
        return false;
    });


    //选项卡
    
    $('#box .pei-dz>.pei-dz-top>ul>li').click(function(){
        nowfore=$(this).index();
        // console.log(nowfore);
        // nowfore=nowfore+1;

        // 删除原有样式
        $('#box .pei-dz>.pei-dz-top>ul>li').removeClass('xuan');
        $('#box>.boxa>.boxright>.boxright-center>.pei-dz>.pei-dz-xia>ul').removeClass('xuanx');
        $('#box .pei-dz>.pei-dz-top>ul>li:eq('+nowfore+')').addClass('xuan');
        $('#box>.boxa>.boxright>.boxright-center>.pei-dz>.pei-dz-xia>ul:eq('+nowfore+')').addClass('xuanx');
    });
    // 点击里面的内容  跳到下一个选
    nowfive=$(this).index();
    // for(var i=0;i<){}
    $('#box>.boxa>.boxright>.boxright-center>.pei-dz>.pei-dz-xia>ul>li.data'+nowfive+'').click(function(){
        // alert(12);
        $('#box>.boxa>.boxright>.boxright-center>.pei-dz>.pei-dz-xia>ul>li.data'+nowfive+'').css('background-color','green');

    })




    /*   点加 */
    // vlaue=$(this).val();

    $('#box>.boxa>.boxright>.boxright-center>.shuliang>.shuliang-nr>p.jian').click(function(){
        // alert(12);
        // console.log(value);
        value=$('#box>.boxa>.boxright>.boxright-center>.shuliang>.shuliang-nr>input').val();

        // alert(value);
        
        value=parseInt(value)-1;
        if(value<1){
            value=1;
        }
        $('#box>.boxa>.boxright>.boxright-center>.shuliang>.shuliang-nr>input').val(value);

        // console.log('value+'+val);
    });

    // 加
    $('#box>.boxa>.boxright>.boxright-center>.shuliang>.shuliang-nr>p.jia').click(function(){
        // alert(12);
        // console.log(value);
        value=$('#box>.boxa>.boxright>.boxright-center>.shuliang>.shuliang-nr>input').val();

        // alert(value);
        
        value=parseInt(value)+1;
    
        if(value>100){
            value=value;
        }
        $('#box>.boxa>.boxright>.boxright-center>.shuliang>.shuliang-nr>input').val(value);

        // console.log('value+'+val);
    });


































    /*  喜欢  */
    $('#box>.boxa>.boxright>.boxright-bottom1>a.love').mouseover(function(){
        $('#box>.boxa>.boxright>.boxright-bottom1>a.love').css('color','#FD5229');
        $('#box>.boxa>.boxright>.boxright-bottom1>a.love>span').addClass('love-span');
    }).mouseout(function(){
        $('#box>.boxa>.boxright>.boxright-bottom1>a.love').css('color','white');
        $('#box>.boxa>.boxright>.boxright-bottom1>a.love>span').removeClass('love-span');
    })


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
    
    var timer;
    $('.fhdb>ul>li.fhdb-nr').click(function(){
        l=document.body.scrollTop;
        timer=setInterval(function(){
            var t=0;
            var l=0;
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


    /*   滑到一定距离 弹出  */
    $(document).scroll(function(){
        if($(document).scrollTop()>=1050){
            $('.tan').slideDown(200);
        }else{
            $('.tan').slideUp(200);
        }

    })

    /*  点击相应的字 跑到相应位置  */
    // 点产品详情
    var x=0;
    var y=0;
    var timer;
    $('.tan>.zhong>ul>li.chan').click(function(){
        y=document.body.scrollTop;
        timer=setInterval(function(){
            clearInterval(timer);
            y=y+(x-y)/10;
            if(y<=30){
                
                y=1050;
                
            }

            window.scrollTo(0,1030);
        },30)
        

        $('.tan>.zhong>ul>li.chan').css('color','#6EC177');
        $('.tan>.zhong>ul>li.gui').css('color','black');
        $('.tan>.zhong>ul>li.chang').css('color','black');

        $('#xq>.xq-top>.xin>.xq-topnr>ul>li.chan').css('color','#6EC177');
        $('#xq>.xq-top>.xin>.xq-topnr>ul>li.gui').css('color','black');
        $('#xq>.xq-top>.xin>.xq-topnr>ul>li.chang').css('color','black');

    });
    /*  规格参数  */
    $('.tan>.zhong>ul>li.gui').click(function(){
        y=document.body.scrollTop;
        timer=setInterval(function(){
            clearInterval(timer);
            y=y+(x-y)/10;
            if(y<=30){
                y=20;
                
                
            }
            
            window.scrollTo(0,20422);
        },30)
        

        $('.tan>.zhong>ul>li.gui').css('color','#6EC177');
         $('.tan>.zhong>ul>li.chan').css('color','black');
        $('.tan>.zhong>ul>li.chang>a').css('color','black');
        

        $('#xq>.xq-top>.xin>.xq-topnr>ul>li.gui').css('color','#6EC177');
        $('#xq>.xq-top>.xin>.xq-topnr>ul>li.chan').css('color','black');
        $('#xq>.xq-top>.xin>.xq-topnr>ul>li.chang>a').css('color','black');
    });
    /*  点前面的  */
    $('#xq>.xq-top>.xin>.xq-topnr>ul>li.gui').click(function(){
        y=document.body.scrollTop;
        timer=setInterval(function(){
            clearInterval(timer);
            y=y+(x-y)/10;
            if(y<=30){
                y=20;
                
                
            }
            
            window.scrollTo(0,20422);
        },30)
        

        $('.tan>.zhong>ul>li.gui').css('color','#6EC177');
         $('.tan>.zhong>ul>li.chan').css('color','black');
        $('.tan>.zhong>ul>li.chang').css('color','black');
        

        $('#xq>.xq-top>.xin>.xq-topnr>ul>li.gui').css('color','#6EC177');
        $('#xq>.xq-top>.xin>.xq-topnr>ul>li.chan').css('color','black');
        $('#xq>.xq-top>.xin>.xq-topnr>ul>li.chang').css('color','black');
    });


    /*  常见问题 */
    $('.tan>.zhong>ul>li.chang').click(function(){
       

        $('.tan>.zhong>ul>li.chang').css('color','#6EC177');
        $('#xq>.xq-top>.xin>.xq-topnr>ul>li.chang').css('color','#6EC177');

        $('.tan>.zhong>ul>li.chan').css('color','black');
        $('.tan>.zhong>ul>li.gui').css('color','black');

    });
      // 点前面的   
    $('.tan>.zhong>ul>li.chang').click(function(){
        $('.tan>.zhong>ul>li.chang>a').css('color','#6EC177');
        $('#xq>.xq-top>.xin>.xq-topnr>ul>li.chang').css('color','#6EC177');

        $('.tan>.zhong>ul>li.chan').css('color','black');
        $('.tan>.zhong>ul>li.gui').css('color','black');

    });





















		
 



})
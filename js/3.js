$(function(){
    $('.nr>.xin>.right>div.huan').click(function(){
    	$('.nr>.xin>.right').hide();
    	$('.nr>.xin>.sao').show();
    });
    $('.nr>.xin>.sao>div.saohuan').click(function(){
    	$('.nr>.xin>.right').show();
    	$('.nr>.xin>.sao').hide();
    });

    // 验证
    // $('')


    // 移入变色
    now=$(this).index();
    $('.xia>.xin>.xia-top>ul>li').mouseover(function(){
    	$('.xia>.xin>.xia-top>ul>li').css('color','green');
    	$('.xia>.xin>.xia-top>ul>li:eq('+now+')').css('border-color','green');
    }).mouseout(function(){
    	$('.xia>.xin>.xia-top>ul>li').css('color','#ccc');
    	$('.xia>.xin>.xia-top>ul>li:eq('+now+')').css('border-color','#ccc');
    })






})
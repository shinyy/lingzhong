$(function(){
	//导航栏伸缩
	var navNum=0;
	$("#nav-slide").click(function(){
		if(navNum==0){
			$("body").css("background","none");
			$("#leftSide").css({"position":"absolute","left":-220});
			$(".userNav").css("margin-right",-6)
			$(this).text(">>");
			navNum=1;
		}else{
			$("body").css("background","url(images/backgrounds/bodyBg.png) repeat-y 0 0");
			$("#leftSide").css({"position":"relative","left":0});
			$(".userNav").css("margin-right",214)
			$(this).text("<<");
			navNum=0;
		}
})
	
	//二级菜单切换
	$(".nav>.forms>.exp").on("click",function(){
		$(this).siblings(".sub").toggle( "blind",200)
	})
	
	//
	$(".dd>a").click(function(){
		$(this).siblings(".userDropdown").toggle("blind",200)
	})
	
	//响应式小导航
	$(".goTo").click(function(){
		$(this).siblings(".smallDropdown").toggle("blind",200)
	})
	
	})

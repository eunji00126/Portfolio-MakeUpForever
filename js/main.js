$(function(){
	//a태그 새로고침 방지 초기화
	$(document).on('click', 'a[href="#"]', function(e){
        e.preventDefault();
    });

	//메인 화면 메인 이미지 슬라이드
	var istop;
	var index;
	var sw=false;

	function moveSlider(index){
		$('.slider').animate({
		left:-(index*1280)//인덱스값 0*600
	},'slow');
	$('.control_button').removeClass('active');
	$('.control_button').eq(index-1).addClass('active');
	};

	function autoMove(){
	istop=setInterval(function(){ 
		$('.right').trigger('click');
		},5000);  
	}

	$(document).ready(function(){
		$('.slider').append($('.slider_image').first().clone());//맨 앞 이미지를 복제해서 마지막 슬라이드에 위치
		$('.slider').prepend($('.slider_image').eq(-2).clone());
		index=1; 
		moveSlider(index);
		autoMove();
		$('.slider_panel').hover(function(){
			clearInterval(istop);
		},function(){
			autoMove();
		});
		$('.control_button').click(function(){
			index=$(this).index();
			moveSlider(index+1);
		});
		$('.left').click(function(){
		if(index>1){
			index--;
		}else{
			$('.slider').css('left',-1280);
			index=4;
		}
			moveSlider(index);
		});
		$('.right').click(function(){
		if(index<4){ 
			index++;
		}else{
			$('.slider').css('left',0);
			index=1;
	}
	moveSlider(index);
		});
			});

		// header 메뉴 영역 

		// 메뉴 슬라이드 다운 시 메뉴 콘텐츠 내용 보이기
		$('.dropbtn').hover(function(){
			$(this).parent().find('.dropdown-content').slideDown();
			$(this).parent().hover(function(){
			},function(){
				$(this).parent().find('.dropdown-content').slideUp(500);
			});
		});

		// 페이지 스크롤시 메뉴 효과 
 		$(window).on('scroll',function(){
			if($(window).scrollTop()){
				$('.header,.logo,.header_menu').addClass('active');
			}else{
				$('.header,.logo,.header_menu').removeClass('active');
			}
		});

		// 메인 화면 제품 슬라이드 
		$('.container1').slick({
			centerMode: true,
			centerPadding: '1px',
			slidesToShow: 5,
			slidesToScroll:1,
			arrows:true,
			swipe:true,
			autoplay: true,
			speed:500,
			responsive: [
			{
				breakpoint: 1068,
				settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
				}
			},
			{
				breakpoint: 550,
				settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
				}
			}
			]
			});

			//클릭 시 위로 올라가는 탑 버튼 클릭 애니메이션
			$(".top").on("click",function(){
				$("html, body").stop().animate({scrollTop:0},1000);
			});

			// 필터 모달창 영역
			document.getElementById("myBtn").onclick = function() {
			document.getElementById("modal").style.display="block";
			}
				document.getElementById("close").onclick = function() {
				document.getElementById("modal").style.display="none";
			}   

			// 제품 더보기 버튼 구현
			setCheckList('#product_container', 8);
			function setCheckList(selector, number) {
				var listLength = 0;
				var listShown = number; //보여줄 개수
		  
			//초기화
			showMore();
			
			$(selector).find('a.more').on('click', function() {
				showMore();
			});
		  
		  
		  function showMore() {
			  listLength = $(selector).find('ul.product-ul li.on').length;//더 보기를 클릭할때 클래스 on 을 찾는다
			  if (listShown >= listLength) {
				  listShown = listLength;
				  $(selector).find('a.more').hide();
			  } else {
				  $(selector).find('a.more').show();
			  }
			  $(selector).find('ul.product-ul li.on:lt(' + (listShown) + ')').addClass('show');
			  listShown += number;
		  }
	  };
});
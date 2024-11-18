$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".toggle_btn").on("click", function () {
    if ($("header").hasClass("open")) {
      // headerにopenクラスが存在する場合、openクラスを削除
      $("header").removeClass("open");
    } else {
      // headerにopenクラスが存在しない場合、openクラスを追加
      $("header").addClass("open");
    }
  });

  // メニューが表示されている時に画面をクリックした場合
  $('.mask').on('click', function () {
    // メニューを閉じる
    $('header').removeClass('open');
  });


  /*=================================================
  初期表示アニメーション
  ===================================================*/
  var pathname = window.location.pathname;
  // TOP画面のみアニメーション表示
  if (pathname === "/") {
    $(".main-site").css("display", "none");
    setTimeout(function() {
      $('.anime').fadeOut();
    }, 20);//2200
      
    $(function(){
      $(".main-site").css({opacity:'0'});
      $(".header").css({opacity:'0'});
      setTimeout(function(){
        $(".main-site").css("display", "block");
        $(".header").css("display", "block");
        $(".main-site").stop().animate({opacity:'1'},800);
        $(".header").stop().animate({opacity:'1'},800);
      },20);//2500
    });
  } else {
    $(function(){
      $('.anime').css("display", "none");
      $(".main-site").stop().animate({opacity:'1'},0);
      $(".header").stop().animate({opacity:'1'},0);
    });
  }


  /*=================================================
  背景アニメーション
  ===================================================*/
  // member以降は非表示
  const serviceBgImg = document.querySelector('.service-bg-img');
  const memberSection = document.getElementById('members');

  window.addEventListener('scroll', function() {
      const rect = memberSection.getBoundingClientRect();
      if (rect.top <= 0) {
          serviceBgImg.style.display = 'none';
      } else {
          serviceBgImg.style.display = 'block';
      }
  });


  /*=================================================
  スムーススクロール
  ===================================================*/
  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    // ジャンプ先をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, 600 , "swing");

    $(".header").removeClass("open");
    // urlが変化しないよう
    return false;
  });


  /*=================================================
  タイピングアニメーション
  ===================================================*/
  const typing = (element, sentence) => {
    [...sentence].forEach((character, index) => {
      setTimeout(() => {
        document.querySelector(element).textContent += character;
      }, 30 * ++index);
    });
  };

  // MESSAGEタイピング
  const messagesSection = document.getElementById('messages');
  $(window).on('scroll', function() {
    const rect = messagesSection.getBoundingClientRect();
    if (rect.top <= -1) {
      typing('.typing-name', '代表取締役：佐藤 美那⼦');
      typing('.typing-message-text', "10代からプロモーション業を手がける中で、「魅力があるのに、その魅力にフォーカスされていない」サービスや企業を目にしてきました。特に、日本には素晴らしい歴史、文化、技術がありながら、デジタル化の時代に適応できず、自社サービスの魅力を適切にアピールできていないという課題に気づきました。そんな不器用ながらも魅力ある企業を、クリエイティブとテクノロジーを使って、その魅力を世界に届けたいという想いで、STUDIO FOCUSを設立しました。");
      // 一度だけ発火して処理終了
      $(window).off('scroll');
    } 
  });


  /*=================================================
  スライドイン
  ===================================================*/

  const contentLeftSection = document.getElementById('about');
  const contentSecondSection = document.getElementById('content-second');
  $(window).on('scroll', function() {
    const rect = contentLeftSection.getBoundingClientRect();
    const rect2 = contentSecondSection.getBoundingClientRect();
    if (rect.top <= -1) {
        $(".content-left").addClass("slide-to-right");
        $(".content-right").addClass("slide-to-left");
    } 
    if (rect2.top <= -1) {
        $(".content-left-second").addClass("slide-to-right");
        $(".content-right-second").addClass("slide-to-left");
    } 
  });

  // function slide(addClassNm, position){
  //   var scroll = $(window).scrollTop();
  //   var target = $(position).offset().top;
  //   var windowHeight = $(window).height();

  //   if (scroll > target - windowHeight + $(position).outerHeight() + 550) {
  //     $(position).addClass(addClassNm);
  //   }
  // };
  
  // $(window).scroll(function () {
  //   $(".content-left").each(function () {
  //     slide("slide-to-right", this);
  //   });

  //   $(".content-right").each(function () {
  //     slide("slide-to-left", this);
  //   });
    
  // });


});





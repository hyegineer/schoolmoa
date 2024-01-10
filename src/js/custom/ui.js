// 버튼효과: 찜버튼 / 비밀번호 보이기 버튼 등 토글버튼
$('.toggle-btn').on('click', function () {
  $(this).toggleClass('active');
})

// 아코디언 카드효과
function showContent(target, parent) {
  $(target).parents('.accordion-card-top').siblings('.accordion-card-bottom').slideToggle();

  if ($(target).hasClass(parent)) {
    $(target).toggleClass('active');
  } else {
    $(target).parents('.' + parent).toggleClass('active');
  }
}

// 텍스트에어리어: 입력할 때 글자수 체크
$('textarea[data-js-counttextarea]').keyup(function (e) {
  let content = $(this).val();
  let maxlength = $(this).attr('maxlength');

  // 글자수 세기
  if (content.length == 0 || content == '') {
    $('[data-js-count]').text('0');
  } else {
    $('[data-js-count]').text(content.length);
  }

  // 글자수 제한
  if (content.length > maxlength) {
    // 200자 부터는 타이핑 되지 않도록
    $(this).val($(this).val().substring(0, maxlength));
    // 200자 넘으면 알림창 뜨도록
    alert(`글자수는 ${maxlength}자까지 입력 가능합니다.`);
  };
});
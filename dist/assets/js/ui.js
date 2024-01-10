function openHdSearch() {
  $('.header-search-wrap').addClass('active');
  $('.header-overlay').addClass('active');
}

function closeHdSearch() {
  $('.header-search-wrap').removeClass('active');
  $('.header-overlay').removeClass('active');
  $('.bottom-bd-inp-wrap .inp').val('');
  $('.bottom-bd-inp-wrap .del-btn').removeClasS('active');
}

function toggleHdMenu() {
  $('.header-btn-wrap').toggleClass('active');
}

// 헤더 검색: 검색어 입력시 지우기 버튼 활성화
$('.bottom-bd-inp-wrap .inp').on('input', function () {
  if ($(this).val()) {
    $(this).siblings('.del-btn').addClass('active');
  } else {
    $(this).siblings('.del-btn').removeClass('active');
  }
})

// 헤더 검색: 검색어 입력시 지우기 버튼 작동
$('.bottom-bd-inp-wrap .del-btn').on('click', function () {
  $(this).siblings('.inp').val('');
})

// 헤더 검색: 검색어 포커스할 때 보더 효과 적용
$('.bottom-bd-inp-wrap .inp').on('focus', function () {
  $(this).parent('.bottom-bd-inp-wrap').addClass('active');
})

// 헤더 검색: 검색어 포커스 뗄 때 보더 효과 해제
$('.bottom-bd-inp-wrap .inp').on('blur', function () {
  $(this).parent('.bottom-bd-inp-wrap').removeClass('active');
})
// 모달 열고 닫기
function openModal(id) {
  $('#' + id).addClass('active');
  $('#' + id).children('.custom-modal').scrollTop(0);
}

function closeModal(id) {
  $('#' + id).removeClass('active');
}

function allCloseModal() {
  $('.modal-wrapper').removeClass('active');
}
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
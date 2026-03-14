/**
 * セミナー LP - JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {

  // ===========================
  // CTAボックスのクリックイベント（画像挿入後に URL を変更してください）
  // ===========================
  const ctaBox = document.querySelector('.cta-box');
  if (ctaBox) {
    ctaBox.addEventListener('click', () => {
      // TODO: 遷移先 URL を設定してください
      // window.location.href = 'https://example.com/register';
      console.log('CTA clicked');
    });
  }

});


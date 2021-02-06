/*
 * Copy current page url to clipboard.
 */

function copyLink(url) {
  if (!url || 0 === url.length) {
    url = window.location.href;
  }

  const $temp = $("<input>");
  $("body").append($temp);
  $temp.val(url).select();
  document.execCommand("copy");
  $temp.remove();

  alert("已将地址复制到剪切板！");
}

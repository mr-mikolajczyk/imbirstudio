(function countWords(t) {
    let e = 0;
    for (let n = 0; n < t.length; n++) /[a-zA-Z]/.test(t[n]) && e++;
    let o = e / 245;
    o = Math.floor(o);
    document.querySelector("[data-rt='show']").textContent = o
  })(document.querySelector("[data-rt=count]").textContent);
  
  document.addEventListener("DOMContentLoaded", (function setAsideItemMargin() {
    const t = document.querySelector(".blog-post_author").offsetHeight;
    document.querySelector(".aside_item").style.margin = `0 0 ${t}px 0`
  }));
  
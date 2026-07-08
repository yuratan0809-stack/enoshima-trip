// ページを開いたときにふわっと表示
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// ボタンを少し動かす
const button = document.querySelector(".btn");

button.addEventListener("mouseenter", () => {
  button.style.transform = "scale(1.08)";
});

button.addEventListener("mouseleave", () => {
  button.style.transform = "scale(1)";
});

// チェックリストを保存
const checks = document.querySelectorAll("input[type='checkbox']");

checks.forEach((check, index) => {
  const saved = localStorage.getItem("check" + index);

  if (saved === "true") {
    check.checked = true;
  }

  check.addEventListener("change", () => {
    localStorage.setItem("check" + index, check.checked);
  });
});

// ===== スクロールアニメーション =====

const fadeElements = document.querySelectorAll(
".card, .spot, .photo-card, .event"
);

fadeElements.forEach((el)=>{
    el.classList.add("fade-up");
});


const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});


fadeElements.forEach((el)=>{
    observer.observe(el);
});

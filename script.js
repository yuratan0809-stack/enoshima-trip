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

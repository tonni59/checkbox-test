const allPages = document.getElementById("allPages");
const pages = document.querySelectorAll(".page");

allPages.addEventListener("change", () => {
  pages.forEach(p => p.checked = allPages.checked);
});

pages.forEach(page => {
  page.addEventListener("change", () => {
    const allChecked = [...pages].every(p => p.checked);
    allPages.checked = allChecked;
  });
});

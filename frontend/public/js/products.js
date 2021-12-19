const categoryContainer = document.getElementById("category")

if (categoryContainer) {
  categoryContainer.addEventListener("click", async e => {
    const target = e.target.closest(".section__title")
    if (!target) return;
    const id = target.dataset.id;
    if (id) {
      target.classList.add("active")
    }
  })
}
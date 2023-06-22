const card = document.querySelector(".card");
const shareButton = document.querySelector(".card__user__share-button");
const socials = document.querySelector(".card__socials");

document.addEventListener("click", ({ target }) => {
  const isInSocialsDiv = target.closest(".card__socials");

  if (isInSocialsDiv) return;
  if (target === shareButton) {
    card.classList.toggle("socials-active");
  } else {
    card.classList.remove("socials-active");
  }
});

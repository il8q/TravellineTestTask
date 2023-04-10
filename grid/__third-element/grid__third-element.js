function clickThirdCardButton() {
  let discountBlock = document.querySelector(".grid__third-element > .room-card__discount-block");
  let reserveBlock = document.querySelector(".grid__third-element > .room-card__bottom-reserve-container");
  let gradient = document.querySelector(".grid__third-element > .room-card__reserve-block-background-gradient");
  if (discountBlock && reserveBlock && gradient) {
    discountBlock.style.display = "none";
    reserveBlock.style.display = "flex";
    gradient.style.display = "block";
  }
}

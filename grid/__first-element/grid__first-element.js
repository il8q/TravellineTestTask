function clickFirstCardButton() {
  let discountBlock = document.querySelector(".grid__first-element > .room-card__discount-block");
  console.log(discountBlock);
  if (discountBlock) {
    discountBlock.display = "none";
  }

  let bottomCardBlock = document.querySelector(".grid__first-element > .room-card__bottom-container > .room-card__bottom-block > .room-card__button-container > .room-card__reserve-button");
  console.log(bottomCardBlock);
  if (bottomCardBlock) {
    bottomCardBlock.display = "none";
  }
}

function clickFirstCardButton() {
  let gradient = document.querySelector(
    ".grid__first-element > .room-card__reserve-block-background-gradient"
  );
  let reserveBlockPaddingBlock = document.querySelector(
    ".grid__first-element > .room-card__bottom-container > .room-card__bottom-block > .room-card__bottom-reserve-container-padding"
  );
  let bottomBlock = document.querySelector(
    ".grid__first-element > .room-card__bottom-reserve-container"
  );
  console.log(gradient);
  console.log(reserveBlockPaddingBlock);
  console.log(bottomBlock);
  if (gradient && bottomBlock && reserveBlockPaddingBlock) {
    gradient.style.display = "block";
    bottomBlock.style.display = "flex";
    reserveBlockPaddingBlock.style.display = "block";
  }
}

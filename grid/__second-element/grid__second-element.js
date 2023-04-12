function reserveSecondRoom() {
  let discountBlock = document.querySelector(
    ".grid__second-element > .room-card__discount-block"
  );
  let gradient = document.querySelector(
    ".grid__second-element > .room-card__reserve-block-background-gradient"
  );
  let reserveBlockPaddingBlock = document.querySelector(
    ".grid__second-element > .room-card__bottom-container > .room-card__bottom-block > .room-card__bottom-reserve-container-padding"
  );
  let bottomBlock = document.querySelector(
    ".grid__second-element > .room-card__bottom-reserve-container"
  );
  console.log(discountBlock);
  console.log(gradient);
  console.log(bottomBlock);
  console.log(reserveBlockPaddingBlock);
  if (discountBlock && gradient && bottomBlock && reserveBlockPaddingBlock) {
    discountBlock.style.display = "none";
    gradient.style.display = "block";
    bottomBlock.style.display = "flex";
    reserveBlockPaddingBlock.style.display = "block";
  }
}

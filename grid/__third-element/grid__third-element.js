function clickThirdCardButton() {
  let reserveBlock = document.querySelector(
    ".grid__third-element > .room-card__bottom-reserve-container"
  );
  let gradient = document.querySelector(
    ".grid__third-element > .room-card__reserve-block-background-gradient"
  );
  if (reserveBlock && gradient) {
    reserveBlock.style.display = "flex";
    gradient.style.display = "block";
  }
}

let secondCardState = {
  "isReserved" : false,
  "isClickReserveButton" : false,
}

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
  if (discountBlock && gradient && bottomBlock && reserveBlockPaddingBlock) {
    discountBlock.style.display = "none";
    gradient.style.display = "block";
    bottomBlock.style.display = "flex";
    reserveBlockPaddingBlock.style.display = "block";
    secondCardState["isReserved"] = true;
  }
}

function deReserveSecondRoom() {
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
  if (gradient && bottomBlock && reserveBlockPaddingBlock) {
    discountBlock.style = undefined;
    gradient.style.display = "none";
    bottomBlock.style.display = "none";
    reserveBlockPaddingBlock.style.display = "none";
    secondCardState["isReserved"] = false;
    secondCardState["isClickReserveButton"] = false;
  }
}

function createSecondCardObserver() {
  secondCardState["isClickReserveButton"] = true;
  document.querySelector(".grid__second-element")
    .addEventListener("mouseleave", function() {
      if (!secondCardState["isReserved"] && secondCardState["isClickReserveButton"]) {
        reserveSecondRoom();
      }
    });
}

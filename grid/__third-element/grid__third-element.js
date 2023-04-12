let thirdCardState = {
  'isReserved' : false,
  'isClickReserveButton' : false,
}

function reserveThirdRoom() {
  let gradient = document.querySelector(
    ".grid__third-element > .room-card__reserve-block-background-gradient"
  );
  let reserveBlockPaddingBlock = document.querySelector(
    ".grid__third-element > .room-card__bottom-container > .room-card__bottom-block > .room-card__bottom-reserve-container-padding"
  );
  let bottomBlock = document.querySelector(
    ".grid__third-element > .room-card__bottom-reserve-container"
  );
  if (gradient && bottomBlock && reserveBlockPaddingBlock) {
    gradient.style.display = "block";
    bottomBlock.style.display = "flex";
    reserveBlockPaddingBlock.style.display = "block";
    thirdCardState['isReserved'] = true;
  }
}

function deReserveThirdRoom() {
  let gradient = document.querySelector(
    ".grid__third-element > .room-card__reserve-block-background-gradient"
  );
  let reserveBlockPaddingBlock = document.querySelector(
    ".grid__third-element > .room-card__bottom-container > .room-card__bottom-block > .room-card__bottom-reserve-container-padding"
  );
  let bottomBlock = document.querySelector(
    ".grid__third-element > .room-card__bottom-reserve-container"
  );
  if (gradient && bottomBlock && reserveBlockPaddingBlock) {
    gradient.style.display = "none";
    bottomBlock.style.display = "none";
    reserveBlockPaddingBlock.style.display = "none";
    thirdCardState['isReserved'] = false;
    thirdCardState['isClickReserveButton'] = false;
  }
}

function createThirdCardObserver() {
  thirdCardState['isClickReserveButton'] = true;
  document.querySelector(".grid__third-element")
    .addEventListener("mouseleave", function() {
      if (!thirdCardState['isReserved'] && thirdCardState['isClickReserveButton']) {
        reserveThirdRoom();
      }
    });
}

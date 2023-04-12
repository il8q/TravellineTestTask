let firstCardState = {
  'isReserved' : false,
  'isClickReserveButton' : false,
}

function reserveFirstRoom() {
  let gradient = document.querySelector(
    ".grid__first-element > .room-card__reserve-block-background-gradient"
  );
  let reserveBlockPaddingBlock = document.querySelector(
    ".grid__first-element > .room-card__bottom-container > .room-card__bottom-block > .room-card__bottom-reserve-container-padding"
  );
  let bottomBlock = document.querySelector(
    ".grid__first-element > .room-card__bottom-reserve-container"
  );
  if (gradient && bottomBlock && reserveBlockPaddingBlock) {
    gradient.style.display = "block";
    bottomBlock.style.display = "flex";
    reserveBlockPaddingBlock.style.display = "block";
    firstCardState['isReserved'] = true;
  }
}

function deReserveFirstRoom() {
  let gradient = document.querySelector(
    ".grid__first-element > .room-card__reserve-block-background-gradient"
  );
  let reserveBlockPaddingBlock = document.querySelector(
    ".grid__first-element > .room-card__bottom-container > .room-card__bottom-block > .room-card__bottom-reserve-container-padding"
  );
  let bottomBlock = document.querySelector(
    ".grid__first-element > .room-card__bottom-reserve-container"
  );
  if (gradient && bottomBlock && reserveBlockPaddingBlock) {
    gradient.style.display = "none";
    bottomBlock.style.display = "none";
    reserveBlockPaddingBlock.style.display = "none";
    firstCardState['isReserved'] = false;
    firstCardState['isClickReserveButton'] = false;
  }
}

function createObserver() {
  firstCardState['isClickReserveButton'] = true;
  document.querySelector(".grid__first-element")
    .addEventListener("mouseout", function() {
      if (!firstCardState['isReserved'] && firstCardState['isClickReserveButton']) {
        reserveFirstRoom();
      }
    });
}

let knightPosition = [0, 0];
let observer = null;

function emitChange() {
  observer(knightPosition);
}

export function MoveKnight(toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

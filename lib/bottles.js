import {capitalize, downTo} from './helpers';

function numberOfBottles(number) {
  if (number === 0) {
    return 'no more bottles of milk';
  }
  if (number === 1) {
    return `${number} bottle of milk`;
  }
  return `${number} bottles of milk`;
}

function minus(number) {
  if (number === 0) {
    return 99;
  }
  return number - 1;
}

function thirdPart(number) {
  if (number === 0) {
    return 'Go to the store and buy some more';
  }
  return `Take ${number === 1 ? 'it' : 'one'} down and pass it around`;
}

function joinAll(array, sep) {
  return array.join(sep) + sep;
}

export class Bottles {
  verse(number) {
    return joinAll([
      `${numberOfBottles(number)} on the wall, ${numberOfBottles(number)}`,
      `${thirdPart(number)}, ${numberOfBottles(minus(number))} on the wall`
    ].map(capitalize), '.\n');
  }

  verses(max, min) {
    return downTo(max, min).map((i) => this.verse(i)).join('\n');
  }

  song() {
    return this.verses(99, 0);
  }
}

function fuzzyMatch(source: string, target: string) {
  let pos: number = 0;
  let tokens: string[] = source.split('');

  target.replace(/\ /gi, '').split('').forEach(tgt => {
    if (tgt.toLowerCase() === tokens[pos]) {
      pos++;
    }
  });
  return pos;
}

function nearWord(words: string[], source: string) {
  let max: number = 1;
  let result: string = '';
  words.forEach(target => {
    let nmaxLettersMatch: number = fuzzyMatch(source, target);
    if (nmaxLettersMatch >= max) {
      max = nmaxLettersMatch;
      result = target;
    }
  });
  return result;
}
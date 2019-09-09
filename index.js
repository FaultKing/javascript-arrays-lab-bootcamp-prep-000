const app = "I don't do anything."

var restoreKittens(){
  return ["Milo", "Otis", "Garfield"]
};

function destructivelyAppendKitten(name){
  window.kittens = restoreKittens()
  window.kittens.push(name)
  return window.kittens
};

function destructivelyPrependKittens(name){
  window.kitten = restoreKittens()
  window.kittens.unshift(name)
  return window.kittens
};

function destrutevlyRemoveLastKitten(name){
  window.kitten = restoreKittens()
  window.kittens.pop(name)
  return window.kittens
};

function destructivelyRemoveFirstKitten(name){
  window.kitten = restoreKittens()
  window.kittens.shift(name)
  return window.kittens
};

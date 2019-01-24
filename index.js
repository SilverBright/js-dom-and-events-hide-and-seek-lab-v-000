function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}

function nestedTarget() {
  return document.querySelector( '#nested .target' )
}

function increaseRankBy(n) {
  const l = document.querySelectorAll('.ranked-list li')
    for (let i = 0; i < l.length; i++) {
    l[i].innerHTML = (parseInt(l[i].innerHTML) + n).toString()
  }
}

function deepestChild() {
  return document.querySelector( '#grand-node div div div div' )
}
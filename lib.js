let rootName = 'root'

function rootWrite(text) {
  document.getElementById(rootName).innerHTML += text
}

function rootClear() {
  document.getElementById(rootName).innerHTML = ''
}
const source = document.getElementById('source');
const result1 = document.getElementById('first');
const result2 = document.getElementById('second');
const result3 = document.getElementById('third');
const result4 = document.getElementById('fourth');

const inputHandler = function(e) {
  result1.innerHTML = e.target.value;
  result2.innerHTML = e.target.value;
  result3.innerHTML = e.target.value;
  result4.innerHTML = e.target.value;
}

source.addEventListener('input', inputHandler);
source.addEventListener('propertychange', inputHandler);
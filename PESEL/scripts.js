const calculate = () => {
  const distance = document.getElementById('input-dist').value;
  const consumption = document.getElementById('input-cons').value;
  const result = distance / 100 * consumption;
  document.getElementById('result').innerText = `Potrzebujesz ${result} litrów paliwa`;
}


document.getElementById('btn-calculate').addEventListener('click', calculate);


document.getElementById('close').addEventListener('click', () => {
  // document.getElementById('inner').style.display = 'none';

  const landing = document.getElementById('landing')
  landing.innerHTML = '😡'
  landing.style.paddingLeft = '50%'
  landing.style.paddingTop = '25%';
  landing.style.fontSize = "4em"
})
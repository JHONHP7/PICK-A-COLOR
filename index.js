const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green','Black']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
// No click
btn.addEventListener('click', () => {
    const randomColor = getRandomColor()
    document.body.style.backgroundColor = colors[randomColor] // aplicando cor ao background
    color.textContent = colors[randomColor]
})
// Gerar os numeros randomicos
function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}
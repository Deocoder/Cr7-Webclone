const cards = document.querySelectorAll(".card")

cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    cards.forEach((c) => {
      c.classList.remove("active")
      c.querySelector(".panel").style.display = "none" // Hide the panel
    })
    card.classList.add("active")
    card.querySelector(".panel").style.display = "block" // Show the panel for the active card
  })
})

// Mobile 
const isMobile = window.matchMedia("(max-width: 768px)").matches

// Only execute the code for mobile devices
if (isMobile) {
  cards.forEach((card) => {
    card.classList.add("active")
    card.querySelector(".panel").style.display = "block"
  })
}


let isDragging = false
let startX = 0
let startTranslateX = 0
let currentSlide = 0
let intervalId

sliderTrack.addEventListener("mousedown", startDrag)
document.addEventListener("mousemove", drag)
document.addEventListener("mouseup", stopDrag)

sliderTrack.addEventListener("touchstart", (e) => {
  startDrag(e.touches[0])
})
document.addEventListener("touchmove", (e) => {
  drag(e.touches[0])
})
document.addEventListener("touchend", stopDrag)

function startDrag(e) {
  isDragging = true
  startX = e.clientX
  startTranslateX = getTranslateX()
  sliderTrack.style.transition = "none" // Disable transition during dragging
  clearInterval(intervalId) // Stop automatic sliding
}

function drag(e) {
  if (!isDragging) return
  const currentX = e.clientX
  const dragDistance = currentX - startX
  const newTranslateX = startTranslateX + dragDistance
  sliderTrack.style.transform = `translateX(${newTranslateX}px)`
}

function stopDrag() {
  if (!isDragging) return
  isDragging = false
  sliderTrack.style.transition = "" // Re-enable transition
  startAutomaticSliding() // Restart automatic sliding
}

function getTranslateX() {
  const style = window.getComputedStyle(sliderTrack)
  const matrix = new WebKitCSSMatrix(style.transform)
  return matrix.m41
}

const totalWidth = sliderItems.length * 100
sliderTrack.style.width = `${totalWidth}%`

const videoPlayer = document.getElementById("videoPlayer")
const playBtn = document.getElementById("play-btn")

let isPlaying = false

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    playBtn.style.opacity = 1
    videoPlayer.style.opacity = 1
    videoPlayer.pause()
  } else {
    playBtn.style.opacity = 1
    videoPlayer.style.opacity = 1
    videoPlayer.play()
  }
  isPlaying = !isPlaying
})

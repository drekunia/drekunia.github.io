// Simple JavaScript for theme functionality

document.addEventListener("DOMContentLoaded", function () {
  // Add typing effect to redacted text (optional)
  const redactedElements = document.querySelectorAll(".redacted")
  redactedElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      this.style.animation = "flicker 0.1s infinite"
    })

    element.addEventListener("mouseleave", function () {
      this.style.animation = "flicker 3s infinite"
    })
  })

  // Simple fade-in animation for content
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  })

  // Add fade-in to elements
  const fadeElements = document.querySelectorAll(".bio, .intro")
  fadeElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  // Add loading state for images
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    if (img.complete) {
      img.style.opacity = "1"
    } else {
      img.style.opacity = "0"
      img.addEventListener("load", function () {
        this.style.transition = "opacity 0.3s ease"
        this.style.opacity = "1"
      })
    }
  })
})

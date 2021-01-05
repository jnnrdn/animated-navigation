const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const navItems = document.getElementById('nav-items').children
const navItemsArray = []

// Save each nav item in array
for (let i = 0; i < navItems.length; i++) {
  navItemsArray.push(navItems[i])
}

function navAnimation(direction1, direction2) {
  navItemsArray.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i}`,
      `slide-${direction2}-${i}`
    )
  })
}

function toggleNav() {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change')
  // Toggle: Menu Active
  overlay.classList.toggle('overlay-active')
  if (overlay.classList.contains('overlay-active')) {
    // Animate In - Overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
    // Animate In - Nav Items
    navAnimation('out', 'in')
  } else {
    // Animate Out - Overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
    // Animate Out - Nav Items
    navAnimation('in', 'out')
  }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav)
navItemsArray.forEach((nav) => {
  nav.addEventListener('click', toggleNav)
})

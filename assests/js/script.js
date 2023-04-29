let btn = document.querySelector("#btn");
let sideban = document.querySelector(".sideban");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function () {
    sideban.classList.toggle("active");
}
searchBtn.onclick = function () {
    sideban.classList.toggle("active");
}

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
})

const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]')
dataSpyList.forEach(dataSpyEl => {
    bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh()
})

document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
    el.addEventListener('shown.bs.tab', () => {
      const target = el.getAttribute('data-bs-target')
      const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`)
      bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()
    })
  })


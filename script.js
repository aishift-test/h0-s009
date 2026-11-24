// Breakthrough Author Live — small helpers

// 1. Mobile menu (the three lines at the top)
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Close the menu after tapping a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// 2. Sticky button: shows after the hero, hides at the bottom of the page
const sticky = document.getElementById('sticky');
const hero = document.querySelector('.hero');
const footer = document.querySelector('footer');

function updateSticky() {
  const pastHero = window.scrollY > hero.offsetHeight - 100;
  const atBottom = window.scrollY + window.innerHeight > document.body.offsetHeight - 60;
  sticky.classList.toggle('show', pastHero && !atBottom);
}
window.addEventListener('scroll', updateSticky, { passive: true });
window.addEventListener('resize', updateSticky);
updateSticky();

// 3. Video box.
//    Want your own video? Put its YouTube id in data-video below.
//    Example: data-video="dQw4w9WgXcQ"
const videoBox = document.getElementById('videoBox');
const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', () => {
  const id = videoBox.dataset.video;
  if (id) {
    videoBox.innerHTML =
      '<iframe src="https://www.youtube.com/embed/' + id + '?autoplay=1&mute=1&rel=0" ' +
      'title="Free training" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
  } else {
    const note = videoBox.querySelector('.video-note');
    note.textContent = 'Video coming soon — add a YouTube id in index.html';
  }
});

// 4. FAQ: only one question open at a time
const faqItems = document.querySelectorAll('.faq details');
faqItems.forEach(item => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    faqItems.forEach(other => {
      if (other !== item) other.open = false;
    });
  });
});

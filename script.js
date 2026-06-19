/* =========================================================
   PACE Website Scripts
   Handles: mobile nav, config rendering, footer versioning
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  renderConfigContent();
  renderCourses();
  renderNews();
  renderFooterMeta();
});

function initMobileNav() {
  const navToggle = document.getElementById("navToggle");
  const siteNav = document.getElementById("siteNav");

  if (!navToggle || !siteNav) return;

  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("show");
  });
}

function renderConfigContent() {
  if (typeof PACE_CONFIG === "undefined") return;

  const heroEyebrow = document.querySelector('[data-config="heroEyebrow"]');
  const heroTitle = document.querySelector('[data-config="heroTitle"]');
  const heroSubtitle = document.querySelector('[data-config="heroSubtitle"]');

  if (heroEyebrow) heroEyebrow.textContent = PACE_CONFIG.hero.eyebrow;
  if (heroTitle) heroTitle.textContent = PACE_CONFIG.hero.title;
  if (heroSubtitle) heroSubtitle.textContent = PACE_CONFIG.hero.subtitle;
}

function renderCourses() {
  const grid = document.getElementById("coursesGrid");
  if (!grid || typeof PACE_CONFIG === "undefined") return;

  grid.innerHTML = PACE_CONFIG.courses.map(course => `
    <article class="course-card">
      <div class="course-icon">${escapeHTML(course.icon)}</div>
      <h3>${escapeHTML(course.title)}</h3>
      <p>${escapeHTML(course.description)}</p>
      <div class="card-meta">${escapeHTML(course.meta)}</div>
    </article>
  `).join("");
}

function renderNews() {
  const grid = document.getElementById("newsGrid");
  if (!grid || typeof PACE_CONFIG === "undefined") return;

  grid.innerHTML = PACE_CONFIG.news.map(item => `
    <article class="news-card">
      <div class="card-meta">${escapeHTML(item.date)}</div>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.description)}</p>
    </article>
  `).join("");
}

function renderFooterMeta() {
  if (typeof PACE_CONFIG === "undefined") return;

  const versionTargets = document.querySelectorAll("#siteVersion");
  const updateTargets = document.querySelectorAll("#lastUpdate");

  versionTargets.forEach(target => {
    target.textContent = PACE_CONFIG.version;
  });

  updateTargets.forEach(target => {
    target.textContent = PACE_CONFIG.lastUpdate;
  });
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

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

  grid.innerHTML = PACE_CONFIG.courses.map(course => {
    const url = course.url || "#";
    const image = course.image || "course-preview-cit.png";

    return `
      <a class="course-card" href="${escapeHTML(url)}">
        <div class="course-image" style="background-image: url('${escapeHTML(image)}');"></div>
        <div class="course-content">
          <div class="course-meta">
            <span>${escapeHTML(course.category || "PACE Program")}</span>
          </div>
          <h3>${escapeHTML(course.title)}</h3>
          <p>${escapeHTML(course.description)}</p>
          <div class="card-meta">${escapeHTML(course.meta || "View course details")}</div>
        </div>
      </a>
    `;
  }).join("");
}

async function renderNews() {
  const grid = document.getElementById("newsGrid");
  if (!grid || typeof PACE_CONFIG === "undefined") return;

  let newsItems = PACE_CONFIG.previewNews || [];

  if (
    PACE_CONFIG.newsSheetApi &&
    PACE_CONFIG.newsSheetApi.enabled &&
    PACE_CONFIG.newsSheetApi.webAppUrl
  ) {
    try {
      const response = await fetch(PACE_CONFIG.newsSheetApi.webAppUrl + "?action=news");
      const result = await response.json();

      if (result.success && Array.isArray(result.news) && result.news.length) {
        newsItems = result.news;
      }
    } catch (error) {
      console.warn("PACE news fallback used:", error);
    }
  }

  grid.innerHTML = newsItems.map(item => {
    const image = item.image || "news-preview-1.svg";
    const url = item.url || "#";

    return `
      <a class="news-card" href="${escapeHTML(url)}">
        <div class="news-image" style="background-image: url('${escapeHTML(image)}');"></div>
        <div class="news-content">
          <div class="news-meta">
            <span>${escapeHTML(item.category || "PACE News")}</span>
            <span>${escapeHTML(item.date || "")}</span>
          </div>
          <h3>${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.excerpt || item.description || "")}</p>
          <div class="card-meta">Read update</div>
        </div>
      </a>
    `;
  }).join("");
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

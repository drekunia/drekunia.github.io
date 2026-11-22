const languageSwitcher = document.querySelector(".language-switcher");
const languageSelect = languageSwitcher.querySelector("select");
const languageOptions = Array.from(languageSelect.options);
const optionsByLanguage = new Map(languageOptions.map((option) => [option.value.toLowerCase(), option]));
const defaultOption = languageOptions.find((option) => option.defaultSelected);
const pageLanguage = languageSelect.dataset.pageLanguage;
const translatedContent = document.querySelectorAll("[data-language-copy]");
const copyrightName = document.querySelector(".footer strong");
const languageStorageKey = "site-language";
const localizedMetaTags = [
  ["name", "description", "description"],
  ["property", "og:description", "description"],
  ["name", "twitter:description", "description"],
  ["property", "og:locale", "ogLocale"],
  ["property", "og:title", "pageTitle"],
  ["property", "og:site_name", "siteTitle"],
  ["name", "twitter:title", "pageTitle"],
  ["name", "author", "authorName"],
];

function updateMetaTag(attribute, value, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${value}"]`);
  if (!content) {
    tag?.remove();
    return;
  }

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, value);
    document.head.append(tag);
  }

  tag.content = content;
}

function setLanguage(option) {
  const language = option.value;
  languageSelect.value = language;
  languageSelect.setAttribute("aria-label", option.dataset.switcherLabel);
  document.title = option.dataset.pageTitle;
  for (const [attribute, value, key] of localizedMetaTags) {
    updateMetaTag(attribute, value, option.dataset[key]);
  }
  if (copyrightName) copyrightName.textContent = option.dataset.copyrightName;

  if (document.documentElement.hasAttribute("data-localize-page")) {
    document.documentElement.lang = language;
  }

  for (const item of translatedContent) {
    const itemLanguage = item.dataset.languageCopy || item.lang;
    item.hidden = itemLanguage !== language;
  }
}

function findExactLanguageOption(tag) {
  const option = optionsByLanguage.get(tag);
  if (option) return option;
  if (tag === "en-gb") return optionsByLanguage.get("en-uk");
  if (tag === "en-uk") return optionsByLanguage.get("en-gb");
}

function findBrowserLanguageOption() {
  const preferences = navigator.languages?.length ? navigator.languages : [navigator.language];

  for (const preference of preferences) {
    if (!preference) continue;

    const subtags = preference.toLowerCase().split("-");
    const primary = subtags[0];

    while (subtags.length) {
      const option = findExactLanguageOption(subtags.join("-"));
      if (option) return option;
      subtags.pop();
    }

    const regionalOption = languageOptions.find((option) => option.value.toLowerCase().startsWith(primary + "-"));
    if (regionalOption) return regionalOption;
  }
}

function restoreLanguage() {
  if (pageLanguage && defaultOption) {
    setLanguage(defaultOption);
    return;
  }

  let savedLanguage;
  try {
    savedLanguage = localStorage.getItem(languageStorageKey);
  } catch {
    // Storage may be blocked.
  }

  const savedOption = findExactLanguageOption(savedLanguage?.toLowerCase());
  const option = savedOption ?? findBrowserLanguageOption() ?? defaultOption;
  if (option) setLanguage(option);
}

restoreLanguage();
window.addEventListener("pageshow", (event) => {
  if (event.persisted) restoreLanguage();
});

languageSelect.addEventListener("change", () => {
  const option = languageSelect.selectedOptions[0];
  if (!option) return;

  try {
    localStorage.setItem(languageStorageKey, option.value);
  } catch {
    // Visitors can still switch languages.
  }

  const target = option.dataset.url;
  if (target && target !== window.location.pathname) {
    window.location.assign(target);
    return;
  }
  setLanguage(option);
});

languageSwitcher.hidden = false;

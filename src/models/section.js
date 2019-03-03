export const getSectionText = (section) =>
  sectionsText[getSectionTitle(section)];

export const getAllSections = () => Object.keys(sections);

export const getSectionTitle = (section) => sections[section];

const sections = {
}

const sectionsText = {
}

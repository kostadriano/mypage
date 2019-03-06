export const getSectionText = (section) =>
  sectionsText[getSectionTitle(section)];

export const getAllSections = () => Object.keys(sections);

export const getSectionTitle = (section) => sections[section];

const sections = {
  whoIam: 'Who I am',
  whatIDo: 'What I do',
  howToFindMe: 'How to find me'
}

const sectionsText = {
  [sections.whoIam]: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at mattis elit. Nunc et commodo elit. Mauris faucibus est velit, at pharetra mi consequat sit amet. Integer vel posuere dui. Maecenas fermentum suscipit ante, eu porttitor ante elementum sed. Praesent eu urna accumsan, maximus orci vitae, maximus erat. Aliquam ac mollis tortor. Suspendisse potenti. Nullam faucibus venenatis erat et pellentesque.',
  [sections.whatIDo]: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at mattis elit. Nunc et commodo elit. Mauris faucibus est velit, at pharetra mi consequat sit amet. Integer vel posuere dui. Maecenas fermentum suscipit ante, eu porttitor ante elementum sed. Praesent eu urna accumsan, maximus orci vitae, maximus erat. Aliquam ac mollis tortor. Suspendisse potenti. Nullam faucibus venenatis erat et pellentesque.',
  [sections.howToFindMe]: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at mattis elit. Nunc et commodo elit. Mauris faucibus est velit, at pharetra mi consequat sit amet. Integer vel posuere dui. Maecenas fermentum suscipit ante, eu porttitor ante elementum sed. Praesent eu urna accumsan, maximus orci vitae, maximus erat. Aliquam ac mollis tortor. Suspendisse potenti. Nullam faucibus venenatis erat et pellentesque.'
}

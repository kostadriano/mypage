export const getSectionText = (section) =>
  sectionsText[getSectionTitle(section)];

export const getAllSections = () => Object.keys(sections);

export const getSectionTitle = (section) => sections[section];

const sections = {
  whoIam: 'Who I am',
  whatIDo: 'What I do',
}

const sectionsText = {
  // [sections.whatIDo]: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla auctor sodales. Duis eget enim ex. Phasellus gravida molestie purus, vitae molestie ex posuere non. Integer interdum ex non tortor tincidunt, et rutrum mi blandit. Nullam non lectus sollicitudin, pellentesque metus ac, dapibus metus. Proin tempus suscipit blandit. Ut et facilisis nibh. Suspendisse potenti. Nulla pellentesque lorem massa. Vestibulum convallis, erat vel convallis bibendum, leo ex venenatis velit, in facilisis sapien sem id eros. Donec sed eros eget nisi viverra congue. Phasellus pellentesque arcu eget aliquet vehicula. In hac habitasse platea dictumst.'
}

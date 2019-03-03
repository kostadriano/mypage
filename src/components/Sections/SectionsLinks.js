import React from 'react';

const SectionsLinks = ({ onFollow, sections, getSectionTitle }) =>
  <div>
    {
      sections.map(section =>
        <SectionLink
          onFollow={() => onFollow(section)}
          section={getSectionTitle(section)}
          key={section}
        />
      )
    }
  </div>

const SectionLink = ({ onFollow, section }) =>
  <span onClick={onFollow}>
    {section}
  </span>

export default SectionsLinks;

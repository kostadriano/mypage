import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import NavbarIcons from '../Navbar/NavbarIcons';
import Content from '../Content';
import Sections from '../Sections';
import * as Section from '../../models/section';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleFollowToSection = this.handleFollowToSection.bind(this);
  }

  handleFollowToSection(section) {
    this.refs[section].scrollIntoView();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <NavbarIcons />
        </Navbar>

        <Content>
          <Sections.Links
            onFollow={this.handleFollowToSection}
            sections={Section.getAllSections()}
            getSectionTitle={Section.getSectionTitle}
          />
          <Sections.List >
            {
              Section.getAllSections().map(section =>
                <Sections.Section key={section}>
                  <div ref={section}>
                    {Section.getSectionText(section)}
                  </div>
                </Sections.Section>
              )
            }
          </Sections.List>
        </Content>
      </div>
    );
  }
};

export default App;

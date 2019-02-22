import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import NavbarIcons from '../Navbar/NavbarIcons';
import Content from '../Content';
import Face from '../Face';
import Sections from '../Sections';
import * as Section from '../../models/section';
import './App.css';

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
      <div className="App"  >
        <Navbar>
          <NavbarIcons />
        </Navbar>

        <Content>
          <Sections.Links
            onFollow={this.handleFollowToSection}
            sections={Section.getAllSections()}
            getSectionTitle={Section.getSectionTitle}
          />

          <Face />

          <Sections.List>
            {
              Section.getAllSections().map(section =>
                <div ref={section} key={section}>
                  <Sections.Section
                    title={Section.getSectionTitle(section)}
                  >
                    {Section.getSectionText(section)}
                  </Sections.Section>
                </div>
              )
            }
          </Sections.List>
        </Content>
      </div>
    );
  }
};

export default App;

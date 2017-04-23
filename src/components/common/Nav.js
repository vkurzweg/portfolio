import React from "react";
import AppBar from 'material-ui/AppBar';
import { Menu, Icon } from 'antd';


const SubMenu = Menu.SubMenu;

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
      current: '1',
      showMenu: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  toggleMenu() {
    this.setState((prevState) => {
      return { showMenu: !prevState.showMenu };
    }).bind(this)
  }

  // render
  render() {
    let display = 'none';
    (this.state.showMenu) ? display = 'block' : display = 'none';
    const github = <a href="https://github.com/vkurzweg" target="blank" ><Icon type="github" style={{ color: 'white', fontSize: '20px'}} /></a>
    return (
      <div style={{ position: 'fixed', width: '100%', zIndex: '10' }}>
        <AppBar
            title="VK / LA"
            style={{ width: '100%', backgroundColor: '#212121' }}
            onLeftIconButtonTouchTap={this.toggleMenu}
            iconElementRight={github}
            iconStyleRight={{ marginTop: '2%', marginRight: '1.5%'}}
            onRightIconButtonTouchTap={this.handleGitTap}
          />
        <div style={{ display }}>
          <Menu
              theme={this.state.theme}
              onClick={this.handleClick}
              style={{ position: 'fixed', width: 240, backgroundColor: '#212121' }}
              selectedKeys={[this.state.current]}
              mode="inline"
            >
            <SubMenu key="sub1" title={<span><Icon type="code-o" /><span>Work</span></span>}>
              <Menu.Item key="1">Development & Design</Menu.Item>
              <Menu.Item key="2">Content Creation & Marketing</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="info" /><span>About</span></span>}>
              <Menu.Item key="5">Bio</Menu.Item>
              <Menu.Item key="6">Resume</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="github" /><span>Social</span></span>}>
              <Menu.Item key="9">Github</Menu.Item>
              <Menu.Item key="10">LinkedIn</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    );
  }
}

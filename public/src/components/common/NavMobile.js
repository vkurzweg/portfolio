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
    const github = <div style={{ display: 'inline-flex', marginTop: '6%' }}>
                      <a href="https://www.linkedin.com/in/victoriakurzweg/" target="blank"><img src="/media/linkedin.png" style={{ width: '20px', paddingRight: '10%' }} /></a>
                      <a href="https://github.com/vkurzweg" target="blank" ><Icon type="github" style={{ color: 'white', fontSize: '20px', paddingLeft: '30%'}} /></a>
                    </div>
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
            <SubMenu key="sub1" title={<span><Icon type="info" /><span>About</span></span>}>
              <Menu.Item key="1">Bio</Menu.Item>
              <Menu.Item key="2">Resume</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="mail" /><span>Contact</span></span>}>
              <Menu.Item key="3">Info</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    );
  }
}

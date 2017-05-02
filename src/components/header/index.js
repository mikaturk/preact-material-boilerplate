import { h, Component } from 'preact';
import { route } from 'preact-router';
import Toolbar from 'preact-material-components/Toolbar';
import Drawer from 'preact-material-components/Drawer';
import style from './style.less';

export default class Header extends Component {
	closeDrawer() {
		this.drawer.MDComponent.open = false;
	}
	render() {
		return (
			<header class={style.header}>
				<Toolbar className="toolbar">
					<Toolbar.Row>
						<Toolbar.Section align-start={true}>
							<Toolbar.Icon onClick={()=>{
									this.drawer.MDComponent.open = true;
								}}>menu</Toolbar.Icon>
							<Toolbar.Title>
								Preact App
							</Toolbar.Title>
						</Toolbar.Section>
					</Toolbar.Row>
				</Toolbar>
				<Drawer.TemporaryDrawer ref={drawer=>{this.drawer = drawer;}} >
					<Drawer.TemporaryDrawerHeader className="mdc-theme--primary-bg">
						Navigation
					</Drawer.TemporaryDrawerHeader>
					<Drawer.TemporaryDrawerContent>
						<Drawer.DrawerItem onClick={()=>{
							this.closeDrawer();
							route("/");
						}}>
							<span href="/">
								Home
							</span>
						</Drawer.DrawerItem>
						<Drawer.DrawerItem onClick={()=>{
							this.closeDrawer();
							route("/profile");
						}}>
							<span>Me</span>
						</Drawer.DrawerItem>
						<Drawer.DrawerItem onClick={()=>{
							this.closeDrawer();
							route("/profile/john");
						}}>
							<span>John</span>
						</Drawer.DrawerItem>
					</Drawer.TemporaryDrawerContent>
				</Drawer.TemporaryDrawer>
			</header>
		);
	}
}

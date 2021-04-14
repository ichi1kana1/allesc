import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Schedule } from './pages/schedule';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { Box, Drawer, Hidden, IconButton, List, ListItem, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const theme = createMuiTheme();

function ButtonAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/schedule">スケジュール</Button>
        {/* <Button color="inherit" component={Link} to="/result">検索結果</Button>
        <Button color="inherit" component={Link} to="/mylist">MYリスト</Button>
        <Button color="inherit" component={Link} to="/detail">詳細ページ</Button>
        <Button color="inherit" component={Link} to="/inquire">問い合わせ</Button>
        <Button color="inherit" component={Link} to="/parts">共通部品</Button>
        <Button color="inherit" component={Link} to="/searchFilter">検索フィルタ部品</Button> */}
      </Toolbar>
    </AppBar>
  );
}

function ButtonAppDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')){
      return;
    }
    setOpen(open);
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Box flexGrow={1}></Box>
        <IconButton onClick={toggleDrawer(true)} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Box 
            width="100vw" 
            color="primary.contrastText" 
            bgcolor="primary.main" 
            flexGrow={1} 
            onClick={toggleDrawer(false)} 
            onKeyDown={toggleDrawer(false)}>
            <Box justifyContent="flex-end">
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
            <List>
              <ListItem button component={Link} to="/schedule">スケジュール</ListItem>
              {/* <ListItem button component={Link} to="/result">検索結果</ListItem>
              <ListItem button component={Link} to="/mylist">MYリスト</ListItem>
              <ListItem button component={Link} to="/detail">詳細ページ</ListItem>
              <ListItem button component={Link} to="/inquire">問い合わせ</ListItem>
              <ListItem button component={Link} to="/parts">共通部品</ListItem>
              <ListItem button component={Link} to="/searchFilter">検索フィルタ部品</ListItem> */}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hidden xsDown>
        <ButtonAppBar />
      </Hidden>
      <Hidden smUp>
        <ButtonAppDrawer />
      </Hidden>
      <Switch>
        <Route path="/schedule" component={Schedule} />
        {/* <Route path="/result" component={ResultForm} />
        <Route path="/mylist" component={MyListForm} />
        <Route path="/detail" component={DetailForm} />
        <Route path="/inquire" component={InquireForm} />
        <Route path="/parts" component={Parts} />
        <Route path="/searchFilter" component={SearchFilter} /> */}
      </Switch>
    </ThemeProvider>
  </Router>,
  document.getElementById("app")
);

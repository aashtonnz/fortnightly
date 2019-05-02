import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import * as serviceWorker from './service-worker';
import Layout from './layout';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>

    </Layout>
  </ThemeProvider>,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

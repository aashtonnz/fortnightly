import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';

import * as serviceWorker from './service-worker';
import Layout from './layout';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const content = 'Consectetur ea culpa eu tempor et veniam est adipisicing. Enim nulla sunt nisi elit. Dolor pariatur labore adipisicing irure fugiat minim officia et amet. Ex reprehenderit quis Lorem laborum cillum voluptate elit consectetur. Sit tempor fugiat velit id sint sint voluptate nulla pariatur eiusmod. Lorem quis nostrud Lorem nisi cillum. Excepteur labore veniam nisi minim mollit tempor aute voluptate adipisicing excepteur. Nulla laboris minim anim ea irure do veniam occaecat irure amet ullamco. Officia laboris velit Lorem incididunt nulla nulla cupidatat irure.';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        {content}
      </Layout>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

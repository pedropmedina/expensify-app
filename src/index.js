import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import AppRouter from './routers/AppRouter';

if (module.hot) {
	module.hot.accept(AppRouter);
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));

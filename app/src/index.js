import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SearchParamProvider } from './stores/SearchParam';
import { CartContextProvider } from './stores/cart-context';

ReactDOM.render(
    <React.StrictMode>
    	<CartContextProvider>
    		<SearchParamProvider>
    			<App />
  			</SearchParamProvider>
  		</CartContextProvider>
  	</React.StrictMode>,
  	document.getElementById('root')
);
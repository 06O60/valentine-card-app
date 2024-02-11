import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import messages from './assets/messages/messages.json';
import messagesTypes from './assets/messages/types.json';

//TO DO: change the method of getting messages and messages types, so that it is not preloaded.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App
			messages={JSON.parse(messages)}
			messagesTypes={JSON.parse(messagesTypes)}
		/>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

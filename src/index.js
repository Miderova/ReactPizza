import React from 'react';
import ReactDOM from 'react-dom/client'; // чтобы логику реакта переобразовать в html
import App from './App';
import { BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,);
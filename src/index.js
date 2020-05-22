import React from 'react'
import ReactDOM from 'react-dom'

import {App} from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

const container = document.getElementById('app')

function render(){
    ReactDOM.render(<App/>, container)
}

render()

if(module.hot){
    module.hot.accept('./App', () => {
        render()
    })
}
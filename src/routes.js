import React from 'react'
import {
    Switch,
    Route,
  } from "react-router-dom";
  import QRScan from "./components/qRScan";
  import Menu from "./components/menu";
  import Order from "./components/order";
  import CallWaiter from "./components/callWaiter";

function Routes() {
    return (
            <Switch>
                <Route exact path='/' component={QRScan}/>
                <Route path='/menu' component={Menu}/>
                <Route path='/order' component={Order}/>
                <Route path='/waiter' component={CallWaiter}/>
            </Switch>
    )
}

export default Routes

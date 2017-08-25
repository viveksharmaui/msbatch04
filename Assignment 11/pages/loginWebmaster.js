import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
export default class extends React.Component{
    render(){
        return(
          <main>
          <Head/>
          <div id='indexlogin'>
          <h1 className='text text-success'>Login As Webmaster</h1>
              <form method='post' action='/loginWebmaster'>
              <div className="input-group">
<span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
<input id="email" type="text" className="form-control" name="username" placeholder="Username"/>
</div>
<div className="input-group">
<span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
<input id="password" type="password" className="form-control" name="password" placeholder="Password"/>
</div>
<div id='space'></div>
                  <button type='submit' className='btn btn-success btn-block'>Login</button>
              </form>
          </div>
          </main>
        )
    }
}

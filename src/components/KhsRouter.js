import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Intro from './intro/Intro';
import MBTI from './MBTI/MBTIMain';
import NotFoundPage from './common/NotFoundPage';
import Begin from './intro/Begin';
import Main from './main/Main';
import Aptitude from './project/apitiude/AptitudeMain';

export default function KhsRouter() {
  return (
    <>
      <HashRouter basename="/khs/#">
        <Switch>
          <Route path="/" exact={true} component={Intro} />
          <Route path="/begin" component={Begin} />
          <Route path="/mbti" component={MBTI} />
          <Route path="/main" component={Main} />
          <Route path="/aptitude" component={Aptitude} />
          
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </HashRouter>
    </>
  )
}
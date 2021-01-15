import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import SkillsScreen from './screens/SkillsScreen';
import MyWorkScreen from './screens/MyWorkScreen';
import ContactScreen from './screens/ContactScreen';

import NavigationBar from './components/NavigationBar';


function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Switch>
        <Route path="/" exact={true} component={HomeScreen} />
        <Route path="/about" component = {AboutScreen}/>
        <Route path="/skills" component = {SkillsScreen}/>
        <Route path="/mywork" component = {MyWorkScreen}/>
        <Route path="/contact" component = {ContactScreen}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

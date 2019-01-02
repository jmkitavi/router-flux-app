import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import ScarletScreen from './screens/ScarletScreen';
import GrayScreen from './screens/GrayScreen';
import GoldScreen from './screens/GoldScreen';
import BlackScreen from './screens/BlackScreen';
import BlueScreen from './screens/BlueScreen';
import GreenScreen from './screens/GreenScreen';
import Modal from './screens/ModalScreen';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' :'black' }}>{ title }</Text>
  );
}

const App = () => {
  return (
    <Router>
      <Scene key="root">

        {/* Tabs */}
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        >
          <Scene key="SG" title="ScarletGray" icon={TabIcon}>
            <Scene 
              key="scarlet"
              component={ScarletScreen}
              title="Scarlet"
            />
            <Scene
              key="gray"
              component={GrayScreen}
              title="Gray"
            />
          </Scene>
          <Scene key="BG" title="BlueGreen" icon={TabIcon}>
            <Scene 
              key="blue"
              component={BlueScreen}
              title="Blue"
            />
            <Scene
              key="green"
              component={GreenScreen}
              title="Green"
            />
          </Scene>
          <Scene key="GB" title="GoldBlack" icon={TabIcon}>
            <Scene
              key="gold"
              component={GoldScreen}
              title="Gold"
            />
            <Scene 
              key="black"
              component={BlackScreen}
              title="Black"
            />
          </Scene>
        </Scene>

      {/* Modal  */}
      <Scene
        key="modal"
        component={Modal}
        title="Modal"
        direction="vertical"
        hideNavBar
      />
      </Scene>
    </Router>
  );
}

export default App;
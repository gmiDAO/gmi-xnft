import { Text, FlatList, Button, View } from "react-native";
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import tw from "twrnc";

import { Screen } from "../components/Screen";

import { useEffect, useState } from "react";

import Comments from "../../src/components/Comments";


// TODO: Set currentUserId with wallet
// TODO: get comment url from backend service

const Proposed = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }}>

      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
  </View>
);

const Upcoming = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const Past = () => (
  <View style={{ flex: 1, backgroundColor: '#6efdfd' }} />
);


const renderScene = SceneMap({
  first: Proposed,
  second: Upcoming,
  third: Past
});




export function EventsScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Proposed' },
    { key: 'second', title: 'Upcoming' },
    { key: 'third', title: 'Past' },
  ]);

  const [activeButton, setActiveButton] = useState(0);


  const handleButtonClick = (buttonIndex: number) => {
    setActiveButton(buttonIndex);
};

  console.log("activebutton "+activeButton)

  const listProposedEvents = []
  listProposedEvents.push({
    "propid":1,
    "title":"the Queen's Gambit",
    "game": "Chess",
  })
  listProposedEvents.push({
    "propid":2,
    "title":"Tower Defense",
    "game": "Clash Royale",
  })



  return (
      <Screen>
       

        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
         />

               
       
      </Screen>

  );
}

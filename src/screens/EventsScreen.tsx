import { Text, FlatList, Button, View } from "react-native";
import tw from "twrnc";

import { Screen } from "../components/Screen";

import { useEffect, useState } from "react";

const eventListings = ["Proposed","Upcoming","Past"];

export function EventsScreen() {


  const [activeButton, setActiveButton] = useState(0);


  const handleButtonClick = (buttonIndex: number) => {
    setActiveButton(buttonIndex);
};

  return (
      <Screen>
         <View style={{ flexDirection: "row", alignItems: "center" }}>

         {
        
            eventListings.map((tab, index) => (             
              <Button title={tab} onPress={() => handleButtonClick(index)} />))
      
          
          }



               
        </View>
      </Screen>

  );
}

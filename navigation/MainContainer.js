import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Home from './screens/HomeScreen';
import AddLead from './screens/LeadScreens/AddLead';
import ListOfLeads from './screens/LeadScreens/ListOfLeads';
import LeadOverview from './screens/LeadScreens/LeadOverview';

//Screen names
const homeName = "Home";
const addLeadName = "AddLead";
const leadListName = "LeadList";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const navOptionHandler = () =>  ({
    headerShown:false
})

function LeadListStack() {
    return(
          <Stack.Navigator 
          initialRouteName ="List Of Leads"
          
          >
           
            <Stack.Screen name="Home" component={Home} options={navOptionHandler}/>
            <Stack.Screen name="Add Lead" component={AddLead} options={navOptionHandler}/>
            <Stack.Screen name="List Of Leads" component={ListOfLeads} options={navOptionHandler}/>
            
            <Stack.Screen name="Lead Overview" component={LeadOverview} options={navOptionHandler}/>
          
       
          </Stack.Navigator>
    )
}

// ..
function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === addLeadName) {
              iconName = focused ? 'add' : 'add-outline';

            } else if (rn === leadListName) {
              iconName = focused ? 'list' : 'list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
       >

        <Tab.Screen name={homeName} component={Home} options={navOptionHandler}/>
        <Tab.Screen name={addLeadName} component={AddLead} options={navOptionHandler}/>
        <Tab.Screen name={leadListName} component={LeadListStack} options={navOptionHandler}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
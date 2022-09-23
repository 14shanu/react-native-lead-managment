import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";
import { Button, Text, Icon } from "@rneui/base";
import Header from "../../../components/utils/Header";
import { SearchBar } from "@rneui/themed";
import { oauth, net } from "react-native-force";
import CustomHeader from "../../../components/utils/CustomHeader";

const ListOfLeads = ({ navigation }) => {
    const [search, setSearch] = useState("");
    const [leadData, setLeadData] = useState([]);

  useEffect(() => {
    oauth.getAuthCredentials(
      () => fetchData(),
      () => {
        oauth.authenticate(
          () => fetchData(),
          (error) => console.log("Failed to authenticate:" + error)
        );
      }
    );
  }, []);

  const fetchData = () => {
    net.query(
      "SELECT Id, Name,FirstName,LastName, Title, Status,City,Country,Email,IsConverted FROM Lead LIMIT 100",
      (response) => setLeadData(response.records)
    );
  };
// --------------------------------------------------------
console.log(leadData);
  const updateSearch = (search) => {
    setSearch(search);
  };

  // --------------------------------
  const keyExtractor = (item) => item.Id;

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>navigation.navigate("Lead Overview",{LeadData:item})}>
      <ListItem bottomDivider>
        <Avatar
          size={50}
          rounded
          title={item.Name[0]}
          containerStyle={{ backgroundColor: "orange" }}
        />

        <ListItem.Content>
          <ListItem.Title>{item.Title}</ListItem.Title>
          <ListItem.Subtitle>{item.Name}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );

  return (
    <View>
        <CustomHeader title="List Of Leads"/>

      {/* <View style={styles.searchBar}>
        <SearchBar
          placeholder="Search.."
          onChangeText={updateSearch}
          value={search}
        />
      </View> */}

      <View style={styles.listItemsContainer}>
        <FlatList
          keyExtractor={keyExtractor}
          data={leadData}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemsContainer: {
    // marginTop: 15,
  },

  searchBar: {
    // marginTop: 1,
  },
  homeBtn: {
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 10,
  },
});

export default ListOfLeads;

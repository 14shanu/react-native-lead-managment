import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
// import Header from './Header'
import { Button, Icon } from "@rneui/themed";
import { SafeAreaView } from "react-native";
import { Dimensions } from "react-native";
import { Input } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";
import { CheckBox } from "@rneui/themed";
import Header from "../../../components/utils/Header";
import { net } from "react-native-force";
import Toast from "react-native-toast-message";
import CustomHeader from "../../../components/utils/CustomHeader";

const win = Dimensions.get("window");
const AddLead = ({ navigation }) => {

  const [isChecked, setChecked] = useState(false);

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      FirstName: "",
      LastName:"",
      Email: "",
      MobilePhone: "",
      IsConverted: false,
      City:"",
      Company:"",
      Country:"",
    },
  });
// -----------------------------onSubmit--------------------------------
  const onSubmit = async (data) => {
    console.log(data);
    net.sendRequest('/services/data', '/v54.0/sobjects/Lead/' , 
    (response) => {
      console.log(response)
      // Toast.show({
      //         type: 'success',
      //         text1: 'Success Information',
      //         text2: 'Lead has been added successfully'
      //       })
    
    },
    (error) => {
        console.log('Failed to Add Lead Data:' + error);
    }, 
    'POST', 
    { ...data}, 
    // {'X-Connect-Bearer-Urls': 'true'},
    // {fileUpload: {fileUrl:localPhotoUrl, fileMimeType:'image/jpeg', fileName:'pic.jpg'}}
);
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <CustomHeader title="Lead Info."/>


        <View style={styles.formContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="First Name"
              />
            )}
            name="FirstName"
          />
          {errors.FirstName && (
            <Text style={styles.errorMessage}>This is required.</Text>
          )}



          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Last Name"
              />
            )}
            name="LastName"
          />
          {errors.LastName && (
            <Text style={styles.errorMessage}>This is required.</Text>
          )}

<Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Company"
              />
            )}
            name="Company"
          />
          {errors.Company && (
            <Text style={styles.errorMessage}>This is required.</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Email"
              />
            )}
            name="Email"
          />
          {errors.Email && (
            <Text style={styles.errorMessage}>This is required.</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 10,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Mobile Phone"
              />
            )}
            name="MobilePhone"
          />
          {errors.MobilePhone && (
            <Text style={styles.errorMessage}>This is required.</Text>
          )}

          

          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="City"
              />
            )}
            name="City"
          />
          {errors.City && (
            <Text style={styles.errorMessage}>This is required.</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Country"
              />
            )}
            name="Country"
          />
          {errors.Country && (
            <Text style={styles.errorMessage}>This is required.</Text>
          )}

          {/* <CheckBox
            value={isChecked}
            center
            
            title="Lead is Convertable"
            onValueChange={setChecked}
            onPress={() => setChecked(!isChecked)}
          /> */}

          <View style={styles.UploadBtn}>
            <Button title="Upload"  buttonStyle={{
                backgroundColor: 'green',
                borderRadius: 20,
              }}
              
              icon={{
                name: 'camera',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              />

              
          </View>

          <View style={styles.SubmitBtn}>
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AddLead;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin:20
  },
  formContainer: {
    marginHorizontal: 8,
    marginTop: 4,
  },
  UploadBtn: {
    marginVertical: 10,
    width: 100,
  },
  SubmitBtn: {
    marginVertical: 10,
  },
});

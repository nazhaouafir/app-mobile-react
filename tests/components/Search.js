import React from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';

const Search= ()=>{
    return(
        <View style={styles.main_container}>
            <TextInput style={styles.textinput} placeholder='Titre du film'/>
             <Button title='Rechercher' onPress={()=> {}}/>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        main_container: {
            flex: 1,
            marginTop: 20
          },
        textinput: {
          marginLeft: 0,
          marginRight: 0,
          height: 50,
          borderColor: '#000f00',
          borderWidth: 1,
          paddingLeft: 5
        } 
      }
)
 
export default Search;
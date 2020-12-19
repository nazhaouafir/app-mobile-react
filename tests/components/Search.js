import React from 'react';
import { ActivityIndicator,FlatList, StyleSheet, Button, Text, TextInput, View } from 'react-native';
// import films from '../Helpres/filmData';
import FilmItem from './FilmItem';
import { getFilmsFromApiWithSearchedText} from '../API/TMDBApi'
class Search extends React.Component{

  
  
  //  _films = [];
  constructor(props){
    super(props)
    this.searchedText = ""
    this.page =0
    this.totalPages = 0
    this.state = { 
      films : [],
      isLoading : false
    
    }
  }
  

_loadFilms() {
  if (this.searchedText.length > 0) {
    this.setState({ isLoading: true })
    getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
        this.page = data.page
        this.totalPages = data.total_pages
        this.setState({
          films: [ ...this.state.films, ...data.results ],
          isLoading: false
        })
    })
  }
}
  _searchTextInputChanged(text){
    this.searchedText = text
                             }
  _searchFilms(){
    //Ici on va remettre à zero les films de notre state
    this.page = 0
    this.totalPages = 0
    this.setState({
      films : []
    })
    console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
    
    this._loadFilms()
  }
 _displayLoading(){
              if(this.state.isLoading) {
                    return ( 
                  <View style= {styles.loading_container}>
                      <ActivityIndicator size="small" color="#0000ff"/>
                          {
                          
                          }
                    </View>)}
                 }
_displayDetailForFilm = (idFilm) =>{
  console.log("Display film id " + idFilm)
  this.props.navigation.navigate("FilmDetail",{idFilm: idFilm})
}
  render() {
    console.log(this.state.isLoading)
    console.log(this.props)

     return(
      <View style={ styles.main_container}>
      

      <TextInput
        style={styles.textinput}
        placeholder='Titre du film'
        placeholderTextColor = "#FFFF"
        onChangeText={(text) => this._searchTextInputChanged(text)}
        onSubmitEditing={()=> this._loadFilms()}
      />
      <Button title='Rechercher' onPress={()=> this._searchFilms()}/>
             

<FlatList
  data={this.state.films}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({item}) => <FilmItem film={item} 
  displayDetailForFilm={this._displayDetailForFilm}/>}
  onEndReachedThreshold={0.5}
  onEndReached={() => {
      if (this.page < this.totalPages) { // On vérifie qu'on n'a pas atteint la fin de la pagination (totalPages) avant de charger plus d'éléments
         this._loadFilms()
      }
  }}
  
/> 
            {this._displayLoading()}
             
        </View>
    )}
}

const styles = StyleSheet.create(
  
    {
     loading_container :{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
     },
        main_container: {
            flex: 1,
            marginTop: 0
          },
        textinput: {
          marginLeft: 0,
          marginRight: 0,
          marginTop: 10,
          height: 50,
          borderWidth: 0,
          borderRadius: 2,
          paddingLeft: 10,
          marginBottom : 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          
          elevation: 9,
          backgroundColor : '#478AAA',
          color : '#FFFF',
          
        } 
      } 
)
 
export default Search;
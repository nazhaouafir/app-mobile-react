import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import FilmDetail from '../components/FilmDetail'
import Search from '../components/Search'

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen : Search,
        navigationOptions : {
            title : 'Rechercher'
        }
    },
    FilmDetail :{
        screen : FilmDetail
    }
})
export default createAppContainer(SearchStackNavigator)

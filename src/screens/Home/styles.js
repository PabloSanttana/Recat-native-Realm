import {StyleSheet} from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 30 + getStatusBarHeight(true)
    },
    Background:{
        flex:0,
        paddingRight:10,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'flex-end',
      
    },
    BackgroundText: {
        color: '#fff',
        marginRight:10,
        fontWeight:'bold'
    },
    title: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
    form: {
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        paddingHorizontal: 20,
    },
    input:{
        flex:1,
        paddingVertical:10,
        paddingHorizontal: 15,
        borderRadius: 4,
        backgroundColor: '#fff',
        fontSize:16,
        borderWidth: 2,
        color:'#333'
    },
    icon:{
        backgroundColor: '#6bd4c1',
        marginLeft: 10,
        justifyContent:'center',
        borderRadius: 4,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    list: {
        marginTop: 20,
    }
    
})
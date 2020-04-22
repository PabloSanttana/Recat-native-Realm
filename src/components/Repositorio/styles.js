import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        padding: 20,
        borderRadius:4,
        backgroundColor: "#FFF",
        marginBottom: 15,
    },
    name:{
        fontSize:18,
        fontWeight: 'bold',
        color: '#333'
    },
    description:{
        color:'#666',
        marginTop: 5,
        lineHeight:20
    },
    stats:{
        flexDirection:'row',
        marginTop: 10
    },
    stat:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15
    },
    statCount:{
        marginLeft: 7
    },
    refresh: {
        marginTop:20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    refreshText: {
        color: '#3813C2',
        marginRight: 7,
        fontSize: 15,
        fontWeight:'bold'
    }
})
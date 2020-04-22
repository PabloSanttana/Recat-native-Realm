import React,{useState, useEffect} from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

import api from '../../services/api'
import getRealm from '../../services/realm'
import Repositorio from '../../components/Repositorio'
import styles from './styles'

export default function Home() {
    const [colors, setColors] = useState(['#FF6FD8','#3813C2'])
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)
    const [repositores, setRepositores]= useState([])

    useEffect(()=>{
        async function loadRepository(){
            const realm = await getRealm();
            // sorted('stars', true) ordemando para quem tem mais estrelas
            const data = realm.objects('Repository').sorted('stars', true)

            setRepositores(data)

        }
        loadRepository()
    },[])


    function Background(){
        if(colors[0] === '#FF6FD8' ){
            setColors(['#B721FF','#21D4FD'])
        }else{
            setColors(['#FF6FD8','#3813C2'])
        }
    }

    async function saveRepository(repository){
        const data ={
            id: repository.id,
            name: repository.name,
            fullName: repository.full_name,
            description: repository.description,
            stars: repository.stargazers_count,
            forks: repository.forks_count
        }

        const realm = await getRealm()

        realm.write(()=>{
            // create // modified faz update
            realm.create('Repository', data, 'modified')
        })

        return data
    
    }

    async function handleRefreshRepository(repository){
        const response = await api.get(`/repos/${repository.fullName}`)

        const data =  await saveRepository(response.data)

        setRepositores(repositores.map(repo => repo.id === data.id ? data: repo))
    }


    async  function handleAddRepository(){
        try {
            const response = await api.get(`/repos/${input}`)

            await saveRepository(response.data);

            setInput('')
            setError(false)
            Keyboard.dismiss()
        } catch (error) {
            setError(true)
        }
    }

    return (

        <LinearGradient 
            colors={colors}  
            start={{x:0,y:0}} 
            end={{x:1,y:1}}  
            style={{flex:1}}
        >
           
            <View style={styles.container}>
                <TouchableOpacity style={styles.Background} onPress={Background}>
                        <Text style={styles.BackgroundText}>Background</Text>
                        <Icon name="ios-repeat" size={29} color="#fff"/>
                </TouchableOpacity>
                    <Text style={styles.title}>Repositório</Text>
                    <View style={styles.form}>
                        <TextInput 
                            
                            placeholderTextColor="#999" 
                            style={[styles.input, error? {borderColor: 'red'}: {borderColor: '#fff'}]} 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            placeholder='Procurar repositório...'
                            value={input} 
                            onChangeText={setInput}
                            />
                        <TouchableOpacity onPress={handleAddRepository}>
                            <Icon style={styles.icon} name="md-add" size={22} color='#FFF' />
                        </TouchableOpacity>
                    </View>
                    <FlatList style={styles.list}
                        keyboardShouldPersistTaps="handled"
                        contentContainerStyle={{paddingHorizontal: 20}}
                        showsVerticalScrollIndicator={false}
                        data={repositores}
                        keyExtractor={item=> String(item.id)}
                        renderItem={({item})=>(
                            <Repositorio data={item} onRefresh={() => handleRefreshRepository(item)}/>
                        )}
                    />
            </View>
        </LinearGradient>

    )
}
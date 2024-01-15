import {  Text, View, Image, Pressable, FlatList, Alert, TouchableOpacity } from 'react-native'
import React, {  useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { styles } from '../../assets/css/styles'
import ModalComment from '../Components/ModalComment'
import ListComment from '../Components/ListComment'
import { SelectList } from 'react-native-dropdown-select-list'
import Test from '../Components/Test'

let countapi=0
const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const commentData = useSelector((state: any) => [...state.commentData].reverse())
    const [selectedDropdown, setSelectedDropdown] = useState('');
    const [count,setCount]=useState(0)
    const test=useSelector((state: any) => state.test)
    const [apiData,setApiData]=useState([])
    const [apiDataCount,setApiDataCount]=useState(Array<any>)
    // const [modalVisible, setModalVisible] = useState(false);


    const [apiDataCountup, setapiDataCountup] = useState(false);
    useEffect(()=>{
        apiCall()
        loadMoreAPI()
    },[0])

    const apiCall=async()=>{
        let api=await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{return(res.json())} )
        .then((response)=>{setApiData(response)})
        .catch(e=>{console.log("error=>",e)})
       
    }

    const dataDropdown = [
        {key:'1', value:'Newest comment'},
    ]
    const countComments = () => {
        let c = 0
        for (let d of commentData) {
            c++
            for (let da of d.data) {
                c++
            }
        }
        let text=c>1?c+' Comments':c+' Comment'
        return text
    }

    const loadMoreAPI=async()=>{
        countapi++
        let url="https://jsonplaceholder.typicode.com/users/"+countapi
        console.log("first",url)
        let api=await fetch(url)
        .then((res)=>{return(res.json())} )
        .then((response)=>{
            // console.log(countapidata)
            // console.log("countapidata",apiDataCount)
            // setApiDataCount(countapidata)
            // setapiDataCountup(!apiDataCountup)
            setApiDataCount([...apiDataCount,response])
        
        })
        // .then((response)=>{setApiDataCount(response)})
        .catch(e=>{console.log("error=>",e)})
    }
    const bannerView = () => <View>
        <View>


            



            {/* <FlatList
            data={apiData}
            renderItem={({item,index})=>{
                return(
                    <View style={[styles.box]}>
                        <Text>name: {item.name}</Text>
                        <Text>email: {item.email}</Text>
                        <Text>street: {item.address.street}</Text>
                        <Text>suite: {item.address.suite}</Text>
                        <Text>zipcode: {item.address.zipcode}</Text>
                        <Text>lang: {item.address.geo.lng}</Text>
                        <Text>lat: {item.address.geo.lat}</Text>
                        <Text>company name: {item.company.name}</Text>
                    </View>
                )
            }}
            /> */}
        </View>
        <View>
            <Text>{test}</Text>
            <Test/>
        </View>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{padding:10,margin:10,backgroundColor:'red'}} onPress={()=>{count>0&&setCount(count-1)}}><Text >-</Text></TouchableOpacity>
            <Text style={{padding:10}}>{count}</Text>
            <TouchableOpacity style={{padding:10,margin:10,backgroundColor:'blue'}} onPress={()=>{setCount(count+1)}}><Text>+</Text></TouchableOpacity>
        </View>
        <View style={styles.box}>
            <Image
                style={styles.banner}
                source={require('../../assets/img/banner.png')}
            />
        </View>
        <View style={[styles.rowSpace,{ margin: 10, marginTop: 0 }]}>
          <View style={{flexDirection:'row'}}>
          <Text style={{ verticalAlign: 'middle', fontSize: 16, fontWeight: 'bold' }}>{countComments()} </Text>
          <Image
                style={{alignSelf:'center'}}
                source={require('../../assets/img/updownarrow.png')}
            />
          </View>
            <Pressable style={[styles.commentButton, { width: 110 }]} onPress={() => { setModalVisible(true) }}>
                <Text style={styles.commentButtonText}>Comment</Text>
            </Pressable>
        </View>
        <View style={{paddingHorizontal:10,paddingBottom:10}}>
        <SelectList 
        setSelected={(val:any) => {
            setSelectedDropdown(val)
        }} 
        data={dataDropdown} 
        defaultOption={dataDropdown[0]}
        search={false}
    />
        </View>
    </View>
    
    return (
        <View>

<FlatList
            data={apiDataCount}
            extraData={apiDataCount.length}
            renderItem={({item,index})=>{
                console.log("first",index)
                return(
                    <View style={[styles.box]}>
                        <Text>name: {item.name}</Text>
                        <Text>email: {item.email}</Text>
                    </View>
                )
            }}
            />
         
            <TouchableOpacity onPress={()=>{
                loadMoreAPI()
            }}>
            <Text>Load More</Text>
            </TouchableOpacity>

            <ModalComment modalVisible={modalVisible} setModalVisible={setModalVisible} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            <FlatList
                data={commentData}
                ListHeaderComponent={
                    <>
                    {bannerView()}
                    {commentData.length == 0 && <Text style={{ textAlign: 'center', fontSize: 16 }}>No comments found</Text>}
                    </>
                }
                renderItem={({ item, index }) => {
                    // return(<ParentComment item={item} index={index} setSelectedDate={setSelectedDate} setModalVisible={setModalVisible}/>)
                    return(<ListComment item={item} index={index} isParent={true} setSelectedDate={setSelectedDate} setModalVisible={setModalVisible}/>)
                }}
                ListFooterComponent={
                    <View style={{ paddingBottom: 100 }} />
                }
            />
        </View>
    )
}
export default Home

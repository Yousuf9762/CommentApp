import { Text, View, Pressable, FlatList, Alert } from 'react-native'
import React from 'react'
import { styles } from '../../assets/css/styles'
import { useDispatch } from 'react-redux'
import { DeleteComment } from '../Redux/action'

const ListComment = ({ item, index, isParent, setSelectedDate, setModalVisible }: any) => {
    let d = new Date(item.date)
    let date = item.date.split(' ')
    // let dateformat=date[0].split('-')
    let time = date[4].split(':')
    let newDateTime = date[1] + ' ' + date[2] + ' ' + date[3] + ' ' + time[0] + ':' + time[1]
    const dispatch=useDispatch()
    const deleteAlert=()=>{
        Alert.alert('Warning',`Are you sure you want to delete this comment`,[
            {
                text:'Yes',
                onPress:()=>dispatch(DeleteComment(item.date)),
            },
             {
                text:'No',
                onPress:()=>console.log('no'),
                style:'cancel'
            }
            
        ])
    }

    return (
        <View style={isParent ? [styles.box, { padding: 10 }] : [styles.boxChild]} key={index}>
            <View style={isParent && styles.borderBottom}>
                <View style={[styles.rowSpace]}>
                    <Text style={{ width: '55%' }}>{item.name} comment as:</Text>
                    <Text style={[styles.dateTimeRight, { width: '45%' }]}>{newDateTime}</Text>
                </View>
                <Text style={[styles.commnet,!isParent&& {fontSize:14}]}>{item.comment}</Text>
            </View>

            {isParent &&
                <>
                    <View style={[styles.rowEnd]}>
                        {/* <Text style={styles.commentTextButton}>Delete</Text> */}
                        <Pressable onPress={() => { deleteAlert() }}>
                        <Text style={styles.commentTextButton}>Delete</Text>
                        </Pressable>
                        <Pressable onPress={() => { setSelectedDate(item.date); setModalVisible(true) }}>

                            <Text style={styles.commentTextButton}>Reply</Text>
                        </Pressable>
                    </View>
                    <FlatList
                        data={item.data}
                        renderItem={({ item, index }) => {
                            // return(<ChildComment item={item} index={index} />)
                            return (<ListComment item={item} index={index} isParent={false} setSelectedDate={setSelectedDate} setModalVisible={setModalVisible} />)

                        }}
                    />
                </>

            }

        </View>
    )
}

export default ListComment


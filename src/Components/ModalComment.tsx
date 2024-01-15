import { TextInput, Text, View, Image, Modal, Alert, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddComment, AddInnerComment } from '../Redux/action';
import { styles } from '../../assets/css/styles';


const ModalComment = ({modalVisible,setModalVisible,selectedDate,setSelectedDate}:any) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const dispatch = useDispatch()
    const SubmitComment = () => {
        if (name == '' || comment == '') {
            Alert.alert('Alert', 'Please fill all fields', [

                { text: 'OK', onPress: () => console.log('') },
            ]);
        } else {
            let date = new Date()

            if (selectedDate == '') {
                let data = {
                    name: name,
                    comment: comment,
                    date: date.toString(),
                    data: []
                }
                dispatch(AddComment(data))
            } else {
                let data = {
                    name: name,
                    comment: comment,
                    date: date.toString(),
                    selectedDate: selectedDate
                }
                dispatch(AddInnerComment(data))
            }
            // dispatch(AddComment(data))
            setName('')
            setComment('')
            setSelectedDate('')
            setModalVisible(!modalVisible)
        }

    }
  return (
    <Modal
    animationType='slide'
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
    }}>
    <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <TextInput
                style={styles.input}
                onChangeText={(text)=>setName(text)}
                placeholder='Your name'
                value={name}
            />

            <TextInput
                style={[styles.input, { height: 100 }]}
                onChangeText={(text)=>setComment(text)}
                multiline={true}
                placeholder='Add your comment'
                value={comment}
            />
            <View style={[styles.rowModalTwoButton]}>
                <Pressable
                    style={[styles.commentButton, { backgroundColor: '#ff251e' }]}
                    onPress={() => {
                        setName('');
                        setComment('');
                        setSelectedDate('');
                        setModalVisible(!modalVisible)
                    }
                    }>
                    <Text style={styles.commentButtonText}>Cancel</Text>
                </Pressable>
                <Pressable
                    style={[styles.commentButton, { backgroundColor: '#0053c4' }]}
                    onPress={() => SubmitComment()}>
                    <Text style={styles.commentButtonText}>Add</Text>
                </Pressable>
            </View>

        </View>
    </View>
</Modal>
  )
}

export default ModalComment


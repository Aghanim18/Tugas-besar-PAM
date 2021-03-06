import React from 'react';


import {Ionicons} from '@expo/vector-icons';
import {useSelector} from 'react-redux';


import {View, Text} from 'react-native';



import {s} from './styles';



function Profile() {
  const books = useSelector(state => state.bookReducer.books);

  return (
    <View style={s.container}>
      <Text style={s.title}>Profile</Text>
      <Text style={s.username}>@Dream Team</Text>
      <View style={s.userContainer}>
        <View style={s.userProfile}>
          <Ionicons name="body" color="#fff" size={50} />
        </View>
        <Text style={s.userBooks}>
          <Text style={{fontWeight: 'bold'}}>{books.length} </Text>Books in
          total
        </Text>
      </View>
    </View>
  );
}

export default Profile;
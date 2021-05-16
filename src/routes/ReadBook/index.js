import React, {useState} from 'react';


import * as Speech from 'expo-speech';


import {ScrollView, View, Text, ToastAndroid} from 'react-native';

import Header from './Header';
import Options from './Options';
import BookInfo from './BookInfo';


import {s} from './styles';



function ReadBook({navigation, route}) {
  const {data} = route.params;

  

  const [listening, setListening] = useState(false);


  function handleBackNavigation() {
    navigation.goBack();
  }


  async function listenBook() {
    try {
      let listeningSpeech = await Speech.isSpeakingAsync();

      if (!listeningSpeech) {
        setListening(true);
        Speech.speak(data.description);
      } else {
        Speech.stop();
        setListening(false);
      }
    } catch (error) {
      ToastAndroid.show(
        'Não foi possível disponibilizar esta função no momento (Tente novamente).',
        ToastAndroid.SHORT,
      );
      setListening(false);
    }
  }

  async function stopListenToRead() {
    if (listening) setListening(false);
    let listeningSpeech = await Speech.isSpeakingAsync();
    if (listeningSpeech) Speech.stop();
  }

  return (
    <>
      <ScrollView style={s.container}>
        <Header data={data} navigation={handleBackNavigation} />
        <BookInfo data={data} />
      </ScrollView>
      <Options
        listenBook={listenBook}
        stopListenToRead={stopListenToRead}
        listening={listening}
      />
    </>
  );
}

export default ReadBook;

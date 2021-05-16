import React, {memo} from 'react';



import {View, Text} from 'react-native';


import {s} from './styles';



function Title() {
  return (
    <Text style={s.title}>
      Hi,{' '}
      <Text
        style={{
          color: '#FF6978',
          fontWeight: 'bold',
        }}>
        Dream Team
      </Text>
      {'   '}
      👋
    </Text>
  );
}

export default memo(Title);


import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {Context} from '../component/blogContext';

const ShowScreen = ({navigation, route}) => {
  const {state} = useContext(Context);
  const blogs = route.params.id;
  const blogPost = state.find(blogPost => blogPost.id === navigation.blogs);


  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({});

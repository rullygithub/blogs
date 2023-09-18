import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {Context} from '../component/blogContext';
import Icon from 'react-native-vector-icons/EvilIcons';

const Homepage = ({navigation}) => {
  const {state, addBlogPost, removeBlogs} = useContext(Context);
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 10}}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 15,
            textTransform: 'uppercase',
          }}>
          Blog List View
        </Text>
      </View>

      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Showscreen', {id: item.id})}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingVertical: 10,
                  backgroundColor: 'grey',
                  marginBottom: 5,
                }}>
                <Text>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => removeBlogs(item.id)}>
                  <Icon name="trash" size={20} color={'red'} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Button title="Add blogs" onPress={addBlogPost} />
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

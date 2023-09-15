import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useContext} from 'react'
import BlogContext from '../component/blogContext'

const Homepage = () => {

    const blogPost = useContext(BlogContext)
  return (
    <View style={styles.container}>
      <Text>Selamat Datang</Text>
      <FlatList data={blogPost}
                keyExtractor={(blogPost) => blogPost.title }
                renderItem={({item}) => {
                  return <Text>{item.title}</Text>
                }}
      />
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
}) 
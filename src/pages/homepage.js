import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import BlogContext from '../component/blogContext'

const Homepage = () => {

    const value = useContext(BlogContext)
  return (
    <View>
      <Text>Homepage</Text>
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({}) 
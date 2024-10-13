import React from 'react'
import { View,Text, SafeAreaView} from 'react-native'

function Layout() {
  return (
    <SafeAreaView>

    <View style={{backgroundColor:"black"}}>
            <Text style={{color:'white'}}>GoBack</Text>
    </View>
    <Text> Hello user</Text>

    </SafeAreaView>
  )
}

export default Layout
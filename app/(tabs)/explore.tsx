import { Link } from 'expo-router'
import { View, Text, SafeAreaView, Button } from 'react-native'


function explore() {
    return (
        <SafeAreaView>
            <Text>Hi Kunal</Text>
            <Link href={"/accountinfo"}>
                <Text >Click To see Info</Text>
            </Link>
           </SafeAreaView>
    )
}

export default explore
import DownloadPicture from '@/components/BottomSheet';
import { useState } from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'

function account() {
    const [pictureOpen,setPictureOpne] = useState(false);
    return (
        <SafeAreaView style={{flex:1}}><Text>Acoount</Text>
        <View style={{flex:1}} >

        <Button title='Open Sheet' onPress={()=>setPictureOpne(prev=>!prev)}></Button>
        {pictureOpen && <DownloadPicture/>}
        </View >
        </SafeAreaView>
    )
}

export default account
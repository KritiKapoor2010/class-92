import React from "react";
import { Text,View,StyleSheet,Image} from "react-native";

export default class Home extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        )

    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        
    }
})

//create signin screen , create profile screen ,post.js,donation.js , logout.js
//add title image and logo to screen , add image background to screen,continue button 
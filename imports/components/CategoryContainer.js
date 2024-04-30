import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import Video from 'react-native-video';
 import { Card, CardItem, Body } from 'native-base'
class CategoryContainer extends Component {
  onOpenVideo = () => {
    this.props.navigation.navigate("VideoScreen");
  };
  _keyExtractor = (item, index) => item.videos_id;

  constructor() {
    super();
    this.player = {};
  }

  onVideoSelect = video => {
    this.props.navigation.navigate("VideoScreen", { video });
  };

  render() {
    const { bgColor } = this.props.category;
    let { videos } = this.props;
    const url = "http://bhoomi.pe.hu/videos/57.mp4"

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={videos}
          keyExtractor={this._keyExtractor}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (

            <TouchableOpacity
              onPress={() => {
                this.onVideoSelect(item);
              }}
              style={styles.itemContainer}
            >
              <View>
                <Video
                  source={{ uri: 'http://bhoomi.pe.hu/videos/' + item.videos_id + '.mp4' }}
                  ref={(ref) => {
                    this.player = ref
                  }}                                      // Store reference
                  onBuffer={() => { }}                // Callback when remote video is buffering
                  onError={() => { }}
                  style={{ width: 340, height: 200 }}
                  paused={true}          // Callback when video cannot be loaded
                />
                <Text style={{ fontSize: 30, color: 'black' }}>{item.videos_title}</Text>
              </View>
              {/* <Card >
                <CardItem  >
                  <Body>
                    
                     
                  </Body>
                </CardItem>
                <CardItem footer bordered style={{ padding: 60 }}>
                  <Text style={styles.itemCode}>{item.videos_title}</Text>
                </CardItem>
              </Card> */}


            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}


{/* <View style={{alignItems:'center',alignContent:'center' ,padding:50}}> 
                       <Text style={{fontSize:30,color:'white'}}>{ item.videos_title}</Text>
                     </View> */}
const styles = StyleSheet.create({

  itemContainer: {
    borderRadius: 5,
    margin: 20,
  },
  item: { width: 100, height: 100 },
  itemName: {
    fontSize: 20,
    color: '#5d6061',
    fontWeight: "600"
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 14,
    color: "#5d6061"
  }
});
export default CategoryContainer;

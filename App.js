import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width;

//https://expo.github.io/vector-icons/

const feedData = [
  {
    id: 1,
    name: 'SieuThai',
    image: require('./assets/1.jpeg'),
    likeCount: 128,
    avatar: require('./assets/avatar.jpeg')
  },
  {
    id: 2,
    name: 'Whoami',
    image: require('./assets/2.jpeg'),
    likeCount: 20,
    avatar: require('./assets/avatar.jpeg')
  },
  {
    id: 3,
    name: 'CoderChool',
    image: require('./assets/3.jpeg'),
    likeCount: 500,
    avatar: require('./assets/avatar.jpeg')
  },
  {
    id: 4,
    name: 'Hana',
    image: require('./assets/4.jpeg'),
    likeCount: 24,
    avatar: require('./assets/avatar.jpeg')
  },
  {
    id: 5,
    name: 'Nataly',
    image: require('./assets/5.jpeg'),
    likeCount: 120,
    avatar: require('./assets/avatar.jpeg')
  }
];

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#f3f6fa',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: 5,
          paddingHorizontal: 10,
          paddingTop: 30
        }}
      >
        <View style={{ width: 32 }} />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
          }}
          style={{
            flex: 1,
            height: 40
          }}
          resizeMode="contain"
        />
        <Feather name="inbox" size={27} color="black" />
      </View>
      <ScrollView>
        {feedData.map(feed => {
          return (
            <View
              style={{
                marginBottom: 15
              }}
              key={feed.id}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 7,
                  marginHorizontal: 12
                }}
              >
                <Image
                  source={feed.avatar}
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 23
                  }}
                  resizeMode="cover"
                />
                <Text
                  style={{
                    marginLeft: 12,
                    fontSize: 15,
                    fontWeight: '500'
                  }}
                >
                  {feed.name}
                </Text>
              </View>
              <View
                style={{
                  height: 300
                }}
              >
                <Image
                  source={feed.image}
                  style={{
                    flex: 1,
                    width: null,
                    height: null
                  }}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginVertical: 10
                }}
              >
                <Feather
                  name="heart"
                  size={27}
                  color="black"
                  style={{ marginLeft: 12 }}
                  onPress={() => alert('like')}
                />
                <Feather
                  name="message-square"
                  size={27}
                  color="black"
                  style={{ marginLeft: 12 }}
                  onPress={() => alert('comment')}
                />
                <Feather
                  name="share"
                  size={27}
                  color="black"
                  style={{ marginLeft: 12 }}
                  onPress={() => alert('share')}
                />
              </View>
              <View
                style={{
                  borderTopColor: '#d6d6d6',
                  borderTopWidth: 1,
                  borderBottomColor: '#d6d6d6',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 12,
                  paddingVertical: 5
                }}
              >
                <Entypo name="heart" size={27} color="black" />
                <Text
                  style={{
                    marginLeft: 5,
                    fontWeight: '500',
                    fontSize: 13
                  }}
                >
                  {feed.likeCount} likes
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

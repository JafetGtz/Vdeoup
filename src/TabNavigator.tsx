import React, { useState } from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';

import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import VideoPlayer from './VideoPlayer';
import videosData from './videosData';
import { WINDOW_HEIGHT } from './utils';
import CameraScreen from './camera';
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons'


const BottomTab = createBottomTabNavigator();

const HomeScreen = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const bottomTabHeight = useBottomTabBarHeight();

  return (
    <FlatList
      data={videosData}
      pagingEnabled
      renderItem={({ item, index }) => (
        <VideoPlayer data={item} isActive={activeVideoIndex === index} />
      )}
      onScroll={e => {
        const index = Math.round(
          e.nativeEvent.contentOffset.y / (WINDOW_HEIGHT - bottomTabHeight),
        );
        setActiveVideoIndex(index);
      }}
    />
  );
};

export default () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: 'black' },
        headerShown: false,
        tabBarActiveTintColor: 'white',
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./assets/images/home.png')}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="VideoUps"
        component={HomeScreen}
        options={{

          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="play-circle" size={24} color="white" />

          ),
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name='ios-add-circle' size={24} color="white" />
          ),
        }}
      />

      <BottomTab.Screen
        name="Me"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name='user-alt' size={24} color="white" />
          ),
        }}
      />

    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 20,
    height: 20,
    tintColor: 'grey',
  },
  bottomTabIconFocused: {
    tintColor: 'white',
  },
  newVideoButton: {
    width: 48,
    height: 24,
  },
});

import { View, Text, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { useAuth } from '@clerk/clerk-expo';

const ProfileTab = () => {
  const { signOut } = useAuth();
  return (
    <ScrollView
      className="bg-surface"
      contentInsetAdjustmentBehavior="automatic"
    >
      <Text className="text-white">profileTab</Text>
      <Pressable
        onPress={() => signOut()}
        className="mt-4 px-4 py-4 bg-red-500 rounded-lg"
      >
        <Text className="text-white">Sign Out</Text>
      </Pressable>
    </ScrollView>
  );
};

export default ProfileTab;

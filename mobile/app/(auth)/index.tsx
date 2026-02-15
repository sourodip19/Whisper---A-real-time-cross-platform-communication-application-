import {
  View,
  Text,
  Dimensions,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useAuthSocial } from '../hooks/useSocialAuth';
const { width, height } = Dimensions.get('window');
const AuthScreen = () => {
  const { handleSocialAuth, loadingStrategy } = useAuthSocial();
  const isLoading = loadingStrategy !== null;
  return (
    <View className="flex-1 bg-surface-dark">
      <View className="absolute inset-0 overflow-hidden "></View>
      <SafeAreaView className="flex-1">
        <View className="items-center pt-10">
          <Image
            source={require('../../assets/images/logo.png')}
            style={{ height: 100, width: 100, marginVertical: -20 }}
            contentFit="contain"
          />
          <Text className="text-4xl text-primary font-bold font-serif tracking-wider">
            WHISPER
          </Text>
        </View>
        {/*Center Section - Hero Image*/}
        <View className="items-center justify-center px-6 flex-1">
          <Image
            source={require('../../assets/images/auth.png')}
            style={{ height: height * 0.3, width: width - 48 }}
            contentFit="contain"
          />
          {/* Headline*/}
          <View className="mt-6 items-center">
            <Text className="text-5xl font-bold text-foreground text-center font-sans">
              Connect & Chat
            </Text>
            <Text className="text-3xl font-bold text-primary font-mono">
              Seamlessy
            </Text>
          </View>
          {/*Auth Button*/}
          <View className="flex-row gap-4 mt-10">
            {/*Google Button*/}
            <Pressable
              className="flex-1 flex-row items-center justify-center gap-2 bg-white py-4 rounded-2xl active:scale-[0.97]"
              onPress={() => !isLoading && handleSocialAuth('oauth_google')}
              disabled={isLoading}
              accessibilityRole="button"
              accessibilityLabel="Continue with Google"
            >
              {loadingStrategy === 'oauth_google' ? (
                <ActivityIndicator size={'small'} color={'#1A1A1A'} />
              ) : (
                <>
                  <Image
                    source={require('../../assets/images/google.png')}
                    style={{ height: 20, width: 20 }}
                    contentFit="contain"
                  />
                  <Text className="text-gray-900 font-semibold text-sm">
                    Google
                  </Text>
                </>
              )}
            </Pressable>
            {/*Apple Button*/}
            <Pressable
              className="flex-1 flex-row items-center justify-center gap-2 bg-white/10 py-4 rounded-2xl active:scale-[0.97] border border-white/20"
              onPress={() => !isLoading && handleSocialAuth('oauth_apple')}
              disabled={isLoading}
              accessibilityRole="button"
              accessibilityLabel="Continue with Apple"
            >
              {loadingStrategy === 'oauth_apple' ? (
                <ActivityIndicator size={'small'} color={'#FFFFFF'} />
              ) : (
                <>
                  <Ionicons name="logo-apple" size={20} color={'#FFFFFF'} />
                  <Text className="text-foreground font-semibold text-sm">
                    Apple
                  </Text>
                </>
              )}
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AuthScreen;

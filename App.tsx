import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet, Image } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [isPalindrom, setIsPalindrom] = useState(false);

  const checkPalindrom = () => {
    // Menghapus spasi dan mengubah ke huruf kecil
    const text = inputText.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    // Membalikkan teks
    const reversedText = text.split('').reverse().join('');

    // Memeriksa apakah teks asli sama dengan teks yang dibalik
    setIsPalindrom(text === reversedText);

    if (text === reversedText) {
      Alert.alert('kata atau kalimat yang anda ketik adalah palindrom.');
    } else {
      Alert.alert('kata atau kalimat yang anda ketik adalah bukan palindrom.');
    }
  };

  return (
    <View style={styles.container}>
    <Image
        source={{
          uri: 'https://baa.unikama.ac.id/wp-content/uploads/sites/23/2021/01/Unikama.png',
        }}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Masukkan kata atau kalimat"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      <Button title="Validasi" onPress={checkPalindrom} />
      {isPalindrom && <Text style={styles.resultGreen}>Palindrom!</Text>}
      {!isPalindrom && isPalindrom !== false && (
        <Text style={styles.resultRed}>Bukan Palindrom!</Text>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  input: {
    borderWidth: 3,
    borderColor: 'black',
    padding: 10,
    margin: 10,
    width: 200,
    backgroundColor: 'white',
  },
  resultGreen: {
    marginTop: 10,
    color: 'green',
  },
  resultRed: {
    marginTop: 10,
    color: 'red',
  },
  image: {
    marginTop: 20,
    width: 400,
    height: 300,
  },
});
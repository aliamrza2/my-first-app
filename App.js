import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 اولین اپ من</Text>
      <Text style={styles.subtitle}>
        این یک تست ساده هستش
      </Text>
      
      <View style={styles.counter}>
        <Text style={styles.countText}>تعداد کلیک: {count}</Text>
      </View>

      <Button 
        title="دکمه رو بزن!" 
        onPress={() => setCount(count + 1)}
        color="#007AFF"
      />

      <View style={{ marginTop: 20 }}>
        <Button 
          title="نمایش پیام" 
          onPress={() => Alert.alert('سلام!', 'اپ شما کار می‌کند!')}
          color="#34C759"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  counter: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  countText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

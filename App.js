import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HW from './src/PageRender/HW';


//Render Page
export default function App() {
  return <HW name='User' num1={21} num2={18} />
}
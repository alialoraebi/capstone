import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const withGradient = (WrappedComponent) => {
  return (props) => (
    <LinearGradient colors={['#7D3C98', '#7D3C98', '#FFFFFF']} style={styles.gradient}>
      <WrappedComponent {...props} />
    </LinearGradient>
  );
};

export default withGradient;
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme';
import Home from './Home';
import ArrowLeft from './ArrowLeft';
import Mail from './Mail';
import Lock from './Lock';
import User from './User';

const icons = {
    home: Home,
    arrowLeft: ArrowLeft,
    mail: Mail,
    lock: Lock,
    user: User,
}

const Icon = ({name, ...props}) => {
    const IconComponent = icons[name];
  return (
    <IconComponent
        height={props.size || 24}
        width={props.size || 24}
        strokeWidth={props.strokeWidth || 1.9}
        color={theme.colors.textLight}
        {...props}
    />
  )
}

export default Icon

const styles = StyleSheet.create({})
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import StackRoutes from './stack.routes'

export default () => (
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
)
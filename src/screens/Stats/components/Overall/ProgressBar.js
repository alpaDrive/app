import * as React from 'react'
import { View, Text } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'

const ProgressBar = ({ percentage }) => {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ProgressCircle
            percent={percentage}
            radius={100}
            borderWidth={8}
            color="#fff"
            shadowColor="gray"
            bgColor="#051128"
        >
            <Text style={{ fontSize: 20, color: 'white' }}>{percentage ? `${percentage}%` : 'No data'}</Text>
        </ProgressCircle>
    </View>
}

export default ProgressBar

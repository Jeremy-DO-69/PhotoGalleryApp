import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';

import styles from './allmystyles';

export default ({imgmap=[]}) => (
    <ScrollView 
        horizontal={true} /*Direction Scroll*/
        style={[styles.tools, styles.gallerybar]} 
    >
        {imgmap.map(({ uri }) => /*Captured Image map*/(
            <View style={styles.galleryimgbar} key={uri}>
                <Image source={{ uri }} style={styles.galleryimg}/*Image display*//>
            </View>
        ))}
    </ScrollView>
);
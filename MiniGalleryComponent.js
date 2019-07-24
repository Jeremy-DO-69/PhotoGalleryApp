import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';

import styles from './allmystyles';

export default ({imgmap=[]}) => (
    <ScrollView 
        horizontal={true} /*Direction Scroll*/
        style={[styles.tools, styles.gallerybar]} /*STyles of scrollbar*/
    >
        {imgmap.map(({ uri }) => /*Captured Image map*/(
            <View style={styles.galleryimgbar} key={uri}/*STyles ofimgbar*/>
                <Image source={{ uri }} style={styles.galleryimg}/*Image display & style img*//>
            </View>
        ))}
    </ScrollView>
);
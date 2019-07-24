import React from 'react';
import { Camera } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import styles from './allmystyles';

const { Type: CameraTypes } = Camera.Constants;

export default ({ 
    statusdetect = false, 
    phototype = CameraTypes.back,  
    photo, nophoto, video, novideo,  
}) => (
    ///TOOLBAR  COL{1} == FLASHBUTTON  COL{2} == CAPTUREBUTTON COL{3} == REVERSEBUTTON
    <Grid style={styles.tools}>
        <Row>
            <Col size={2} style={styles.align}/*COL{2} == CAPTUREBUTTON */>
                <TouchableWithoutFeedback
                    onPressIn={photo}
                    onPressOut={nophoto}
                    onLongPress={video}
                    onPress={novideo} /*---> HITBOX BUTTON CAPTURE (photo, video detection)*/>
                    <View style={[styles.butt, statusdetect && styles.buttAct]} /*statusdetect photo or video*/>
                        {statusdetect && <View style={styles.buttInt} />} 
                    </View>
                </TouchableWithoutFeedback>
            </Col>
            <Col style={styles.align}/*COL{3} == REVERSEBUTTON*/>
                <TouchableOpacity onPress={() => setCameraType(
                    phototype === CameraTypes.back ? CameraTypes.front : CameraTypes.back
                )}/*reverse camera loader*/>
                    <Ionicons /*REVERSE BUTTON STYLES */
                        name="md-reverse-camera"
                        color="blue"
                        size={50}
                    />
                </TouchableOpacity>
            </Col>
        </Row>
    </Grid>
);
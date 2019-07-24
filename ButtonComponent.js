import React from 'react';
import { Camera } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import styles from './allmystyles';

const { Type: CameraTypes } = Camera.Constants;

export default ({ 
    statusdetect = false, /* no detect as default butt as default*/
    phototype = CameraTypes.back, setCameraType,  /* back as default camera*/
    photo, nophoto, video, novideo,/*info from ImageGallery fnct */  
}) => (
    ///COL{1} == CAPTUREBUTTON COL{2} == REVERSEBUTTON
    <Grid style={styles.tools}>
        <Row>
            <Col size={2} style={styles.align}/*COL{1} == CAPTUREBUTTON */>
                <TouchableWithoutFeedback
                    onPressIn={photo}
                    onPressOut={nophoto}
                    onLongPress={video}
                    onPress={novideo} /*---> BUTTON CAPTURE (photo, video, nothing: detection)*/>
                    <View style={[styles.butt, statusdetect && styles.buttAct]} /*statusdetect photo or video*/>
                        {statusdetect && <View style={styles.buttInt} />} 
                    </View>
                </TouchableWithoutFeedback>
            </Col>
            <Col style={styles.align}/*COL{2} == REVERSEBUTTON*/>
                <TouchableOpacity onPress={() => setCameraType(
                    phototype === CameraTypes.back ? CameraTypes.front : CameraTypes.back /* face of back camera */
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
import React from 'react';
import { View, Text, Button,} from 'react-native';
import { Camera, Permissions } from 'expo';

import styles from './allmystyles';

import Toolbar from './ButtonComponent';
import Gallery from './MiniGalleryComponent';

export default class CameraGallery extends React.Component {
    photograph = null;

    state = {
        imgmap: [], /*image tab*/
        statusdetect: null, 
        phototype: Camera.Constants.Type.back,/*Face or Back */
        cameraperm: null, /*Perm status */
    };
    setCameraType = (phototype) => this.setState({ phototype }); /*modifing phototype state*/
    photoin = () => this.setState({ statusdetect: true });/*modifing imgmap tatus state*/

    photoout = () => {
        if (this.state.statusdetect)
            this.photograph.stopRecording(); /*Stoping record detect*/
    };

    photoshort = async () => {
        const datap = await this.photograph.takePictureAsync();
        this.setState({ statusdetect: false, imgmap: [datap, ...this.state.imgmap] }) /*Photo capture detect*/
    };

    videoin = async () => {
        const datav = await this.photograph.recordAsync();
        this.setState({ statusdetect: false, imgmap: [datav, ...this.state.imgmap] }); /*Video capture detect*/
    };

    async componentDidMount() {
        const photograph = await Permissions.askAsync(Permissions.CAMERA);/*Camera perm*/
        const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);/*Microphone perm*/
        const cameraperm = (photograph.status === 'granted' && audio.status === 'granted');

        this.setState({ cameraperm }); /*Device Camera and Mic permissions*/
    };

    render() {
        const { cameraperm, phototype, statusdetect, imgmap } = this.state;
        /*Permissions Denied error msg*/
        if (cameraperm === null) {/*Perm not accepted */
            return <View />;
        } else if (cameraperm === false) { /*Perm false */
            return;
        }
        /*Render APP Functional*/
        return (
            <React.Fragment>
                <View>
                    <Camera
                        type={phototype} /*Camera display*/
                        style={styles.global} /*Global styles set*/
                        ref={photograph => this.photograph = photograph}/*Camera set*/
                    />
                    <Button
                        onPress={() => {/*ONLY Gallery Display*/}}
                        title="Album"
                        />

                </View>
                {imgmap.length > 0 && <Gallery imgmap={imgmap}/*Gallery Display*//>}
                <Toolbar /*Display toolbar & info call*/
                    statusdetect={statusdetect}
                    phototype={phototype}
                    setCameraType={this.setCameraType}
                    photo={this.photoin} 
                    nophoto={this.photoout}
                    video={this.videoin}
                    novideo={this.photoshort}
                />
            </React.Fragment>
        );
    };
};
import React, {userState, userEffect} from 'react';
import { Modal } from 'antd';
import ReactPlayer from 'react-player';

import './ModalVideo.scss';

export default function ModalVideo (props){

    const {videoKey, videoPlatform, isOpen, close} = props
    return (
        <Modal className='modal-video' visible={isOpen} centered onCancel={close} footer={false} >
            <h1>This is a video modal</h1>
        </Modal>
    );
}
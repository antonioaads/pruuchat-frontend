import React from 'react';
import styled from 'styled-components';
import camera from '../../assets/Camera.svg';
import { Image } from '../MessageList/types';
import DropZone from './DropZone';
import { HandleImageFileType } from "./types";

const ImageZoneIcon = styled.img`
    width: 58px;
    padding: 16px 16px;
    cursor: pointer;
`

type ImageZoneBackgroundProps = {
    visible?: boolean
}

const ImageZoneBackground = styled.img<ImageZoneBackgroundProps & React.HTMLAttributes<HTMLImageElement>>`
    display: ${({ visible }) => visible ? 'initial' : 'none' };

    width: 58px;
    height: 58px;

    position: relative;
    z-index: 1;
    margin-left: -58px;
    right: -73px;
    
    border-radius: 50%;
    filter: opacity(0.25);
`

type ImageZoneProps = {
    handleImageFile?: HandleImageFileType;
    backgroundImage?: Image
}

const ImageZone = ({ handleImageFile, backgroundImage }: ImageZoneProps & React.HTMLAttributes<HTMLButtonElement>): React.ReactElement => (
    <React.Fragment>
        <ImageZoneBackground src={String(backgroundImage || '')} visible={Boolean(backgroundImage)} alt='ImagePreview'/>
        <DropZone handleImageFile={handleImageFile}>
            <ImageZoneIcon src={camera} alt="Camera" />
        </DropZone>
    </React.Fragment>
)

export default ImageZone;

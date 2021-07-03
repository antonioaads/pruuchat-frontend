import React from 'react';
import styled from 'styled-components';
import camera from '../../assets/Camera.svg';
import { Image } from '../MessageList/types';
import DropZone from './DropZone';
import { HandleImageFileType } from "./types";

type ImageZoneContentProps = {
    backgroundImage?: Image
}

const ImageZoneContent = styled.img<ImageZoneContentProps & React.HTMLAttributes<HTMLImageElement>>`
    padding: 17px 17px;
    cursor: pointer;
    border-radius: 50%;

    ${({ backgroundImage }) => backgroundImage ? `
        background-image: url(${backgroundImage});
        background-repeat: no-repeat;
        background-size: 59px 59px;
        filter: opacity(0.25);
    ` : ''}
`

type ImageZoneProps = {
    handleImageFile?: HandleImageFileType;
    backgroundImage?: Image
}

const ImageZone = ({ handleImageFile, backgroundImage }: ImageZoneProps & React.HTMLAttributes<HTMLButtonElement>): React.ReactElement => (
    <DropZone handleImageFile={handleImageFile}>
        <ImageZoneContent src={camera} alt="Camera" backgroundImage={backgroundImage} />
    </DropZone>
)

export default ImageZone;

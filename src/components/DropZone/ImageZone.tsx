import React from 'react';
import styled from 'styled-components';
import camera from '../../assets/Camera.svg';
import DropZone from './DropZone';
import { HandleImageFileType } from "./types";

type ImageZoneProps = {
    handleImageFile?: HandleImageFileType;
}

const ImageZoneContent = styled.img`
    padding: 17px 17px;
    cursor: pointer;
`

const ImageZone = ({ handleImageFile }: ImageZoneProps & React.HTMLAttributes<HTMLButtonElement>): React.ReactElement => (
    <DropZone handleImageFile={handleImageFile}>
        <ImageZoneContent src={camera} alt="Camera" />
    </DropZone>
)

export default ImageZone;

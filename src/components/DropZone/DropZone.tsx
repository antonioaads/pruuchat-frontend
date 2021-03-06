import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { HandleImageFileType } from "./types";

type DropZoneProps = {
    handleImageFile?: HandleImageFileType
}

const DropZoneContainer = styled.span`
    z-index: 1000;
`

const DropZone = (props: DropZoneProps & React.HTMLAttributes<HTMLDivElement>): React.ReactElement => {
    const zoneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (zoneRef.current) setUpZone(zoneRef.current, props.handleImageFile);
    }, [])

    return (
        <DropZoneContainer ref={zoneRef}>
            {props.children}
        </DropZoneContainer>
    );
}

function setUpZone (el: HTMLDivElement, handleImageFile: HandleImageFileType | undefined) {
    // input a ser usado para segurar o elemento
    const fakeInput = document.createElement("input");
    fakeInput.type = "file";
    fakeInput.accept = "image/*";
    fakeInput.multiple = false;
    el.addEventListener('click', function() {
        fakeInput.click();
    });

    // receber e processar o arquivo
    fakeInput.addEventListener("change", function() {
        const files = fakeInput.files;
        if (files && files.length > 0 && handleImageFile)
            handleFile(files[0], handleImageFile);
    });

    // impedir que o navegador tente abrir o arquivo (comportamento padrão)
    const preventDefault = (e: Event) => {
        e.preventDefault();
          e.stopPropagation();
    }
    
    el.addEventListener('dragenter', preventDefault, false);
    el.addEventListener('dragleave', preventDefault, false);
    el.addEventListener('dragover', preventDefault, false);
    el.addEventListener('drop', preventDefault, false);

    // lidar com o evento de drop
    const handleDrop = (e: DragEvent) => {
        const data = e.dataTransfer;
        // se for um arquivo vindo do disco
        if (data && data.files && data.files.length > 0 && handleImageFile) {
            handleFile(data.files[0], handleImageFile)
        }
    }
    el.addEventListener('drop', handleDrop, false);
}

function handleFile(file: File, handleImageFile: HandleImageFileType) {
    if (validateImage(file))
        handleImageFile(file);
}

function validateImage(file: File) {
    // verificar tipo
    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (validTypes.indexOf( file.type ) === -1) {
        console.error("Invalid File Type");
        return false;
    }
 
    // verificar tamanho
    const maxSizeInBytes = 10e6; // 10MB
    if (file.size > maxSizeInBytes) {
        console.error("File too large");
        return false;
    }
 
    return true;
}

export default DropZone;

"use client"
import {useState} from "react";
import {headers} from "next/headers";
import * as wasi from "node:wasi";

export default function Profile() {
    const [imageUrl, setImageUrl] = useState('https://pacerstorage.blob.core.windows.net/legal/anime/CASE_DOCUMENT/3661a21ac295451489d6c98e93aed761/wqe/CASE_DOCUMENT_7933350ad4cb4ac2af2bdcb5fbf6c1f7?sig=9YYl3K%2FlDCiFTJQhBk90wOLDPHqnnXgJ9glIWQkojMs%3D&se=2024-06-16T04%3A36%3A23Z&sv=2019-02-02&sp=r&sr=b');

    const handleDownload = async () => {
        window.open(imageUrl);
        try {
            const response = await fetch(imageUrl, {
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/octet-stream',
                }
            });
            console.log(response)
            const blob = await response;
            var asd = await blob.blob()
            const url = URL.createObjectURL(await asd);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'downloaded-image.png';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading the image:', error);
        }
    }
    return (
        <div style={{padding: '20px'}}>
            <a href={imageUrl}> asdasdassadasdasdasdasdd</a>
            <h1>Image Downloader</h1>
            <input
                type="text"
                placeholder="Enter image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                style={{width: '100%', padding: '10px', marginBottom: '10px'}}
            />
            <button onClick={handleDownload} style={{padding: '10px 20px'}}>
                Download Image
            </button>

            <img src={imageUrl} style={{width: '100%', height: '100%'}}/>
        </div>
    );

}
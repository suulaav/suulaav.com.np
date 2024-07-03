"use client"

import {useState, useEffect} from 'react';
import {startServer} from "next/dist/server/lib/start-server";

const WebSocketImagePage = () => {
    const [sdk, setSdk] = useState(false);
    const [device, setDevice] = useState(false);
    const [start, setStart] = useState(false);
    const [take, setTake] = useState(false);
    const [image, setImage] = useState<any>(null);
    const [preview, setPreview] = useState<any>(null);
    const [socket, setSocket] = useState<any>(null);

    useEffect(() => {
        return () => {
            if (socket) {
                socket.close();
                setPreview(null)
            }
        };
    }, [socket]);

    const connectWebSocket = () => {
        const newSocket:WebSocket = new WebSocket('ws://localhost:8080/ws/stream');

        newSocket.onopen = () => {
            console.log('WebSocket connected');
            setSocket(newSocket);
        };

        newSocket.onmessage = (event) => {
            if (event.data instanceof Blob) {
                const reader:FileReader = new FileReader();
                reader.onload = () => {
                    setPreview(reader.result);
                };
                reader.readAsDataURL(event.data);
            }
        };

        newSocket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        newSocket.onclose = () => {
            console.log('WebSocket closed');
            setSocket(null);
        };
    };

    const disconnectWebSocket = () => {
        if (socket) {
            socket.close();
            setPreview(null)
        }
    };

    async function initializeSDK() {
        try {
            const response = await fetch('http://localhost:8080/initializeSDK');
            if (response.status === 200) {
                setSdk(true)
            } else {
                setSdk(false)
            }
        } catch (error) {
            console.log("error in initializeSDK" + error);
        }
    }

    async function initializeDevice() {
        try {
            const response = await fetch('http://localhost:8080/initializeDevice');
            if (response.status === 200) {
                const result = await response.json();
                setDevice(true)
            } else {
                setDevice(false)
            }
        } catch (error) {
            console.log("error in initialize device" + error);
        }
    }

    async function startTaking() {
        try {
            const response = await fetch('http://localhost:8080/start');
            if (response.status === 200) {
                setTake(true)
                setStart(true)
            } else {
                setStart(false)
                setTake(false)
            }
        } catch (error) {
            console.log("error start" + error);
        }
    }

    async function takeFingerPrint() {

        try {
            const response = await fetch('http://localhost:8080/take');
            if (response.status === 200) {
                const result = await response.blob();
                setTake(true)
                setImage(result);
            } else {
                setTake(false)
                setImage(null)
            }
        } catch (error) {
            console.log("error start" + error);

        }
    }

    return (
        <>
            <button
                className="m-9 bg-blue-800 hover:bg-green-500 disabled:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={initializeSDK}>Initialize SDK
            </button>
            <button disabled={!sdk}
                    className="m-9 bg-blue-800 hover:bg-green-500 disabled:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={initializeDevice}>Initialize Device
            </button>
            <select name="fingerPrintCaptureMode" id="fingerPrintCaptureMode">
                <option value="0x01">Roll Finger</option>
                <option value="0x02">Flat Single Finger</option>
                <option value="0x03">Flat Two Finger</option>
                <option value="0x04">Flat Left Four Fingers</option>
                <option value="0x05">Flat Right Four Fingers</option>
            </select>

            <button disabled={!device}
                    className="m-9 bg-blue-800 hover:bg-green-500 disabled:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={startTaking}>Start Capture Process
            </button>
            <button disabled={!start}
                    className="m-9 bg-blue-800 hover:bg-green-500 disabled:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={takeFingerPrint}>Capture Finger Print
            </button>


            <div>
                {!preview && start && (
                    <button className="m-9 bg-green-800 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full"
                            onClick={connectWebSocket}>Preview</button>
                )}
            </div>
            <br/>
            <div>
                {preview && start && (
                    <div>
                        <button
                            className="m-9 bg-red-800 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"
                            onClick={disconnectWebSocket}>Close
                        </button>
                        <img className="m-9" src={preview} alt="Finger Print Image"/>
                    </div>
                )}
            </div>


                {/*<h2 className="text-xl font-bold">Fingerprint Impressions</h2>*/}
                {/*<div className="grid grid-cols-5 gap-2 mt-2">*/}
                {/*    <div className="border-2 border-gray-300 h-70  items-center justify-center">*/}
                {/*        {preview && <img className="m-9" src={preview} alt="Finger Print Image"/>}*/}
                {/*        <button*/}
                {/*            className="m-9 bg-blue-800 hover:bg-green-500 disabled:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Capture*/}
                {/*        </button>*/}
                {/*        Right Thumb*/}
                {/*    </div>*/}
                {/*    <div className="border-2 border-gray-300 h-70  items-center justify-center">*/}
                {/*        {preview && <img className="m-9" src={preview} alt="Finger Print Image"/>}*/}
                {/*        <button*/}
                {/*            className="m-9 bg-blue-800 hover:bg-green-500 disabled:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Capture*/}
                {/*        </button>*/}


                {/*        Right Index*/}
                {/*    </div>*/}
                {/*    <div className="border-2 border-gray-300 h-70  items-center justify-center">*/}
                {/*        {preview && <img className="m-9" src={preview} alt="Finger Print Image"/>}*/}
                {/*        <button*/}
                {/*            className="m-9 bg-blue-800 hover:bg-green-500 disabled:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Capture*/}
                {/*        </button>*/}

                {/*        Right Middle*/}
                {/*    </div>*/}
                {/*    <div className="border-2 border-gray-300 h-70  items-center justify-center">*/}
                {/*        {preview && <img className="m-9" src={preview} alt="Finger Print Image"/>}*/}
                {/*        <button*/}
                {/*            className="m-9 bg-blue-800 hover:bg-green-500 disabled:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Capture*/}
                {/*        </button>*/}


                {/*        Right Ring*/}
                {/*    </div>*/}
                {/*    <div className="border-2 border-gray-300 h-70  items-center justify-center">*/}
                {/*        {preview && <img className="m-9" src={preview} alt="Finger Print Image"/>}*/}

                {/*        Right Little*/}
                {/*    </div>*/}
                {/*    <div className="border-2 border-gray-300 h-70  items-center justify-center">*/}
                {/*        {preview && <img className="m-9" src={preview} alt="Finger Print Image"/>}*/}
                {/*        <button*/}
                {/*            className="m-9 bg-blue-800 hover:bg-green-500 disabled:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Capture*/}
                {/*        </button>*/}

                {/*        Left Thumb*/}
                {/*    </div>*/}
                {/*    <div className="border-2 border-gray-300 h-70  items-center justify-center">*/}
                {/*        {preview && <img className="m-9" src={preview} alt="Finger Print Image"/>}*/}
                {/*        <button*/}
                {/*            className="m-9 bg-blue-800 hover:bg-green-500 disabled:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Capture*/}
                {/*        </button>*/}

                {/*        Left Index*/}
                {/*    </div>*/}
                {/*    <div className="border-2 border-gray-300 h-70  items-center justify-center">*/}
                {/*        {preview && <img className="m-9" src={preview} alt="Finger Print Image"/>}*/}
                {/*        <button*/}
                {/*            className="m-9 bg-blue-800 hover:bg-green-500 disabled:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Capture*/}
                {/*        </button>*/}

                {/*        Left Middle*/}
                {/*    </div>*/}
                {/*    <div className="border-2 border-gray-300 h-70  items-center justify-center">*/}
                {/*        {preview && <img className="m-9" src={preview} alt="Finger Print Image"/>}*/}
                {/*        <button*/}
                {/*            className="m-9 bg-blue-800 hover:bg-green-500 disabled:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Capture*/}
                {/*        </button>*/}

                {/*        Left Ring*/}
                {/*    </div>*/}
                {/*    <div className="border-2 border-gray-300 h-70  items-center justify-center">*/}
                {/*        {preview && <img className="m-9" src={preview} alt="Finger Print Image"/>}*/}
                {/*        <button*/}
                {/*            className="m-9 bg-blue-800 hover:bg-green-500 disabled:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Capture*/}
                {/*        </button>*/}

                {/*        Left Little*/}
                {/*    </div>*/}
                {/*    <div className="border-2 border-gray-300 h-70  items-center justify-center col-span-2">*/}
                {/*        {preview && <img className="m-9" src={preview} alt="Finger Print Image"/>}*/}
                {/*        <button*/}
                {/*            className="m-9 bg-blue-800 hover:bg-green-500 disabled:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Capture*/}
                {/*        </button>*/}

                {/*        Left Four*/}
                {/*        Fingers*/}
                {/*        Taken Simultaneously*/}
                {/*    </div>*/}
                {/*    <div className="border-2 border-gray-300 h-70  items-center justify-center col-span-1">*/}
                {/*        <div className="flex">*/}
                {/*            <div className="border-2 border-gray-300 h-70 flex-grow items-center justify-center">*/}
                {/*                {preview && <img className="m-9" src={preview} alt="Finger Print Image"/>}*/}
                {/*                <button*/}
                {/*                    className="m-9 bg-blue-800 hover:bg-green-500 disabled:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Capture*/}
                {/*                </button>*/}

                {/*                Left*/}
                {/*                Thumb*/}
                {/*            </div>*/}
                {/*            <div className="border-2 border-gray-300 h-70 flex-grow items-center justify-center">*/}
                {/*                {preview && <img className="m-9" src={preview} alt="Finger Print Image"/>}*/}
                {/*                <button*/}
                {/*                    className="m-9 bg-blue-800 hover:bg-green-500 disabled:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Capture*/}
                {/*                </button>*/}

                {/*                Right Thumb*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="border-2 border-gray-300 h-70  items-center justify-center col-span-2">*/}
                {/*        {preview && <img className="m-9" src={preview} alt="Finger Print Image"/>}*/}
                {/*        <button*/}
                {/*            className="m-9 bg-blue-800 hover:bg-green-500 disabled:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Capture*/}
                {/*        </button>*/}

                {/*        Right*/}
                {/*        Four Fingers*/}
                {/*        Taken Simultaneously*/}
                {/*    </div>*/}
                {/*</div>*/}

            {/*{take && (*/}
            {/*    <div>*/}
            {/*        <img className="m-9" src={image} alt="Finger Print Image"/>*/}
            {/*    </div>*/}
            {/*)}*/}
        </>
    )
        ;
};

export default WebSocketImagePage;
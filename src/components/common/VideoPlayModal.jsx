
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaPlay, FaTimes } from "react-icons/fa";


const VideoPlayModal = ({ handlePlayVideo, video, setIsPlaying, isPlaying }) => {


    const handleClose = (e) => {
        if (e.target.id === "container") {
            handlePlayVideo();
        }
    };
    const handleCloseVideo = () => {
        handlePlayVideo();
    };

    return ReactDOM.createPortal(

        <div
            id="container"
            onClick={handleClose}
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        >
            <div className="flex items-center justify-center p-12 md:p-2">
                <div className="relative flex items-center justify-center gap-5">
                    <video
                        src={video}
                        controls
                        autoPlay
                        className=" w-full md:w-[750px]  h-full object-cover rounded-2xl"
                    />
                    <div className='flex'>
                        <button
                            onClick={handleCloseVideo}
                            className="absolute top-0  bg-white rounded-full p-2 shadow-md"
                            aria-label="Close video"
                        >
                            <FaTimes className="text-black w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body // Mounts the modal to the body
    );
};

export default VideoPlayModal;

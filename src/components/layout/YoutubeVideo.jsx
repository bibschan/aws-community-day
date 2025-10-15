import React from 'react'

function YoutubeVideo() {
    return (
        <div className=' flex justify-center w-full'>
            <div className="relative w-3/4 md:w-1/2 h-auto aspect-video "> {/* 16:9 aspect ratio */}
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/F3PXdQSDmro"
                    title="AWS Community Day Vancouver - Message from Jeff Barr"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </div>
    )
}

export default YoutubeVideo

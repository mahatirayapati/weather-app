function BackgroundVideo({backgroundVideo }){
    console.log(backgroundVideo);
    return(
        <video
       key={backgroundVideo}
    className="background-video"
    autoPlay
    loop
    muted
    playsInline
     >
    <source src={backgroundVideo} type="video/mp4" />
    </video>
    );
}
export default BackgroundVideo;
import NodeMediaServer from 'node-media-server';
 
const config = {
    rtmp: {
        port: 1935,
        // size (in bytes) of the chunks used for transmitting video/audio data over the RTMP protocol.
        chunk_size: 60000, 
        // caching of Group of Pictures (GOP) data
        // can improve performance by reducing the need for repeated GOP calculations
        gop_cache: true,
        // interval (in seconds) at which the RTMP server will send ping messages to connected clients to maintain the connection.
        ping: 60,
        // timeout (in seconds) for the RTMP server to wait for a response to a ping message before considering the client disconnected.
        ping_timeout: 30
      },
      http: {
        // port: Specifies the port number on which the HTTP server will listen. This server serves HLS and DASH streams to clients.
        port: 8000,
        // Specifies the directory where the media files (e.g., HLS and DASH segments) will be stored.
        mediaroot: './media',
        // Specifies the CORS (Cross-Origin Resource Sharing) policy for the HTTP server. It defines which origins are allowed to access the server's resources.
        allow_origin: '*'
      },
      trans: {
        // Specifies the path to the ffmpeg executable. 
        // This is required for transcoding media files into different formats (e.g., HLS and DASH) for streaming.
        ffmpeg: '/opt/homebrew/bin/ffmpeg',
        // Specifies an array of transcoding tasks. Each task defines how media files are transcoded for a specific application (e.g., "live" application).
        tasks: [
          {
            app: 'live',
            hls: true,
            hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
            dash: true,
            dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
          }
        ]
      }
};
 
var nms = new NodeMediaServer(config)
nms.run();
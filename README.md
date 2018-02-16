# HLSFetchServer
An express.js app that downloads a playable HLS playlist and associated video segments so that they can be hosted on the server statically for playback.


# Goal
Please write an express.js app that downloads a playable HLS playlist and associated video segments so that they can be hosted on your server statically for playback.
# Requirements
Make an API endpoint accessible Express app.
Support the following route:
1. GET /stream?hlsurl=<hlsurl> that takes a query parameter of an existing remote hls URL (.m3u8 or .m3u) and returns the locally hosted hls playlist URL (.m3u8 or .m3u).
The server-stored copy of the hls files must have an hls playlist file in .m3u8/.m3u format that has be modified to point to the server-stored video segment files (do not stream the video segment paths from the remote hls server!).
The hls playlist should use relative (not absolute) paths to video segments.
2. The downloaded hls files should support all hls files in the remote file (all bitrates, for example)
Each folder of server hls content (playlist, folders of hls video segments by resolution) should be uniquely named to avoid conflict based on the remote hls url. For clarity, if the same hls remote stream is downloaded a second time, it would overwrite the original downloaded hls folder since the same hls url was used. When a new hls url is downloaded, it will never conflict in folder names.
Sample Input Data to Test

   `https://player.vimeo.com/external/249414131.m3u8?s=10bf9d088fff85588fdd56dacd5f9f716c1c8dd5
   `

   `https://player.vimeo.com/external/254060783.m3u8?s=268bba3c32a74512cf2491891689a9760bbbecfa
   `

   `https://embedwistia-a.akamaihd.net/deliveries/52ee0345bd552620de2254c81d7a1eec4fb1159d.m3u8
   `

# Considerations
While you can build your own solution from scratch, feel free to use/fork existing libraries, such as https://github.com/videojs/hls-fetcher
You can test your server-hosted playlist URLs here https://developer.jwplayer.com/tools/stream-tester/. Especially ensure the url paths for dynamic bitrate work properly.
You can create this code locally, but test a statically cloud-hosted playlist URL to ensure it is setup correctly. Your submission will be evaluated in a cloud9 instance.
# Submission
Please submit your solution at your convenience to node@playposit.com

while true; do
    streamer -f jpeg -o out.jpeg -q
    node webcam.js
done

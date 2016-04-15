while true; do
    {	
    	# try block
    	streamer -f jpeg -o out.jpeg -q
    } || {
    	# catch block
    	echo "[Error: failed to open video camera!]"
    	exit 1
    }

    node webcam.js
done

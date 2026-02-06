#!/bin/bash
# Start local web server for Phuquymermaids landing page

echo "Starting Phuquymermaids landing page server..."
echo "Server will be available at: http://localhost:8000"
echo "Press Ctrl+C to stop the server"
echo ""

cd "$(dirname "$0")"
python3 -m http.server 8000

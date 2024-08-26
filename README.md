# GestureFlow

GestureFlow is a cutting-edge browser extension that allows users to control their browser using intuitive hand gestures. Powered by Mediapipe and OpenCV, GestureFlow provides a seamless, hands-free browsing experience.

## Features

- **Zoom In/Out**: Pinch your fingers together or spread them apart to zoom in or out on any webpage.
- **Scroll Up/Down**: keep your 2 fingers still on left end or right end to scroll.
- **Tab Navigation**: Move to the next or previous tab with a simple swipe left or right.

## Tech Stack

- **Client Side**: JavaScript
- **Server Side**: Flask
- **Gesture Recognition**: Mediapipe and OpenCV

### Prerequisites

- Python 3.10
- Chrome Browser
- Flask
- OpenCV
- Mediapipe

### Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/GestureFlow.git
    cd GestureFlow
    ```

2. **Start the Flask server:**

    ```bash
    cd '.\Server(Flask)\
    python server.py
    ```

3. **Load the extension in your browser:**

    - Open your browser's extensions page.
    - Enable "Developer mode."
    - Click "Load unpacked" and select the `client` directory.

## Usage
1. Launch the Flask server to start processing gesture inputs.
2. Open your browser with GestureFlow loaded.
3. Use the supported hand gestures to control your browser:

    - **Pinch** to zoom in/out.
    - **two fingers up and stand still on right or left** to scroll.
    - **Swipe left/right** to navigate between tabs.

## Demo
Check out our demo video to see GestureFlow in action!

[Demo Video](https://youtu.be/LPqeBlpDOKw)

## Contributing
We welcome contributions! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contact
- **Developers**: [Madan](mailto:madangopalboddu123@gmail.com), [Lokesh](mailto:lokeshyarramalluyarramalluloke@gmail.com)
- **Project Link**: [GitHub Repo](https://github.com/madan2248c/GestureFlow)


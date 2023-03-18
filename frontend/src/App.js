import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";
import { useState } from "react";

function App() {
    const [file, setFile] = useState(null);

    const handleDetectEmotion = async (e) => {
        e.preventDefault();
        let form = new FormData();
        form.append("file", file);
        await axios({
            method: "POST",
            url: "http://localhost:5000/detect",
            data: form,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    };

    const handleChangeFile = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0]);
    };

    return (
        <>
            <Header />
            <main className="main">
                <label for="images" class="drop-container">
                    <span class="drop-title">Drop files here</span>
                    or
                    <input
                        type="file"
                        id="images"
                        accept="video/*"
                        required
                        onChange={handleChangeFile}
                    />
                </label>

                <div style={{ width: "100%", textAlign: "center" }}>
                    <button
                        className="btn-primary"
                        onClick={handleDetectEmotion}
                    >
                        Detect
                    </button>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;

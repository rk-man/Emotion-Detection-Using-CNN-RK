from flask import Flask
from TestEmotionDetector import detectEmotion
from flask import request
from flask_cors import CORS
import os
app  =Flask(__name__)
app.config['FILE_STORAGE'] = 'F:\\AI and ML\\Projects\\Emotion_detection_with_CNN\\backend\\static'
CORS(app)

@app.route("/detect", methods = ["POST"])
def members():
    file = request.files.get('file')
    if(file):
        filename = file.filename
        file.save(os.path.join(app.config["FILE_STORAGE"], filename))
        detectEmotion(filename)
    else:
        detectEmotion()
    return {"members":["member1","member2"]}


if __name__ == "__main__":
    app.run(debug=True)
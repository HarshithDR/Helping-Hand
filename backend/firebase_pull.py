from firebase import firebase
import json

firebase = firebase.FirebaseApplication("https://project111111-fbd93-default-rtdb.firebaseio.com/")

with open("sample1.json", "r") as f:
	file_contents = json.load(f)
firebase.post('/results/',file_contents)
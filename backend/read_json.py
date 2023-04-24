# Python program to read
# json file


import json

# JSON string
a = '{"name": "Bob", "languages": "English"}'

# deserializes into dict
# and returns dict.

y = json.loads(a)

print("JSON string = ", y)
print()

# JSON file
f = open("C:\\Users\\91911\\Desktop\\sample.json", "r")

# Reading from file
data = json.loads(f.read())

# Iterating through the json
# list
for i in data['emp_details']:
    print(i)

# Closing file
f.close()
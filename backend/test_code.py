import smtplib
import json
from firebase import firebase
from geopy.geocoders import Nominatim


from_address = '************@gmail.com'

def sendemail(to, content):
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.login(from_address, '*************')
    server.sendmail(from_address ,to, content)
    server.close()

# def json_extractiono():
#     with open("sample.json1", "r") as f:
#     file_contents = json.load(f)
#     noofperson = file_contents['no0fPerson']
#     personcondition = file_contents['personCondition']
#     agecategory = file_contents['ageCategory']
#     personseenat = file_contents['personSeenAt']
#     location = file_contents['location']
#     category = file_contents['category']
#     return noofperson, personseenat, personcondition, agecategory, location, category


if __name__ == '__main__':

    firebase = firebase.FirebaseApplication("*****************************")
    result = firebase.get('****************','')

    # with open("sample1.json", "r") as f:
    # file_contents = json.load(f)

    # print(result)
    for i in result:
         # print(i)
        file_contents = result[i]
        noofperson = str(file_contents['noOfPerson'])
        personcondition = file_contents['personCondition']
        agecategory = file_contents['ageCategory']
        personseenat = file_contents['personSeenAt']
        location = file_contents['location']
        category = file_contents['category']

        locator = Nominatim(user_agent="mygeocoder")
        coordinates = location
        location_address = locator.reverse(coordinates)
        location12 = location_address.raw
        # print(location12)

        content = (noofperson + " person have been reported by someone"
                                " at the google maps location provided below. The person is in a"
                                " " + personcondition + " conditon. Please do look into the matter and do write back to us if there is "
                                "any way in which we can be of further help to you.\n"
                                "\nLocation:" + location12['display_name'] +
                                "\n\nThanks and regards,\n Helping Hand Team.")
        # print(content)
        sendemail('******************', content)


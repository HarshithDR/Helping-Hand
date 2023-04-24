
from geopy.geocoders import Nominatim


locator = Nominatim(user_agent="mygeocoder")
coordinates = "53.480837, -2.244914"
location = locator.reverse(coordinates)

print(location.address)
import smtplib

from_address = 'vindieselvd123123@gmail.com'

def sendemail(to, content):
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.login(from_address, 'qwerty0987!@#$')
    server.sendmail(from_address ,to, content)
    server.close()

if __name__ == '__main__':

    sendemail('amith13082001@gmail.com','hi')
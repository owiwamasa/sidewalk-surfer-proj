from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    Demo = User(
        username="Demo", email="Demo@email.com", password="Demo", profilepic="https://news.blr.com/app/uploads/sites/3/2018/07/Demo-5.jpg")
    John = User(
        username="John", email="John@email.com", password="Jojo", profilepic="https://media-exp1.licdn.com/dms/image/C4D03AQHrMl3CfenA2w/profile-displayphoto-shrink_200_200/0/1517529181712?e=1632960000&v=beta&t=4JAXxiLdfV1MtX1q61MOXz2rdZYqRfoE37HzX2zlq6E")
    Conner = User(
        username="Conner", email="Conner@email.com", password="Conner", profilepic="https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png")
    David = User(
        username="David", email="David@email.com", password="David", profilepic="https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png")
    Owen = User(
        username="Owen", email="Owen@email.com", password="Owen", profilepic="https://media-exp1.licdn.com/dms/image/C4E03AQEMA-yoL7vrDg/profile-displayphoto-shrink_200_200/0/1627330413871?e=1633564800&v=beta&t=c0iEdnzdDJ-pgFe-kW1qbR1IvBo6Akt5q_h4A0alA74")
    Messi = User(
        username="Messi", email="Messi@email.com", password="Messi", profilepic="https://static.footballtransfers.com/images/cn/image/upload/q_90, w_1200, h_800, ar_3.2/footballcritic/s8xqnig1iiyq75fqldqj")
    Christiano = User(
        username="Christiano", email="Christiano@email.com", password="Christiano", profilepic="https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png")
    Parthenia = User(
        username="Parthenia", email="Parthenia@email.com", password="Parthenia", profilepic="https://thumbs.dreamstime.com/z/female-silhoutte-avatar-default-profile-picture-photo-placeholder-vector-illustration-130555145.jpg")
    MoSalah = User(
        username="Mo Salah", email="MoSalah@email.com", password="MoSalah", profilepic="https://static.wikia.nocookie.net/liverpoolfc/images/6/68/MSalah2020.jpeg/revision/latest?cb=20200803041821")
    Javier = User(
        username="Javier", email="Javier@email.com", password="Javier", profilepic="https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png")

    db.session.add(Demo)
    db.session.add(John)
    db.session.add(Conner)
    db.session.add(David)
    db.session.add(Owen)
    db.session.add(Messi)
    db.session.add(Christiano)
    db.session.add(Parthenia)
    db.session.add(MoSalah)
    db.session.add(Javier)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

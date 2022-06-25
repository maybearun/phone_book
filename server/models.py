#the database table should contain one table with the fields first_name, last_name, phone_number
from database import Base
from sqlalchemy import Column, Integer, String


class PhoneBook(Base):
    __tablename__='phone_book'
    id=Column(Integer, primary_key=True, nullable=False)
    first_name=Column(String, nullable=False )
    last_name=Column(String, nullable=False)
    phone_number=Column(String, nullable=False)

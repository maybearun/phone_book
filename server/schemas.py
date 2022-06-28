from pydantic import BaseModel

#validate input from frontend
class PhoneInp(BaseModel):
    first_name:str
    last_name:str
    phone_number:int

#for response model
class PhoneOut(PhoneInp):
    id:int
    class Config:
	    orm_mode=True
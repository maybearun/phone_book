from pydantic import BaseModel

class PhoneInp(BaseModel):
    first_name:str
    last_name:str
    phone_number:int

class PhoneOut(BaseModel):
    first_name:str
    last_name:str
    phone_number:int
    
    class Config:
        orm_mode:True
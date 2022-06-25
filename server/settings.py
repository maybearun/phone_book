from pydantic import BaseSettings

class Settings(BaseSettings):
    database_name:str
    database_password:str
    database_username:str
    database_hostname:str

    class Config:
        env_file = ".env"
        env_file_encoding = 'utf-8'
        
settings=Settings()
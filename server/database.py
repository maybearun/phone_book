from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from settings import settings

#url of the database
SQLALCHEMY_DATABASE_URL=f"postgresql://{settings.database_username}:{settings.database_password}@{settings.database_hostname}/{settings.database_name}"

#create_engine creates an engine that talks to the database
engine=create_engine(SQLALCHEMY_DATABASE_URL)

#sessionmaker creates a sqlalchemy session
Sessionlocal=sessionmaker(autocommit=False,autoflush=False,bind=engine)

#declarative_base() helps in object relational mapping
Base=declarative_base()

def get_db():
    db=Sessionlocal()
    try:
        yield db
    finally:
        db.close()

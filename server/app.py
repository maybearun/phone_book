from fastapi import Depends, FastAPI,Response,HTTPException,status
from sqlalchemy.orm import Session
import schemas,models,database
from database import get_db
from fastapi.middleware.cors import CORSMiddleware
#create the fastapi instance
app=FastAPI()

#create the tables in database
models.Base.metadata.create_all(bind=database.engine)

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
#endpoints start here
@app.get('/')
def hello():
    return {'message': 'hello'}


@app.get('/api/v1/contacts',response_model=list[schemas.PhoneOut])
def get_contacts(db:Session=Depends(get_db)):
    all_contacts=db.query(models.PhoneBook).all()
    return all_contacts

@app.post('/api/v1/contacts',status_code=status.HTTP_201_CREATED,response_model=schemas.PhoneOut)
def create_contact(payload:schemas.PhoneInp,db:Session=Depends(get_db)):
    new_contact=models.PhoneBook(**payload.dict())
    db.add(new_contact)
    db.commit()
    db.refresh(new_contact)
    return new_contact


@app.get('/api/v1/contacts/{id}',response_model=schemas.PhoneOut)
def get_contact_id(id:int, db:Session=Depends(get_db)):
    one_contact=db.query(models.PhoneBook).filter(models.PhoneBook.id==id).first()
    if not one_contact:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f'contact with id {id} was not found')
    return one_contact

@app.put('/api/v1/contacts/{id}',response_model=schemas.PhoneOut)
def update_contact(id:int,payload:schemas.PhoneInp,db:Session=Depends(get_db)):
    edit_contact=db.query(models.PhoneBook).filter(models.PhoneBook.id==id)
    if not edit_contact.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f'contact with id {id} was not found')
    else:
        edit_contact.update(payload.dict())
        db.commit()
        return edit_contact.first()

@app.delete('/api/v1/contacts/{id}')
def delete_contact(id:int, db:Session=Depends(get_db)):
    delete_contact=db.query(models.PhoneBook).filter(models.PhoneBook.id==id)
    if not delete_contact.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f'contact with id {id} was not found')
    else:
        delete_contact.delete()
        db.commit()
        return Response(status_code=status.HTTP_204_NO_CONTENT)


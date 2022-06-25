from fastapi import FastAPI
import schemas,models,database


app=FastAPI()
models.Base.metadata.create_all(bind=database.engine)



@app.get('/')
def hello():
    return {'message': 'hello'}


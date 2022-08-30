## personal portofolio 


### Sections 
 - 

## Developing or contribuite 

With Docker 


```
- Docker 
- visual studio scode with remote container plugin
```

Without Docker 


```
 - node v16
 - setup a postgress database on windows/linux
```
To ensure the conection between two containers, in this case frontend + api, we are creating a newtork bridge with the subnet 172.20.0.0/16


```
docker network create --subnet=172.20.0.0/16 portofolio-network
```

On Each repo devcontainer have preconfigured to have the specific ip, when the developing container will start each one will have the next ip 


    - 172.20.0.10 ( FRONTEND )
    - 172.20.0.5  ( BACKEND  )
    - 172.20.0.20 ( DATABASE )

Run postgress in one command ( with docker ) for local developing


```
docker run -d --name portofolio_database -v my_dbdata:/var/lib/postgresql/data --network=poste-network --ip 172.20.0.20 -e POSTGRES_PASSWORD=password -p 5432:5432 postgres:latest
```
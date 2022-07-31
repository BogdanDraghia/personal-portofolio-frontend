## MY personal portofolio + blog 

Description 

This website is ....

How to contribuite



## Developing 

What you need 
    - Docker 
    - VsCode 
        - Remote extension

1. create network with bridge mode 
 
    ```
    docker network create --subnet=172.20.0.0/16 portofolio-network
    ```

Devcontainer have preconfigured to have be default ip, 

    - 172.20.0.10 ( FRONTEND )
    - 172.20.0.5  ( BACKEND  )
    - 172.20.0.20 ( DATABASE )

2. Run postgress locally 

    ```
    docker run -d --name portofolio_database -v my_dbdata:/var/lib/postgresql/data --network=poste-network --ip 172.20.0.20 -e POSTGRES_PASSWORD=password -p 5432:5432 postgres:latest
    ```
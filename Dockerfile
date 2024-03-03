#Get the lastest mysql image
FROM mysql:latest

#Set environment
ENV MYSQL_DATABASE=blogvr_db
ENV MYSQL_ROOT_PASSWORD=bryan123
#User and password
ENV MYSQL_USER=bryan
ENV MYSQL_PASSWORD=bryan123
#Copy database schema
COPY schema.sql ./docker-entrypoint-initdb.d/
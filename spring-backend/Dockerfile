FROM openjdk:11

WORKDIR /app

COPY . .

RUN ./mvnw package

EXPOSE 8080

CMD [ "java", "-jar", "./target/hobbie-backend-0.0.1-SNAPSHOT.jar"]

#ENTRYPOINT ["java","-jar","/app.jar"]
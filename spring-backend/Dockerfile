FROM openjdk:11 AS build

WORKDIR /app

COPY . .

RUN ./mvnw package

FROM bellsoft/liberica-runtime-container:jdk-17-musl

WORKDIR /app

COPY --from=build /app/target/hobbie-backend-0.0.1-SNAPSHOT.jar ./app.jar

EXPOSE 8080

ENTRYPOINT [ "java", "-jar", "./app.jar" ]

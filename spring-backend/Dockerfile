FROM openjdk:11 AS base

WORKDIR /app

COPY . .


FROM base AS dev

EXPOSE 8080

CMD ["./mvnw", "spring-boot:run"]

FROM base AS build

ARG SPRING_DATASOURCE_URL

ENV SPRING_DATASOURCE_URL=$SPRING_DATASOURCE_URL

RUN ./mvnw package 


FROM bellsoft/liberica-runtime-container:jdk-11-musl AS prod


WORKDIR /app

COPY --from=build /app/target/hobbie-backend-0.0.1-SNAPSHOT.jar ./app.jar

EXPOSE 8080

ENTRYPOINT [ "java", "-jar", "./app.jar" ]

# TaskManagementApp
Business Solver Internship Project 

## Dependencies

This project uses the following dependencies:

- Spring Boot Starter Data JPA
- Spring Boot Starter Web
- H2 Database (runtime)
- Lombok (optional)
- **MySQL Connector/J 8.0.33** *(Ensure you use version 8.0.33 to avoid compatibility issues)*.

## Known Issues / Version History

### MySQL Connector/J Version Update
- The dependency `mysql-connector-java` was downgraded to version `8.0.33` due to compatibility issues with Maven and IntelliJ when using version `8.0.34`.
- If you're using Maven, ensure that your `pom.xml` includes the following dependency:

  ```xml
  <dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
      <version>8.0.33</version>
  </dependency>



## Troubleshooting

### Error: Could not find artifact mysql:mysql-connector-java:pom:8.0.34
If you encounter this error, ensure your Maven repository is up to date by:
1. Running `mvn clean install` to refresh dependencies.
2. Using the **MySQL Connector/J version 8.0.33** in your `pom.xml`.

If the error persists, ensure IntelliJ is using the bundled Maven 3.x version or install Maven manually and point IntelliJ to it.

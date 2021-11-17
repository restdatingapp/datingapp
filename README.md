
# R,E,S,T Dating Application

REST is creating connections for users and sparking love online. REST dating allows users to connect via our messaging system. You can be alerted to likes from other users via email and choose what you want others to see about you. Find users that are nearby or find users from far away. Typical dating app functionality applies such as viewing profiles sending likes and messaging.

**Technologies Used**
* Java 8
* Postgresql Database
* AWS RDS
* Junit for unit testing
* Log4j for logging
* DAO design pattern for data connectivity
* JavaScript
* Bootstrap
* Maven
* React
* TypeScript
* Redux
* Spring Boot
* Hibernate
* Jenkins
* DevOps
* AWS S3
* AWS EC2

**Features**

Users can
* Register.
* Login/Logout.
* Update their information
* User can see other user profiles which include pictures.
* User can send messages to other users.
* User can use privacy rules show only what they want to show and to who they want to show it.
* User can set their search parameters.

**Technical Features**

* There is a Jenkins pipeline setup, and the backend application is running on an EC2
* The frontend application is hosted on an AWS S3
* The application stores/retrieves images from an AWS S3 bucket
* There is feature with Java Mail to send emails to your users

**Getting Started**

Download the files for the project from the remote repository and place them in the repository on your machine Push the code to your remote repository, and import the project into STS as a Maven project Create a new Repository on GitHub. For running this project you need to Import the Maven project in STS, and have an AWS RDS PostgreSQL database, and put your database connection settings in JDBC properties in the project. You also need to set an AWS EC2, two AWS S3 and a two Jenkins setups for the applicatopn runs properly.

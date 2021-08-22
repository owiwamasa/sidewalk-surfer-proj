# Sidewalk Surfers

<p align='center'>
  <img src='https://i.imgur.com/2y2FmRJ.png' width='200px' >
</p>

Sidewalk Surfers, an <a href='https://instagram.com'>Instagram</a> clone, is an app for users to discover skateboarding spots in the Los Angeles area and share content from these locations. It is built using React.js, Redux.js, and Flask.

View live: <a href='https://sidewalk-surfers.herokuapp.com/'>Sidewalk Surfers App</a>

<br />

## Features

- Sign up/in with email
- Search in search bar by spot and user
- Google Map with clickable markers for each skate spot
- Create and edit skate spots
- Create, edit, and delete media posts at a specific skate spot
- Create, edit, and delete comments on media posts
  <br />

## Home Page:

<img src='https://i.imgur.com/ShaOIz7.png' width='500px' />
<br />

## Spot Page:

<img src='https://i.imgur.com/WPj7Rfs.png' width='500px' />
<br />

## Profile Page:

<img src='https://i.imgur.com/oGNQZ5p.png' width='500px' />
<br />

## Technologies Used

- Languages:
  ![](https://img.shields.io/badge/-JavaSript-ffffff?style=flat-square&logo=javascript&logoColor=ff0000)
  ![](https://img.shields.io/badge/-Python-ffffff?style=flat-square&logo=python&logoColor=ff0000)
- Frontend:
  ![](https://img.shields.io/badge/-React-ffffff?style=flat-square&logo=react&logoColor=ff0000)
  ![](https://img.shields.io/badge/-Redux-ffffff?style=flat-square&logo=redux&logoColor=ff0000)
  ![](https://img.shields.io/badge/-CSS3-ffffff?style=flat-square&logo=css3&logoColor=ff0000)
  ![](https://img.shields.io/badge/-HTML5-ffffff?style=flat-square&logo=html5&logoColor=ff0000)
- Backend:
  ![](https://img.shields.io/badge/-Flask-ffffff?style=flat-square&logo=flask&logoColor=ff0000)
  ![](https://img.shields.io/badge/-SQLAlchemy-ffffff?style=flat-square&logo=sqlalchemy&logoColor=ff0000)
  ![](https://img.shields.io/badge/-PostgreSQL-ffffff?style=flat-square&logo=postgresql&logoColor=ff0000)

<br />

## Development Team

Conner Underhill:
<br />
<a href='cunderhillosx@gmail.com'>
<img src="https://i.imgur.com/jLLwTjh.png" width="25" height="25">
</a>
<a href='https://www.linkedin.com/in/conner-underhill-64b3921a2'>
<img src="https://logodix.com/logo/91031.png" width="25" height="25">
</a>
<a href='https://github.com/conneru'>
<img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" width="25" height="25">
</a>

David Huang:
<br />
<a href='daveman@gmail.com'>
<img src="https://i.imgur.com/jLLwTjh.png" width="25" height="25">
</a>
<a href='https://www.linkedin.com/in/david-h-374b30154/'>
<img src="https://logodix.com/logo/91031.png" width="25" height="25">
</a>
<a href='https://github.com/deardaveed'>
<img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" width="25" height="25">
</a>

John Wanis:
<br />
<a href='john.wanis@yahoo.com'>
<img src="https://i.imgur.com/jLLwTjh.png" width="25" height="25">
</a>
<a href='https://www.linkedin.com/in/john-wanis-764957138/'>
<img src="https://logodix.com/logo/91031.png" width="25" height="25">
</a>
<a href='https://github.com/Jomix-13'>
<img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" width="25" height="25">
</a>

Owen Iwamasa:
<br />
<a href='owiwamasa@gmail.com'>
<img src="https://i.imgur.com/jLLwTjh.png" width="25" height="25">
</a>
<a href='https://www.linkedin.com/in/owen-iwamasa-6ab3a9166/'>
<img src="https://logodix.com/logo/91031.png" width="25" height="25">
</a>
<a href='https://github.com/owiwamasa'>
<img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" width="25" height="25">
</a>

## Getting started (Installation)

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/owiwamasa/sidewalk-surfer-proj
   ```

2. Install dependencies

   ```bash
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
   ```

3. Install TimeAgo and google-map-react

   ```bash
   npm install timeago-react
   ```

   ```bash
   npm install --save google-map-react
   ```

4. Create a **.env** file based on the .env.example with proper settings for your
   development environment

5. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

6. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

---

_IMPORTANT!_
If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
You can do this by running:

```bash
pipenv lock -r > requirements.txt
```

_ALSO IMPORTANT!_
psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.

---

8. Start up Flask and React

   -At the root of the project folder, run:

   ```bash
   flask run
   ```

   -In the react-app folder, run:

   ```bash
   npm start
   ```

<!-- ## Deploy to Heroku

1. Before you deploy, don't forget to run the following command in order to
   ensure that your production environment has all of your up-to-date
   dependencies. You only have to run this command when you have installed new
   Python packages since your last deployment, but if you aren't sure, it won't
   hurt to run it again.

   ```bash
   pipenv lock -r > requirements.txt
   ```

2. Create a new project on Heroku
3. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
4. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
5. Run

   ```bash
   heroku login
   ```

6. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

7. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
8. Push your docker container to heroku from the root directory of your project.
   (If you are using an M1 mac, follow [these steps below](#for-m1-mac-users) instead, then continue on to step 9.)
   This will build the Dockerfile and push the image to your heroku container registry.

   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```

9. Release your docker container to heroku

   ```bash
   heroku container:release web -a sidewalk-surfers
   ```

10. set up your database

    ```bash
    heroku run -a sidewalk-surfers flask db upgrade
    heroku run -a sidewalk-surfers flask seed all
    ```

11. Under Settings find "Config Vars" and add any additional/secret .env
    variables.

12. profit

### For M1 Mac users

(Replaces **Step 8**)

1. Build image with linux platform for heroku servers. Replace
   sidewalk-surfers with your own tag:

   ```bash=
   docker buildx build --platform linux/amd64 -t sidewalk-surfers .
   ```

2. Tag your app with the url for your apps registry. Make sure to use the name
   of your Heroku app in the url and tag name:

   ```bash=2
   docker tag sidewalk-surfers registry.heroku.com/sidewalk-surfers/web
   ```

3. Use docker to push the image to the Heroku container registry:

   ```bash=3
   docker push registry.heroku.com/sidewalk-surfers/web
   ``` -->

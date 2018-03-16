# nosql-app

## import the data
You should have curl installed, run
```
curl -XPUT "localhost:9200/_bulk" -H "Content-Type: application/json" --data-binary @movies_elastic.json
```

## run the application

run
```
npm install
```
in order to install the dependencies, then run
```
npm start
```
to launch the app, open your favorite browser and go to http://localhost:3000/

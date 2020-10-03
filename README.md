Notes on how to run each aspect: Please follow carefully.

### Frontend:
Download the current [Node](https://nodejs.org/en/blog/release/v14.12.0/)

Download npm version 6.14.8

Navigate to React-Frontend/mula-money-app & type in 

```
npm install
```

This should take 500 long years, and after that -- You should be able to do


```
npm start
```

In that same folder


### Backend: 

Download [Docker](https://docs.docker.com/docker-for-windows/install/)

After you download docker:

Navigate to the GOAPI folder and type in

```
docker-compose up -d
```

This should spin up the mongo container -- And your done. It's running in detahced mode



# Now for GO:

I assume you're both using [Windows](https://www.freecodecamp.org/news/setting-up-go-programming-language-on-windows-f02c8c14e2f/)

Navigate to the root and type in

```
go run GOAPI/cmd/api/main.go
```

This should run the golang backend and sync to the mongo db container -- If we're having trouble with docker, we don't really need a db -- we can do everything in memory
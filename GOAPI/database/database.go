package database

import (
"context"
"go.mongodb.org/mongo-driver/mongo"
"go.mongodb.org/mongo-driver/mongo/options"
"go.mongodb.org/mongo-driver/mongo/readpref"
"time"
)

var MongoClient *mongo.Client


func ConnectToDB() (err error) {
MongoClient, err = mongo.NewClient(options.Client().ApplyURI("mongodb://localhost:localpassword@localhost:27017/?authSource=mula"))

if err != nil {
return err
}

ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
err = MongoClient.Connect(ctx)

if err != nil {
return err
}

return nil
}

func PingDatabase () error {
ctx, _ := context.WithTimeout(context.Background(), 5* time.Second)
err := MongoClient.Ping(ctx, readpref.Primary())

if err != nil {
return err
}
return nil
}
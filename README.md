# Backe end tokopedia play clone By GG3FSUP0119_Jidan Sandika Hidayat FS_6
## Prequisite
1. [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/)
2. [NodeJS](https://nodejs.org/en/download) v16 or higher 
3. NPM v8 or higher usually included with NodeJS

## Installation
1. Clone this repository
2. Run `npm install`

## Usage
1. Run `npm start`

# REST API

The REST API to the example app is described below.

## Get list of all Video

### Request

`GET /api/videos`


### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []

## Create a new Video

### Request

`POST /api/videos`


### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    {"url":"urlExample"}

## Get a specific Video

### Request

`GET /videos/:id`


### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 36

    {"id":1,"url":"urlExample"}


## Update a Video

### Request

`PATCH /videos/:Id`


### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 40

    {"id":1,"url":"urlExample"}


## Delete a Video

### Request

`DELETE /videos/:id`


### Response

    HTTP/1.1 204 No Content
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 204 No Content
    Connection: close
    Content-Type: application/json
    Content-Length: 40

    {"message":"video has been deleted"}

## Create a new Thumbnail

### Request

`POST /api/thumbnails/:videoId`


### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    {"url":"urlExample"}

## Get list of all Thumbnails

### Request

`GET /api/thumbnails`


### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []

## Update a Thumbnail

### Request

`PATCH /thumbnails/:Id`


### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 40

    {"id":1,"url":"urlExample"}

## Delete a Video

### Request

`DELETE /thumbnails/:id`


### Response

    HTTP/1.1 204 No Content
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 204 No Content
    Connection: close
    Content-Type: application/json
    Content-Length: 40

    {"message":"thumbnail has been deleted"}

## Get list of all Product in video

### Request

`GET /api/products/:videoid`


### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []

## Create a new Product in Video

### Request

`POST /api/products/:videoId`


### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    {"link_product":"urlExample", "title": "titleExample", "price": "priceExample"}

## Get list of all Comment in video

### Request

`GET /api/products/:videoid`


### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []


## Create a new Comment in Video

### Request

`POST /api/products/:videoId`


### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    {"username":"usernameExample", "comment": "commentExample"}

# MVC Architecture

![Screen Shot 2020-08-20 at 12 45 15 PM](https://user-images.githubusercontent.com/64725210/90806699-0191b000-e2e3-11ea-9833-8a31ba741ef0.png)

# "flickcritic." API

Our API, built with Express and Node.js, is an API with two linked models - a database of movies containing ids of their individual reviews which are based in a database of reviews which as well contain ids of their individual movies.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
You need mongodb community and Node installed on your machine.

```

### Installing

1. Fork and clone this repository.
1. Change into the new directory and create a development branch to work on.

On your terminal,

```
run npm install
```

To make sure mongodb is running

```
run brew services restart mongodb-community
```

#### Endpoint to fetch the data of all movies in the database

https://flick-critic-db.herokuapp.com/api/movies

## API

API

```json
{
	"title": " Coming To America",
	"mainImage": "url",
	"infoImage": "url",
	"movieInfo": {
		"summary": "An extremely pampered African Prince travels to Queens, New York, and goes undercover to find a wife that he can respect for her intelligence and will.",
		"director": "John Landis",
		"writers": "Eddie Murphy (story), David Sheffield (screenplay) ",
		"genres": " Comedy, Romance",
		"rated": "R",
		"releaseDate": "29-06-1988"
	},
	"reviews": [
		{ "review": " this is a great show", "datePosted": "02-08-2020" },
		{ "review": "this show sucks man", "datePosted": "02-08-2020" }
	]
}
```

## Table of Routes
![](https://user-images.githubusercontent.com/64725210/90826983-082f2000-e301-11ea-82bc-aa2d9031414f.png)

## Deployment

Add additional notes about how to deploy this on a live system

## Contributing

If you want to contribute to this project, you can [submit an issue](https://github.com/GroupFlickCritic/backend/issues) on this repository.

## Versioning

We use [Github](http://github.com) for versioning.

## Authors

- **Alisha Lawani** - [Lisha](https://github.com/alishalawani)
- **David Sams** - [davidedsams](https://github.com/davidedsams)
- **Roshonia Brooks** - [RoshoniaB](https://github.com/RoshoniaB)
- **Jason Choi** - [Choiboi500](https://github.com/Choiboi500)

## Acknowledgments

- IMDB - Movie details

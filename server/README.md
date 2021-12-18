# Running it

## Dev mode

```
yarn dev
```

# Sample calls

## Read all cards

```
GET http://localhost:3000/api/cards/
```

## Create card

```
POST http://localhost:3000/api/cards/
{
	"back": {"text": "Foo"},
	"front": {"text": "Bar"},
	"parentFolderID": "root"
}
```

## Update card

```
PUT http://localhost:3000/api/cards/:cardID
{
	"back": {"text": "Foo"},
	"front": {"text": "Bar"},
}
```

## Delete card

```
DELETE http://localhost:3000/api/cards/:cardID
```

## Create folder

```
POST http://localhost:3000/api/folders/
{
	"title": "Foo",
	"parentFolderID": "root"
}
```

## Update folder

```
PUT http://localhost:3000/api/folders/:folderID
{
	"title": "Bar",
}
```

## Delete folder

```
DELETE http://localhost:3000/api/folders/:folderID
```

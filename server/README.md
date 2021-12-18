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
	"folderID": "root"
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

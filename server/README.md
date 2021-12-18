# Running it

## Dev mode

```
yarn dev
```

# Sample calls

## Read all cards

```
GET https://localhost:3000/api/cards/
```

## Create card

```
POST https://localhost:3000/api/cards/
{
	"back": {"text": "Foo"},
	"front": {"text": "Bar"},
	"parentFolderID": "root"
}
```

## Update card

```
PUT https://localhost:3000/api/cards/:cardID
{
	"back": {"text": "Foo"},
	"front": {"text": "Bar"},
}
```

## Delete card

```
DELETE https://localhost:3000/api/cards/:cardID
```

## Create folder

```
POST https://localhost:3000/api/folders/
{
	"title": "Foo",
	"parentFolderID": "root"
}
```

## Update folder

```
PUT https://localhost:3000/api/folders/:folderID
{
	"title": "Bar",
}
```

## Delete folder

```
DELETE https://localhost:3000/api/folders/:folderID
```

# Generating a local TLS cert for testing

```
brew install mkcert
mkcert -key-file test-certs/key.pem -cert-file test-certs/cert.pem localhost
```

# Data model (Firestore)

Rules for every collection:

- Text a visitor reads has two fields: `_en` (English) and `_ta` (Tamil).
- Document IDs are readable lowercase words with dashes, for example `atway-ws100` or `madurai`.
- `displayOrder` is a number. Lower numbers show first.
- Names are exactly as written here, including upper and lower case.

## apps

Our apps and apps published on the Play Store. The website only shows them and links out.

| Field                          | Type                 | Example                                             |
| ------------------------------ | -------------------- | --------------------------------------------------- |
| name_en, name_ta               | text                 | "CluckScale"                                        |
| description_en, description_ta | text                 | "Poultry weighing app"                              |
| category                       | text                 | "poultry"                                           |
| playStoreUrl                   | text (URL)           | "https://play.google.com/store/apps/details?id=..." |
| iconUrl                        | text (URL)           |                                                     |
| screenshots                    | array of text (URLs) |                                                     |
| published                      | boolean              | true                                                |
| displayOrder                   | number               | 1                                                   |

## products

Our weighing scales (about 200 products).

| Field                          | Type       | Example                                                                            |
| ------------------------------ | ---------- | ---------------------------------------------------------------------------------- |
| brand                          | text       | "Atway" or "Athira"                                                                |
| name_en, name_ta               | text       | "WS-100 Platform Scale"                                                            |
| description_en, description_ta | text       |                                                                                    |
| category                       | text       | "platform"                                                                         |
| capacity                       | text       | "300 kg"                                                                           |
| image                          | text (URL) | main photo (placeholder until Week 3)                                              |
| images                         | map        | { front: "atway-ws100_front", side: "atway-ws100_side", back: "atway-ws100_back" } |
| displayOrder                   | number     | 1                                                                                  |

`images` holds the file name without the size. The site adds the size: `_400.webp`, `_900.webp` or `_1600.webp`. Filled in by the import script in Week 3.

## showrooms

| Field                  | Type       | Example                       |
| ---------------------- | ---------- | ----------------------------- |
| city_en, city_ta       | text       | "Madurai"                     |
| address_en, address_ta | text       |                               |
| phone                  | text       | "+91 98765 43210"             |
| hours_en, hours_ta     | text       | "Mon to Sat, 9:30 am to 7 pm" |
| mapUrl                 | text (URL) | Google Maps link              |
| photo                  | text (URL) |                               |
| displayOrder           | number     | 1                             |

Documents: `madurai`, `tuticorin`, `tirunelveli`.

## gallery

Photos that are not product photos: factory, fabrication process, showrooms.

| Field                  | Type   | Example                                                  |
| ---------------------- | ------ | -------------------------------------------------------- |
| image                  | text   | file name without size, for example "factory-welding-01" |
| caption_en, caption_ta | text   |                                                          |
| section                | text   | "factory", "process" or "showroom"                       |
| displayOrder           | number | 1                                                        |

## enquiries

Created by the Contact form. Visitors can create but not read; only admins can read.

| Field       | Type      | Example                          |
| ----------- | --------- | -------------------------------- |
| name        | text      |                                  |
| phone       | text      | "9876543210"                     |
| email       | text      | optional                         |
| productId   | text      | optional, a products document ID |
| productName | text      | optional                         |
| message     | text      |                                  |
| createdAt   | timestamp | server timestamp                 |
| handled     | boolean   | false                            |

## Example documents

### apps / cluckscale

```json
{
  "name_en": "CluckScale",
  "name_ta": "(Tamil name)",
  "description_en": "Poultry weighing and billing app",
  "description_ta": "(Tamil text)",
  "category": "poultry",
  "playStoreUrl": "https://play.google.com/store/apps/details?id=your.package.name",
  "iconUrl": "https://example.com/cluckscale-icon.png",
  "screenshots": [
    "https://example.com/shot1.png",
    "https://example.com/shot2.png"
  ],
  "published": true,
  "displayOrder": 1
}
```

### products / atway-ws100

```json
{
  "brand": "Atway",
  "name_en": "WS-100 Platform Scale",
  "name_ta": "(Tamil name)",
  "description_en": "Heavy duty platform scale",
  "description_ta": "(Tamil text)",
  "category": "platform",
  "capacity": "300 kg",
  "image": "https://placehold.co/600x450?text=Atway+WS-100",
  "images": {
    "front": "atway-ws100_front",
    "side": "atway-ws100_side",
    "back": "atway-ws100_back"
  },
  "displayOrder": 1
}
```

### showrooms / madurai

```json
{
  "city_en": "Madurai",
  "city_ta": "மதுரை",
  "address_en": "(street address, Madurai)",
  "address_ta": "(Tamil address)",
  "phone": "+91 98765 43210",
  "hours_en": "Mon to Sat, 9:30 am to 7 pm",
  "hours_ta": "(Tamil hours)",
  "mapUrl": "https://maps.google.com/?q=...",
  "photo": "https://example.com/madurai-showroom.jpg",
  "displayOrder": 1
}
```

### gallery / factory-welding-01

```json
{
  "image": "factory-welding-01",
  "caption_en": "Welding a platform scale frame",
  "caption_ta": "(Tamil caption)",
  "section": "factory",
  "displayOrder": 1
}
```

### enquiries / (random ID, created by the Contact form)

```json
{
  "name": "Ravi Kumar",
  "phone": "9876543210",
  "email": "",
  "productId": "atway-ws100",
  "productName": "WS-100 Platform Scale",
  "message": "Please send the price for 300 kg.",
  "createdAt": "(server timestamp)",
  "handled": false
}
```

where should I put this?

```

```

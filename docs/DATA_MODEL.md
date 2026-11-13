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

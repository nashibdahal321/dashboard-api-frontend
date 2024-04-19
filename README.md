This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


===

# Dashboard API

The Dashboard API provides endpoints for user authentication, registration, retrieving items, and initializing the database.

**BASE URL** ` https://dashboardapi-910b0a92507e.herokuapp.com/`

## Authentication

### Register
- **URL:** `/dashboard/register/`
- **Method:** POST
- **Parameters:**
  - `username`: Username of the user
  - `password`: Password of the user
  - `email`: Email of the user

  **Example**
  ```json
  {
    "username": "johndoe",
    "password": "Helloworld",
    "email": "johndoe@email.com"
  }
  ```
- **Response:**
  - Success:
    ```json
    {
        "success": true
    }
    ```
  - Failure:
    ```json
    {
        "success": false,
        "message": "Username not unique"  // or "Email not unique"
    }
    ```

### Login
- **URL:** `/dashboard/login/`
- **Method:** POST
- **Parameters:**
  - `username`: Username of the user
  - `password`: Password of the user

  **Example**
  ```json
  {
    "username": "johndoe",
    "password": "Helloworld"
  }
  ```
- **Response:**
  - Success:
    ```json
    {
        "success": true
    }
    ```
  - Failure:
    ```json
    {
        "success": false
    }
    ```


## Items

### Get All Items
- **URL:** `/dashboard/item/all/`
- **Method:** GET
- **Response:**
  ```json
  {
      "items": [
          {
              "id": 1,
              "name": "Item 1",
              "category": "Important",
              "in_stock": 20.4,
              "available_stock": 5.34,
              "tags": ["Tag 1", "Tag 2"]
          },
          // Other items...
      ]
  }
  ```

## Get Single Item

- **URL:** `/dashboard/item/<item_id>/`
- **Method:** GET
- **Parameters:**
    - `item_id`: ID of the item
- **Response:**
    ```json
    {
        "items": [
            {
                "id": 1,
                "name": "Item 1",
                "category": "Important",
                "in_stock": 20.4,
                "available_stock": 5.34,
                "tags": ["Tag 1", "Tag 2"]
            }
        ]
    }
    ```


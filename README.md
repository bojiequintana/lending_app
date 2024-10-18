# Lending app

A Lending app folder beginning structure.

## Getting Started

Follow the instructions below to set up the project locally.

### Prerequisites

Ensure you have the following installed on your system:

- **Git**: [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- **pnpm**: [Install pnpm](https://pnpm.io/installation)

### Installation

1. **Clone the repository with https**:
   ```bash
   git clone https://github.com/bojiequintana/lending_app.git
   ```
   **Clone the repository with ssh**:
   ```bash
   git clone git@github.com:bojiequintana/lending_app.git
   ```
2. **Install dependencies**:
   ```sh
   pnpm install
   ```
3. **Create .env**:
   ```sh
   SUPABASE_KEY=EXAMPLE_KEY
   SUPABASE_URL=EXAMPLE_URL
   ```
4. **Checkout to dev**:
   ```sh
   git checkout dev
   ```
5. **Checkout to dev**:

   Finally, run the following command to start the development server on your local machine

   ```sh
   pnpm dev
   ```

# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
pnpm run dev
```

## Deployment

First, build your app for production:

```sh
pnpm run build
```

Then run the app

Production mode

```sh
pnpm start
```

Development mode

```sh
pnpm dev
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `pnpm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

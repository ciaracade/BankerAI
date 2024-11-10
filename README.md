# BankerAI
🏦 An AI application that helps bankers navigate the Banking Management Knowledge System for University of Michigan's +Tech Innovation Jam

## What is BankerAI?
BankerAI is a banking tool to be used by bankers in multiple levels in banking instutions. 

## How to Set Up

### Backend
1. First, create and .env file and paste this template

```
export OPENAI_API_KEY= " "
export MONGO_DB_URI = " "

export PORT = 
```

2. Create an API key OpenAI and paste into the .env file at OPENAI_API_KEY.
3. Create an connection uri for MongoDB and past into the .env file at MONGO_DB_URI.

4. Run the application by doing ``` npx run dev ```.

### Frontend 
1. First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project team for the +Technial Innovation Jam for University of Michigan Ross School of Business
## Criar um módulo no NestJS
```
nest g module "nome do modulo sem aspas"
```

## Criar um service no NestJS
```
nest g service "nome do service sem aspas"
```

## Transformar schema em tabelas do banco
```
npx prisma db push
```

## Para desfazer o push do banco
```
npx prisma db pull
```

## Abrir o prisma studio
```
npx prisma studio
```

## Modelo do arquivo .env
DATABASE_URL="mysql://root:senha@localhost:3306/filmes"
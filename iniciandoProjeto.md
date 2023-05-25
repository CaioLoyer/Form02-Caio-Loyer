//instalando node_modules
npm i
//iniciando projeto
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
npm start


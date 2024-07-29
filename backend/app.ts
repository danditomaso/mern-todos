import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use((req, res, next) => {
//   const { token }: { token: string } = req.cookies;
//   if (!token) {
//     return next();
//   }
//   const payload = jwt.decode(token) as { id: string };
//   const me = User.findById(payload.id);
//   if (!me) {
//     return next();
//   }
//   res.locals.user = me;
//   req.user = me;
//   next();
// });

export default app;

require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { MESSAGE_CORRECT_CONECTION } = require("./utils/consts/connections");
const emisionRoutes = require("./routes/emisionRoutes");
const authRoutes = require("./routes/authRoute");
const recommendationsRoutes = require("./routes/recommendationsRouter");
const ConnectionMongoDB = require("./connections/mongoose");
const errorHandler = require("./middlewares/errorMiddleware");
const { verifyAuthToken, isSelf } = require("./middlewares/authMiddleware");
const swaggerSpec = require("./docs/swagger");
const swaggerUi = require("swagger-ui-express");
const userRouter = require("./routes/userRouter");

const app = express();
app.use(cors());
app.use(cookieParser());

// Middleware
app.use(express.json());

// Routes
const PATH_API = "/api";
// Ruta para la documentación
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(PATH_API, authRoutes);

// app.use(verifyAuthToken)

app.use(PATH_API, recommendationsRoutes);
app.use(PATH_API, emisionRoutes);
app.use(PATH_API, isSelf, userRouter);

// Agregar el middleware de manejo de errores después de las rutas
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`${MESSAGE_CORRECT_CONECTION.SERVER} ${process.env.PORT}`);
  ConnectionMongoDB();
});

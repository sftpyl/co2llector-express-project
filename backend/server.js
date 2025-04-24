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
const verifyAuthToken = require("./middlewares/verifyAuthToken");
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

app.use(PATH_API, authRoutes);
app.use(PATH_API, verifyAuthToken, recommendationsRoutes);
app.use(PATH_API, verifyAuthToken, emisionRoutes);
app.use(PATH_API, verifyAuthToken, userRouter);

// Ruta para la documentación
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Agregar el middleware de manejo de errores después de las rutas
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`${MESSAGE_CORRECT_CONECTION.SERVER} ${process.env.PORT}`);
  ConnectionMongoDB();
});

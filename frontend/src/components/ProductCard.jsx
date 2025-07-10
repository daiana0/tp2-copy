import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";


const ProductCard = ({ producto }) => {
  
  const tieneOferta = producto.oferta;
  const tieneDescuento = producto.descuento > 0;
  const precioFinal = tieneDescuento
    ? producto.precio - (producto.precio * producto.descuento) / 100
    : producto.precio;

  return (
    <Card
      sx={{
        width: 300,
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        m: 2,
        border: tieneOferta ? "2px solid red" : "1px solid #ccc",
        position: "relative",
      }}
    >
      {/* ⭐️ Indicador de oferta */}
      {tieneOferta && (
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            backgroundColor: "red",
            color: "white",
            px: 1,
            py: 0.5,
            fontSize: "0.75rem",
            borderRadius: "4px",
            zIndex: 1,
          }}
        >
          ¡OFERTA!
        </Box>
      )}

      <CardMedia
        component="img"
        height="200"
        image={producto.imagen}
        alt={producto.nombre}
        sx={{
          objectFit: "cover",
          width: "100%",
          maxHeight: 200,
        }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h7" noWrap>
          {producto.nombre}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "12px" }}
        >
          {producto.descripcion}
        </Typography>

        {/* 💰 Precio con y sin descuento */}
        {tieneDescuento ? (
          <>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                textDecoration: "line-through",
                fontSize: "14px",
                mt: 1,
              }}
            >
              ${producto.precio.toFixed(2)}
            </Typography>
            <Typography variant="h6" fontWeight="bold" color="error">
              ${precioFinal.toFixed(2)}
            </Typography>
          </>
        ) : (
          <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
            ${producto.precio.toFixed(2)}
          </Typography>
        )}
      </CardContent>

      <CardActions sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
        <Button size="small" variant="contained" color="secondary">
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

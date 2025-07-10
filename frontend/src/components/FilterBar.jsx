import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import productList from "../components/ProductList";

const categorias = ["Categorias", "Liquidación", "Docentes", "Alumnos"];

const FilterBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "left",
        gap: 1,
        p: 1,
        pl: 2,
        backgroundColor: "info.main",
      }}
    >
      {categorias.map((categoria, index) => (
        <Button
          key={index}
          variant="text"
          color="secondary"
          sx={{ minWidth: 60 }}
        >
          {categoria}
        </Button>
      ))}
      {/*} renderInput → Define cómo se verá el campo de entrada dentro del Autocomplete.
      params → Son los parámetros para gestionar el autocompletado
             <TextField {...params} /> → Aplica esos parámetros al TextField, asegurando que funcione con el Autocomplete. */}
      <Autocomplete
        disablePortal
        options={productList}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Buscar producto" size="small" />
        )}
      />
    </Box>
  );
};

export default FilterBar;

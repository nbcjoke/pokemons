import {
  Typography,
  IconButton,
  Box,
  Grid,
  Button,
  Divider,
  SvgIcon,
  Tooltip,
} from "@mui/material";
import {
  ShoppingCart,
  FavoriteBorder,
  Colorize,
  Security,
  Speed,
} from "@mui/icons-material";

import { FormatValues } from "../../../../utils/formatValues";
import styles from "./style.module.css";

const STATS_ICONS = {
  hp: {
    icon: FavoriteBorder,
    color: "primary",
    toolTip: "hp",
  },
  attack: {
    icon: Colorize,
    color: "primary",
    toolTip: "attack",
  },
  defense: {
    icon: Security,
    color: "primary",
    toolTip: "defense",
  },
  "special-attack": {
    icon: Colorize,
    color: "success",
    toolTip: "special attack",
  },
  "special-defense": {
    icon: Security,
    color: "success",
    toolTip: "special defense",
  },
  speed: {
    icon: Speed,
    color: "primary",
    toolTip: "speed",
  },
};

export const PokemonDetailsLayout = ({ isLoading, info }) => {
  return (
    <>
      {isLoading ? (
        <>
          <div>
            <div className={styles["products__wrapper-title"]}>
              <Divider variant="fullWidth">
                <Typography variant="h4">Product Details</Typography>
              </Divider>
            </div>
            <div className={styles["products__wrapper-description"]}>
              <Typography variant="h6">
                On this page u can see more information about our prodicts and
                buy it
              </Typography>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                borderRadius: "4px",
                backgroundColor: "#000",
                padding: "35px",
                width: "628px",
                height: "680px",
              }}
            ></div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className={styles["products__wrapper-title"]}>
              <Divider variant="fullWidth">
                <Typography variant="h4">Product Details</Typography>
              </Divider>
            </div>
            <div className={styles["products__wrapper-description"]}>
              <Typography variant="h6">
                On this page u can see more information about our prodicts and
                buy it
              </Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                borderRadius: "4px",
                backgroundColor: "#000",
                padding: "35px",
                // boxShadow: "0 0 20px 5px #686868"
              }}
            >
              <h1
                style={{
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {info.name}
              </h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  gap: "30px",
                  marginBottom: "45px",
                }}
              >
                <div style={{ marginTop: "10px" }}>
                  <img
                    style={{ width: "200%" }}
                    alt="product"
                    src={info.image}
                  ></img>
                </div>
                <div style={{ color: "#fff" }}>
                  {info.stats?.map((stat) => (
                    <div
                      key={stat.title}
                      style={{
                        display: "flex",
                        gap: "20px",
                        marginTop: "10px",
                      }}
                    >
                      <Tooltip
                        title={STATS_ICONS[stat.title]?.toolTip}
                        placement="left"
                      >
                        <SvgIcon
                          component={STATS_ICONS[stat.title]?.icon}
                          color={STATS_ICONS[stat.title]?.color}
                        />
                      </Tooltip>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <h2
                style={{
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Abilities
              </h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "30px",
                  padding: "20px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    color: "#9dd2ff",
                    display: "flex",
                    flexDirection: "column",
                    gap: "46px",
                  }}
                >
                  {info.abilities?.map((abilitie) => (
                    <div>{abilitie.title}</div>
                  ))}
                </div>
                <div
                  style={{
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                    maxWidth: "480px",
                  }}
                >
                  {info.abilities?.map((abilitie) => (
                    <div>{abilitie.description}</div>
                  ))}
                </div>
              </div>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", gap: "20px" }}>
                  <Button color="primary" variant="outlined">
                    Buy
                  </Button>
                  <IconButton>
                    <ShoppingCart color="primary" />
                  </IconButton>
                </div>
                <div
                  style={{
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "20px",
                  }}
                >
                  <FormatValues price={info.price} />
                </div>
              </Box>
            </div>
          </div>
        </>
      )}
    </>
  );
};

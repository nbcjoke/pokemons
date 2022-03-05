import {
  Typography,
  IconButton,
  Box,
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

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

export const PokemonDetailsLayout = ({ isLoading, info, addItemToCart }) => {
  console.log(info);
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
          <div className={styles.wrapper__details}>
            <div className={styles.details}>
              <h1 className={styles.name}>{info.name}</h1>
              <div className={styles.wrapper__info}>
                <div className={styles.wrapper__img}>
                  <img
                    className={styles.img}
                    alt="product"
                    src={info.image}
                  ></img>
                </div>
                <div className={styles.wrapper__stats}>
                  {info.stats?.map((stat) => (
                    <div key={stat.title} className={styles.stats}>
                      <Tooltip
                        title={STATS_ICONS[stat.title]?.toolTip}
                        placement="left"
                      >
                        <SvgIcon
                          component={STATS_ICONS[stat.title]?.icon}
                          color={STATS_ICONS[stat.title]?.color}
                        />
                      </Tooltip>
                      <div className={styles.wrapper__value}>{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <h2 className={styles.abilities__title}>Abilities</h2>

              <div>
                {info.abilitie?.map((abilitie) => (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        {info.abilities?.map((abilitie) => (
                          <div>{abilitie.title}</div>
                        ))}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {info.abilities?.map((abilitie) => (
                          <div>{abilitie.description}</div>
                        ))}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      {info.abilities?.map((abilitie) => (
                        <div>{abilitie.title}</div>
                      ))}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {info.abilities?.map((abilitie) => (
                        <div>{abilitie.description}</div>
                      ))}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className={styles.wrapper__abilities}>
                <div className={styles.wrapper__title}>
                  {info.abilities?.map((abilitie) => (
                    <div>{abilitie.title}</div>
                  ))}
                </div>
                <div className={styles.abilitie}>
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
                <div className={styles.wrapper__buttons}>
                  <Button color="primary" variant="outlined">
                    Buy
                  </Button>
                  <IconButton
                    onClick={() =>
                      addItemToCart({
                        id: info.id,
                        name: info.name,
                        image: info.image,
                        price: info.price,
                      })
                    }
                  >
                    <ShoppingCart color="primary" />
                  </IconButton>
                </div>
                <div className={styles.wrappper__price}>
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

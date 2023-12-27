// import React from "react";
// import { withStyles } from "@material-ui/core/styles";
// import Tooltip from "@material-ui/core/Tooltip";
// import Chip from "@material-ui/core/Chip";
// import { Link } from "react-router-dom";
// import style from "./Card.module.css";

// const CustomTooltip = withStyles((theme) => ({
//   tooltip: {
//     backgroundColor: "black" , // Change to your desired tooltip background color
//     color: "#34C94B",
//     fontSize: theme.typography.pxToRem(13),
//     border: "1px solid #dadde9",
//   },
// }))(Tooltip);

import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import style from "./Card.module.css";

const CustomTooltip = styled(Tooltip)({
  backgroundColor: "black",
  color: "#34C94B",
  fontSize: (theme) => theme.typography.pxToRem(13),
  border: "1px solid #dadde9",
});

function Card({ data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, title, follows, slug, songs } = data;
        return (
          <CustomTooltip title={`${songs.length} songs`} placement="top" arrow
            enterTouchDelay={0}
            leaveTouchDelay={600}
          >
            <Link to={`/album/${slug}`}>
              <div className={style.Wrapper}>
                <div className={style.card}>
                  <img src={image} alt="song" loading="lazy" />
                  <div className={style.banner}>
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      className={style.chip}
                    />
                  </div>
                </div>
                <div className={style.titleWrapper}>
                  <p>{title}</p>
                </div>
              </div>
            </Link>
          </CustomTooltip>
        );
      }
      case "song": {
        const { likes, image, title } = data;
        return (
          <div className={style.Wrapper}>
            <div className={style.card}>
              <img src={image} alt="song" loading="lazy" />
              <div className={style.banner}>
                <div className={style.pill}>
                  <p>{likes} Likes</p>
                </div>
              </div>
            </div>
            <div className={style.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };

  return getCard(type);
}

export default Card;

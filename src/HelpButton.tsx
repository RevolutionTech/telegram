import React, { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { Button } from "./buttons";

const StyledButton = styled(Button)`
  height: 3em;
  padding: 1em 1.25em;
  border-radius: 50%;
  background-color: white;
  // https://fluid.style/type?min=2&max=3&min-bp=20&max-bp=55&unit=%22rem%22
  font-size: clamp(2rem, 1.429rem + 2.857vw, 3rem);
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const HelpButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            How to Use this App
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            <p>
              Welcome to the Telegram app! You can use this app instead of the
              word fragment deck and number tiles in the Telegram board game.
            </p>
            <p>
              At the start of each round, instead of drawing word fragments from
              the deck, simply click the &quot;Draw word fragments&quot; button
              in the app. Follow the remaining rules as normal.
            </p>
          </Typography>
        </Box>
      </Modal>
      <StyledButton onClick={openModal}>?</StyledButton>
    </div>
  );
};

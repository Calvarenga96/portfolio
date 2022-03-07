import { Avatar, Box } from "@chakra-ui/react";
import Picture from "../../../assets/img/profile-picture.png";

const ProfilePicture = () => {
  return (
    <Box transform="rotate(7deg)">
      <Avatar
        name="Christian Alvarenga"
        bg="purpleColor.100"
        size="xl"
        src={Picture}
        loading="lazy"
        showBorder={true}
      />
    </Box>
  );
};

export default ProfilePicture;

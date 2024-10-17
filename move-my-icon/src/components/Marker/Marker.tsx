import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { blueGrey } from "@mui/material/colors";
import { Direction } from "../../enums/directions";
import { convertDirectionToDegrees } from "../../helpers/helpers";

interface MarkerProps {
  direction: Direction;
}

export default function Marker({ direction }: MarkerProps) {
  const deg = convertDirectionToDegrees(direction);
  return (
    <AccessibilityNewIcon
      data-testid="marker"
      sx={{ transform: `rotate(${deg})`, color: blueGrey[900] }}
    />
  );
}

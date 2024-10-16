import { Card, CardContent, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useState } from "react";
import { INVALID_COORDINATES_ERROR, INVALID_DIRECTION_ERROR, INVALID_FORMAT } from "../../helpers/error-messages";
import { validateInput } from "../../helpers/helpers";
import MainGrid from "../MainGrid/MainGrid";

const GridVisualizer = () => {
    const [isInputValid, setIsInputValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [inputValue, setInputValue] = useState("0,0, NORTH");

    const validationHandler = (input: string) => {
        const { areCoordinatesValid, isDirectionValid, isFormatValid } = validateInput(input);
        const isValid = (areCoordinatesValid && isDirectionValid && isFormatValid);
        setIsInputValid(isValid);

        var msg = `${isFormatValid ? areCoordinatesValid ? (isDirectionValid ? "" : INVALID_DIRECTION_ERROR)
            : isDirectionValid ? INVALID_COORDINATES_ERROR : `${INVALID_COORDINATES_ERROR} ${INVALID_DIRECTION_ERROR}` : INVALID_FORMAT}`;

        setErrorMessage(msg);

        setInputValue(isValid ? input : "0,0, NORTH");
    }

    return (
        <>
            <Grid container spacing={2} data-testid="gridVisualizer">
                <Grid>
                    <Card sx={{ height: 500, width: 300 }}>
                        <CardContent>
                            <Typography variant="subtitle1" gutterBottom>
                                Enter the coordinates and direction to move the object. (ex. 1,1 NORTH)
                            </Typography>
                            <br />
                            <TextField
                                sx={{ width: '100%' }}
                                id="outlined-basic"
                                label="Coordinates and Direction"
                                variant="outlined"
                                helperText={errorMessage}
                                error={!isInputValid}
                                onBlur={value => validationHandler(value.target.value.trim())}
                                data-testid="inputText"
                            />
                        </CardContent>

                    </Card>

                </Grid>
                <Grid>
                    <MainGrid input={inputValue} />
                </Grid>
            </Grid>

        </>

    )
}

export default GridVisualizer;
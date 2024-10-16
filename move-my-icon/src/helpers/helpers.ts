import { Direction } from "../enums/directions";

export const validateInput = (input: string) => {

    var inputValues = input.split(' ');
    if (inputValues.length !== 2) {
        return {
            isFormatValid: false,
            areCoordinatesValid: false,
            isDirectionValid: false
        }
    }

    return {
        isFormatValid: true,
        areCoordinatesValid: areCoordinatesValid(inputValues[0]),
        isDirectionValid: isDirectionValid(inputValues[1])
    };
}

const areCoordinatesValid = (input: string) => {
    var coordinates = input.split(',');
    if (coordinates.length !== 2) {
        return false;
    }

    var areNumbers = !isNaN(Number(coordinates[0])) && !isNaN(Number(coordinates[1]))

    if (!areNumbers) {
        return false;
    }

    return (Number(coordinates[0]) > -1 && Number(coordinates[0]) < 5)
        && (Number(coordinates[1]) > -1 && Number(coordinates[1]) < 5)
}

const isDirectionValid = (input: string) => {
    return ["NORTH", "EAST", "SOUTH", "WEST"].includes(input);
}

export const parseGridProps = (input: string) => {
    var values = input.split(' ');
    return {
        coordinates: values[0],
        direction: values[1]
    }
}

export const convertDirectionToDegrees = (input: Direction) => {
    switch (input) {
        case Direction.NORTH:
            return "360deg";
        case Direction.EAST:
            return "90deg";
        case Direction.SOUTH:
            return "180deg";
        case Direction.WEST:
            return "270deg";
    }
}
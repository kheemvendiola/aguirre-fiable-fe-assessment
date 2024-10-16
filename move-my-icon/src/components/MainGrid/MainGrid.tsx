import { blueGrey } from '@mui/material/colors';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Direction } from '../../enums/directions';
import { parseGridProps } from '../../helpers/helpers';
import Marker from '../Marker/Marker';

interface MainGridProps {
    input: string;
}

const MainGrid = ({ input }: MainGridProps) => {
    const { coordinates, direction } = parseGridProps(input);
    const palette = blueGrey;

    return (
        <Table sx={{ width: 500, height: 500, backgroundColor: palette[100] }} >
            <TableBody>
                {[4, 3, 2, 1, 0].map((row, i) => (
                    <TableRow key={i}>
                        {
                            [0, 1, 2, 3, 4].map((cell, i) => (
                                <TableCell component="td" key={i}
                                    sx={{ border: 3, borderColor: palette[50], width: 50, height: 50, textAlign: 'center' }}>
                                    {
                                        (coordinates === `${row},${cell}`) && <Marker direction={direction as Direction} />
                                    }
                                </TableCell>))
                        }
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}


export default MainGrid;
